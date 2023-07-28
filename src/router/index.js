import Vue from 'vue';
import VueRouter from 'vue-router';
import startPage from '@/pages/startPage.vue';
import cafesPage from '@/pages/cafesPage.vue';
import errorPage from '@/pages/errorPage.vue';
import cafePage from '@/pages/cafePage.vue';
import rulettePage from '@/pages/rulettePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: startPage,
  },
  {
    path: '/cafes',
    component: cafesPage,
  },
  {
    path: '*',
    component: errorPage,
  },
  {
    path: '/rulette',
    component: rulettePage,
  },
  {
    path: '/cafe/:id',
    component: cafePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
