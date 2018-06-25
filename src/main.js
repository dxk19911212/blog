import Vue from 'vue'
import App from './App'
import router from './router'
import './component'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    ...App
});