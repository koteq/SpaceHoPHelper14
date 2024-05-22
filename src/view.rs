pub fn get_view() -> String {
    include_str!("../view/dist/index.html").to_owned()
}