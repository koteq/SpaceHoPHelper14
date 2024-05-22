#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use platform_dirs::AppDirs;
use tao::{
    event::{Event, StartCause, WindowEvent},
    event_loop::{ControlFlow, EventLoop},
    window::{Icon, WindowBuilder},
};
use view::get_view;
use wry::{WebContext, WebViewBuilder};

mod view;

fn main() -> wry::Result<()> {
    let event_loop = EventLoop::new();
    let window = WindowBuilder::new()
        .with_title("SpaceHoPHelper14")
        .with_maximized(true)
        .with_window_icon(Some(get_icon()))
        .build(&event_loop)
        .unwrap();
    
    let mut context = WebContext::new(Some(AppDirs::new(Some("SpaceHoPHelper14"), false).unwrap().data_dir));
    let _webview = WebViewBuilder::new(&window)
        .with_web_context(&mut context)
        .with_html(get_view())
        .build()?;

    event_loop.run(move |event, _, control_flow| {
        *control_flow = ControlFlow::Wait;

        match event {
            Event::NewEvents(StartCause::Init) => println!("Wry has started!"),
            Event::WindowEvent {
                event: WindowEvent::CloseRequested,
                ..
            } => *control_flow = ControlFlow::Exit,
            _ => (),
        }
    });

    #[allow(unreachable_code)]
    Ok(())
}

fn get_icon() -> Icon {
    let (icon_rgba, icon_width, icon_height) = {
        let image = image::load_from_memory(include_bytes!("../assets/icons/icon.png"))
            .unwrap()
            .into_rgba8();
        let (width, height) = image.dimensions();
        let rgba = image.into_raw();
        (rgba, width, height)
    };
    Icon::from_rgba(icon_rgba, icon_width, icon_height).unwrap()
}