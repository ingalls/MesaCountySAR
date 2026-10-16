import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

import 'floating-vue/dist/style.css'
import FloatingVue from 'floating-vue'
import 'animate.css'

import App from './App.vue'

import std from './std.js';
std();

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('./components/Home.vue') },
        { path: '/team', name: 'team', meta: { title: 'Our Team' }, component: () => import('./components/Team.vue') },
        { path: '/apply', name: 'apply', meta: { title: 'Join Our Team' }, component: () => import('./components/Apply.vue') },
        { path: '/gallery', name: 'gallery', meta: { title: 'Gallery' }, component: () => import('./components/Gallery.vue') },
        { path: '/contact', name: 'contact', meta: { title: 'Contact' }, component: () => import('./components/Contact.vue') },
        { path: '/news', name: 'news', meta: { title: 'News' }, component: () => import('./components/News.vue') },
        { path: '/:catchAll(.*)', name: 'lost', meta: { title: 'Page Not Found' }, component: () => import('./components/Lost.vue') },

        { path: '/pmcourse', name: 'pmcourse', meta: { title: 'PM Course' }, component: () => import('./components/PMCourse.vue') },
        { path: '/tickets', beforeEnter() { window.location.href = 'https://events.ticketleap.com/tickets/mesacountysarcom/grand-junction-paddling-film-festival'; } },
    ]
});

const DEFAULT_TITLE = document.title;

router.afterEach((to) => {
    document.title = to.meta.title ? `${to.meta.title} | Mesa County SAR` : DEFAULT_TITLE;
});

window.api = window.location.origin

const app = createApp(App);
app.config.devtools = true
app.use(router);
app.use(FloatingVue);
app.mount('#app');
