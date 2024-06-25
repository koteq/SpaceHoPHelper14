pub mod profiles { 
    use crate::profile::Profile;
    use std::{collections::HashMap, path::Path};
    use log::{error, info, trace};
    use tauri::command;

    const PROFILES_FOLDER: &str = "assets/profiles";

    #[derive(Debug, thiserror::Error, serde::Serialize)]
    pub enum LoadingProfileError {
        #[error("Failed to read file: {0}")]
        ReadFileError(String),
        #[error("Failed to parse file: {0}")]
        ParseFileError(String),
    }

    #[command]
    pub async fn get_profiles_list(app: tauri::AppHandle) -> HashMap<String, String> {
        let mut profiles = HashMap::new();
        let profiles_folder = app.path_resolver().resolve_resource(PROFILES_FOLDER.to_owned()).unwrap();
        trace!("Reading profiles folder: {}", profiles_folder.display());
        
        let mut entries = tokio::fs::read_dir(profiles_folder).await.unwrap();
        while let Some(entry) = entries.next_entry().await.unwrap() {
            if entry.file_type().await.unwrap().is_dir() { continue; }

            let path = entry.path().into_os_string().into_string().unwrap();
            trace!("Found file: {}", path);

            if !path.ends_with(".yaml") { continue; }

            let name = if let Some(name) = get_profile_name(&entry.path()).await { name } else { continue; };
            info!("Found profile: {}, path: {}", name, path);

            profiles.insert(name, path);
        }

        profiles
    }

    #[command]
    pub async fn get_profile(app: tauri::AppHandle, path: String) -> Result<Profile, LoadingProfileError> {
        let path = app.path_resolver().resolve_resource(PROFILES_FOLDER.to_owned()).unwrap().join(path);
        
        info!("Loading profile: {}", path.display());

        let content = tokio::fs::read_to_string(path).await.map_err(|e| LoadingProfileError::ReadFileError(e.kind().to_string()))?;
        let profile: Profile = serde_yaml::from_str(&content).map_err(|e| LoadingProfileError::ParseFileError(e.to_string()))?;

        Ok(profile)
    }

    async fn get_profile_name(path: &Path) -> Option<String> {
        let content = tokio::fs::read_to_string(path).await.ok()?;
        let profile: serde_yaml::Value = match serde_yaml::from_str(&content) {
            Ok(profile) => profile,
            Err(err) => {
                error!("Failed to parse profile: {}", err);
                return None
            }
        };

        Some(profile["profile"].as_str()?.to_owned())
    }
}