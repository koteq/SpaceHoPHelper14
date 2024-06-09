pub mod profiles { 
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
            let name = get_profile_name(path.as_ref()).await;

            println!("Found profile: {}, path: {}", name, path);

            profiles.insert(name, path);
        }

        profiles
    }

    async fn get_profile_name(path: &Path) -> String {
        let content = tokio::fs::read_to_string(path).await.unwrap();
        let profile: serde_json::Value = serde_json::from_str(&content).unwrap();

        profile["profile"].to_string()
    }
}