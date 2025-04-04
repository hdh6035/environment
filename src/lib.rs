use wasm_bindgen::prelude::*;
use web_sys::{window, Document, HtmlElement};


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
pub fn initation() {
    match get_query_value_int("booth") {
        Ok(id) => turnstyle_id_to_block(id),
        Err(err) => web_sys::console::log_1(&format!("Query param error: {:?}", err).into()),
    }
}

#[wasm_bindgen]
pub fn get_query_value_int(key: &str) -> Result<u8, JsValue> {
    let window = window().ok_or("no window")?;
    let location = window.location();
    let search = location.search().map_err(|_| "no search")?;

    let params = web_sys::UrlSearchParams::new_with_str(&search).map_err(|_| "bad params")?;
    let val = params.get(key).ok_or("key not found")?;
    val.parse::<u8>().map_err(|_| "parse failed").map_err(JsValue::from)
}


#[wasm_bindgen]
pub fn turnstyle_id_to_block(id: u8) {
    let window = window().unwrap();
    let document = window.document().unwrap();
    let block = document.get_element_by_id(&format!("{}", id)).unwrap();
    let block = block.dyn_into::<HtmlElement>().unwrap(); // HtmlElement로 변환

    block.style().set_property("display", "block").unwrap();
}

