import { createApp } from "vue";
import App from "./App.vue";
import index from "/src/store/index.ts";
import router from "./router/index.ts";

let app = createApp(App);

app.use(index);
app.use(router);

app.mount("#app");
