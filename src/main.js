import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

import 'floating-vue/dist/style.css'
import FloatingVue from 'floating-vue'

import App from './App.vue'

import std from './std.js';
std();

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('./components/Home.vue') },
        { path: '/team', name: 'team', component: () => import('./components/Team.vue') },
        { path: '/apply', name: 'apply', component: () => import('./components/Apply.vue') },
        { path: '/gallery', name: 'gallery', component: () => import('./components/Gallery.vue') },
        { path: '/contact', name: 'contact', component: () => import('./components/Contact.vue') },
        { path: '/education', name: 'education', component: () => import('./components/Education.vue') },
        { path: '/:catchAll(.*)', name: 'lost', component: () => import('./components/Lost.vue') },
    ]
});

window.api = window.location.origin

const app = createApp(App);
app.config.devtools = true
app.use(router);
app.use(FloatingVue);
app.mount('#app');
