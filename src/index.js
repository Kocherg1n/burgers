// JS
import './js/index'

// SCSS
import './assets/scss/main.scss'

window.Vue = require('vue');

// Vue components (for use in html)
Vue.component('slider-burger', require('./components/slider-burger.vue').default);

// Vue carousel
Vue.use(VueCarousel);
import VueCarousel from 'vue-carousel';

// Vue init
const app = new Vue({
    el: '#app'
});

