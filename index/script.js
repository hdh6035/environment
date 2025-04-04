import init, { setup_button, initation } from "../pkg/wasmr.js";

const runWasm = async () => {
    await init();
    setup_button();
    initation()
};
runWasm();
