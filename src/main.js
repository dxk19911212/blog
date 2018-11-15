import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters'
import './component'

import 'highlight.js/styles/googlecode.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import animate from 'animate.css'
Vue.use(animate);

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);

Vue.config.devtools = true;
Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

new Vue({
    el: '#app',
    router,
    ...App
});