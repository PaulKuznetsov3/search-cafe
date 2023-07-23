import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
