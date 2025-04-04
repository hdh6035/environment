import init, { setup_button } from "../pkg/wasmr.js";

const runWasm = async () => {
    await init();
    setup_button();
};
runWasm();
