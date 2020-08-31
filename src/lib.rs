use wasm_bindgen::prelude::*;

	#[wasm_bindgen]
	pub fn calculate(principal: &str, rate: &str, time: &str) -> String {
		let p = principal.parse::<i32>().unwrap();
		let r = rate.parse::<i32>().unwrap();
		let t = time.parse::<i32>().unwrap();

		let ci= p*((1+ (r/100))^t);
		return serde_json::to_string(&ci).unwrap();
	}
