import Vue from 'vue'
import App from './App'
import router from './router'
import './component'

import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(MavonEditor);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    ...App
});