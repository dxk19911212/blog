import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import './component'

import '@fortawesome/fontawesome-free/css/solid.min.css'
import '@fortawesome/fontawesome-free/css/svg-with-js.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import animate from 'animate.css'
Vue.use(animate);

Vue.config.devtools = true;
Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

new Vue({
    el: '#app',
    router,
    store,
    ...App
});