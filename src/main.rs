use tao::{
    event::{Event, StartCause, WindowEvent},
    event_loop::{ControlFlow, EventLoop},
    window::WindowBuilder,
};
use view::get_view;
use wry::WebViewBuilder;

mod view;

fn main() -> wry::Result<()> {
    let event_loop = EventLoop::new();
    let window = WindowBuilder::new()
        .with_title("SpaceHoPHelper14")
        .with_maximized(true)
        .build(&event_loop)
        .unwrap();
    let _webview = WebViewBuilder::new(&window)
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
