use tauri::command;

#[command]
pub fn get_repository() -> String {
    env!("CARGO_PKG_REPOSITORY").to_owned()
}