<template>
  <v-container fluid>
    <v-app-bar
      color="#251BFA"
      dense
      dark>
      <v-spacer/>
    <v-btn outlined class="mr-10">
        <router-link class="td" to="/start" > Назад</router-link>
    </v-btn>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  name: 'AppNavbar',
  currentPage: 'start',
  methods: {
    goStart() {
      this.currentPage = 'start';
      console.log(this.currentPage);
    },
    goCafe() {
      this.currentPage = 'cafe';
      console.log(this.currentPage);
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
