import Vue from 'vue';
import VueRouter from 'vue-router';
import {constantRouter} from './router';

Vue.use(VueRouter);

// 路由配置
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({y: 0}),
    routes: constantRouter
});

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title || 'Vue Admin';
    next();
});

export default router;
