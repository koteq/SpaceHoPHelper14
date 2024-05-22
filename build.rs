use std::{env, process::Command};

use winresource::WindowsResource;

fn main() {
    if env::var_os("CARGO_CFG_WINDOWS").is_some() {
        Command::new("cmd").arg("/C")
            .args(&["yarn", "run", "build"])
            .current_dir("view")
            .status().expect("Failed to execute command");

        WindowsResource::new()
            // This path can be absolute, or relative to your crate root.
            .set_icon("assets/icons/icon.ico")
            .compile()
            .unwrap();
    }
}