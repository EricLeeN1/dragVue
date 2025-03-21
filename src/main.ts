import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "@/assets/style/index.scss";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";

import VueKonva from "vue-konva";
const pinia = createPinia();

const app = createApp(App);
app.use(VueKonva).use(router).use(pinia).mount("#app");
