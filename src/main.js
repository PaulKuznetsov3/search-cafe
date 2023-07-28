import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import CafeCard from './components/CafeCard.vue';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Toast, {
  duration: 1500,
});
Vue.component('CafeCard', CafeCard);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
