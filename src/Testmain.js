import { createApp } from "vue";
import './Teststyle.css'
import App from "./TestApp.vue";
import router from "./router";

createApp(App).use(router).mount('#app')