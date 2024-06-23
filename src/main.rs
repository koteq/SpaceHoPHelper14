#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod profile;
use commands::profiles::{get_profiles_list, get_profile};

use tauri::generate_handler;

fn main() {
    tauri::Builder::default()
      .invoke_handler(generate_handler![
        get_profiles_list,
        get_profile
      ])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}