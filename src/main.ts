import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import ru from "element-plus/es/locale/lang/ru";
import "element-plus/dist/index.css";
import "./assets/index.postcss";
import router from "./router";
import "./style.css"
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia()
app.use(pinia)
app.use(router);
app.use(ElementPlus);
app.use(ElementPlus, { locale: ru });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
