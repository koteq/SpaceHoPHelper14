#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
use commands::get_repository;

use tauri::generate_handler;

fn main() {
    tauri::Builder::default()
      .invoke_handler(generate_handler![get_repository])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}