use core::option::Option::None;

use wasm_bindgen::prelude::*;
use web_sys::{window, Document, HtmlElement, UrlSearchParams};

#[wasm_bindgen(start)]
pub fn start() {
}

#[wasm_bindgen]
pub fn setup_button() {
    let document: Document = window()
        .unwrap()
        .document()
        .unwrap();

    let button = document
        .get_element_by_id("start-btn")
        .unwrap()
        .dyn_into::<HtmlElement>()
        .unwrap();

    let closure = Closure::wrap(Box::new(move || {
        let _ = window()
            .unwrap()
            .location()
            .set_href("/index.html");
    }) as Box<dyn Fn()>);

    button.set_onclick(Some(closure.as_ref().unchecked_ref()));
    closure.forget(); 
}

#[wasm_bindgen]
pub fn get_query_value_int(key: &str) -> Option<i32> {
    let window = window()?;
    let location = window.location();
    let search = location.search().ok()?;
    
    let params = UrlSearchParams::new_with_str(&search).ok()?;
    params.get(key).and_then(|v| v.parse::<i32>().ok())
}

#[wasm_bindgen]
pub fn turnstyle_id_to_block(id: u8) -> None {
    let window = window().unwrap();
    let document = window.document().unwrap();
    let block = document.get_element_by_id(&format!("{}", id)).unwrap();
}