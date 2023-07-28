<template>
  <v-app class="bg">
    <AppNavbar />
    <router-view/>
    <AppFooter />
    <ToastComp />
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import ToastComp from './components/ToastComp.vue';

export default {
  name: 'App',
  data: () => ({}),
  components: {
    AppNavbar, AppFooter, ToastComp,
  },
};
</script>
<style scoped>
  .bg{
    background-color: #ffefd5;
  }
</style>
