import Vue from 'vue';
import VueRouter from 'vue-router';
import startPage from '@/pages/startPage.vue';
import cafePages from '@/pages/cafesPage.vue';
import errorPage from '@/pages/errorPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: startPage,
  },
  {
    path: '/cafes',
    component: cafePages,
  },
  {
    path: '*',
    component: errorPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
