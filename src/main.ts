import { DefaultApolloClient } from "@vue/apollo-composable";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { apolloClient } from "./config/ApolloClient";
import "./global.css";
import router from "./router";
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.provide(DefaultApolloClient, apolloClient);
app.mount("#app");
