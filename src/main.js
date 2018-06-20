import Vue from 'vue'
import App from './App'
import router from './router'
import './component'

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    ...App
});