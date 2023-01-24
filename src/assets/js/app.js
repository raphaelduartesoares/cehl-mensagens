import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import data from "/src/assets/data/data.json" assert { type: "json" };

createApp({
    data() {
        return {
            data,
        };
    },
}).mount("#app");
