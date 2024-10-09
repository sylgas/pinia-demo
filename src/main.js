import { createApp } from "vue";
import App from "./App.vue";
import store from "/src/store/store.ts";
import router from "./router/index.ts";

let app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
