import { createRouter, createWebHistory } from 'vue-router'

let routes = [
    {
        // path: "/:catchAll(.*)",
        path: "*",
        redirect: "/",
    },
];

const modules = require.context("./", true, /router\.js$/);
modules
    .keys()
    .filter((module) => {
        module !== "./router.js";
    })
    .map((module) => {
        routes = routes.concat(modules(module).default);
    });

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
