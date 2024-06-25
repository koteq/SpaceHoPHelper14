#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod profile;
use commands::profiles::{get_profiles_list, get_profile};

use tauri::{generate_handler, plugin::TauriPlugin, Runtime};

fn main() {
    tauri::Builder::default()
      .plugin(
        logging(),
      )
      .invoke_handler(generate_handler![
        get_profiles_list,
        get_profile
      ])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}

fn logging<R>() -> TauriPlugin<R> where R: Runtime {
  use tauri_plugin_log::{Builder, LogTarget};
  Builder::new()
    .targets([
        // write to the app folder
        LogTarget::Folder(std::env::current_exe().unwrap().parent().unwrap().join("logs")),
        // write to stdout
        LogTarget::Stdout,
        // forward logs to the webview
        LogTarget::Webview,
    ])
    .build()
}