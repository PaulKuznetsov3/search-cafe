<template>
  <v-container fluid>
    <v-app-bar
      color="#c27800"
      dense
      dark>
      <v-spacer/>
    <v-btn v-if="currentPage === 'start'" outlined class="mr-10">
        <router-link class="td" to="/" >Назад</router-link>
    </v-btn>
    <v-btn v-if="currentPage === 'cafes'" outlined class="mr-10">
        <router-link class="td" to="/cafes" >Войти</router-link>
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
      return this.$route.path.includes('/cafes') ? 'start' : 'cafes';
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
