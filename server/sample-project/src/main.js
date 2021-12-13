import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { charactersLimiter, imdbLink } from "./filter";
import "@/assets/css/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import VueClazyLoad from "vue-clazy-load";
import axios from "axios";

const app = createApp(App);

app.use(VueClazyLoad);
library.add(fas);
app.component("font-awesome-icon", FontAwesomeIcon);
axios.defaults.baseURL = "https://api.themoviedb.org/3";

app.config.globalProperties.$filters = {
    charactersLimiter(value, limit) {
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    },
    imdbLink(value) {
        return 'https://www.imdb.com/title' + value + '/';
    }
}

app.use(router);
app.use(store);

app.mount("#app");

// new Vue({
//     router,
//     store,
//     render: (render) => {
//         return render(App);
//     },
// }).$mount("#app");
