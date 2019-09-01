import Vue from 'vue';
import vueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";

Vue.use(vueRouter);

export default new vueRouter({
    routes: [
        { path: '/', component: ExampleComponent }
    ],
    mode: 'history'
});
