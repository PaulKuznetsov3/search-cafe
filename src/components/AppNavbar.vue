<template>
  <v-container fluid>
    <v-app-bar
      color="#c27800"
      dense
      dark>
      <v-spacer/>
    <v-btn v-if="currentPage === 'start'" outlined class="mr-5">
        <router-link class="td" to="/" >Назад</router-link>
    </v-btn>
    <v-btn v-if="currentPage === 'cafes'" outlined class="mr-5">
        <router-link class="td" to="/cafes" >Войти</router-link>
    </v-btn>
    <v-btn v-if="currentPage === 'cafe'" outlined class="mr-5">
        <router-link class="td" to="/cafes" >Назад</router-link>
    </v-btn>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  name: 'AppNavbar',
  currentPage: 'start',
  computed: {
    currentPage() {
      console.log(this.$route);
      if (this.$route.path === '/') {
        return 'cafes';
      }
      if (this.$route.path === '/cafes') {
        return 'start';
      }
      if (this.$route.path === '/rulette') {
        return 'start';
      }
      if (this.$route.path.includes('/cafe/')) {
        return 'cafe';
      }
      return 'start';
    },
  },
};
</script>
<style scoped>
  .td{
    text-decoration: none;
    color: white;
  }
</style>
