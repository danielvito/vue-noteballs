import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
