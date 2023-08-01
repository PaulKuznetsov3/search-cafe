<template>
    <v-app-bar
      class="nav"
      color="#c27800"
      dense
      dark>
      <v-btn v-if="$route.path !== '/'" outlined class="mr-5 home">
        <router-link class="td" to="/" >На главную</router-link>
    </v-btn>
    <v-spacer/>
    <v-btn v-if="currentPage === 'start'" outlined class="mr-5">
        <router-link class="td" to="/" >Назад</router-link>
    </v-btn>
    <v-btn v-if="currentPage === 'cafes'" outlined class="mr-5">
        <router-link class="td" to="/cafes" >Войти</router-link>
    </v-btn>
    <v-btn v-if="currentPage === 'cafe'" outlined class="mr-5" @click="$router.go(-1);">
      Назад
    </v-btn>
    </v-app-bar>
</template>
<script>
export default {
  name: 'AppNavbar',
  currentPage: 'start',
  computed: {
    currentPage() {
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
  .nav{
    max-height: 80px;
    display: block;
  }
  .home{
    float: left;
    margin-left: 15px;
  }
</style>
