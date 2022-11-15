import { createApp } from "vue";
import { createPinia } from "pinia";
import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";
import "vue3-snackbar/dist/style.css";
import VueEasyLightbox from "vue-easy-lightbox";

import App from "./App.vue";
import router from "./router";

import "./style.css";
import "./assets/main.css";

const app = createApp(App);

app.use(SnackbarService);
app.use(VueEasyLightbox);
app.component("vue3-snackbar", Vue3Snackbar);
app.use(createPinia());
app.use(router);

app.mount("#app");
