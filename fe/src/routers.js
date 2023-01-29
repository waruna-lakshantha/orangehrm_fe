import TheHome from "./components/TheHome.vue"
import TheLogin from "./components/TheLogin.vue"
import TheEmpData from "./components/TheEmpData.vue"
import TheLeave from "./components/TheLeave.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: "TheLogin",
        component: TheLogin,
        path: "/"        
    },
    {
        name: "TheHome",
        component: TheHome,
        path: "/home"
    },
    {
        name: "TheEmpData",
        component: TheEmpData,
        path: "/emp_data"
    }, 
    {
        name: "TheLeave",
        component: TheLeave,
        path: "/leave"
    },        
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;