import Vue from 'vue';
import App from './App.vue';

import './custom-elements/custom-elements';

new Vue({
    el: '#app',
    render: h => h(App)
});
