pub fn get_view() -> String {
    format!(
        include_str!("../view/index.html"),
        includes = get_includes(),
        script = inline_js(include_str!("../view/script.js"))
    )
}

fn get_includes() -> String {
    format!(
        r#"{}
        {}
        {}"#
        , inline_css(include_str!("../view/bootstrap.min.css"))
        , inline_js(include_str!("../view/bootstrap.bundle.min.js"))
        , inline_css(include_str!("../view/style.css"))
    )
}

fn inline_js(content: &str) -> String {
    format!(r#"<script type="text/javascript">{}</script>"#, content)
}

fn inline_css(content: &str) -> String {
    format!(r#"<style type="text/css">{}</style>"#, content)
}