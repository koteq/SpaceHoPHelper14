pub mod profiles { 
    use crate::profile::Profile;
    use std::{collections::HashMap, path::Path};
    use tauri::command;

    const PROFILES_FOLDER: &str = "assets/profiles";

    #[command]
    pub async fn get_profiles_list(app: tauri::AppHandle) -> HashMap<String, String> {
        let mut profiles = HashMap::new();
        let profiles_folder = app.path_resolver().resolve_resource(PROFILES_FOLDER.to_owned()).unwrap();
        
        let mut entries = tokio::fs::read_dir(profiles_folder).await.unwrap();
        while let Some(entry) = entries.next_entry().await.unwrap() {
            if entry.file_type().await.unwrap().is_dir() { continue; }

            let path = entry.path().into_os_string().into_string().unwrap();
            let name = if let Some(name) = get_profile_name(&entry.path()).await { name } else { continue; };

            println!("Found profile: {}, path: {}", name, path);

            profiles.insert(name, path);
        }

        profiles
    }

    #[command]
    pub async fn get_profile(app: tauri::AppHandle, path: String) -> Option<Profile> {
        let path = app.path_resolver().resolve_resource(PROFILES_FOLDER.to_owned()).unwrap().join(path);
        
        println!("Loading profile: {}", path.display());

        let content = tokio::fs::read_to_string(path).await.ok()?;
        let profile: Profile = serde_yaml::from_str(&content).ok()?;

        Some(profile)
    }

    async fn get_profile_name(path: &Path) -> Option<String> {
        let content = tokio::fs::read_to_string(path).await.ok()?;
        let profile: serde_yaml::Value = serde_yaml::from_str(&content).ok()?;

        Some(profile["profile"].as_str()?.to_owned())
    }
}