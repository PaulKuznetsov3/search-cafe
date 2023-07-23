<template>
   <v-container fluid>
    <v-app-bar
      color="#c27800"
      dense
      dark>
      <v-spacer/>
    <v-btn outlined class="mr-10">
        <router-link class="td" to="/" > Назад</router-link>
    </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>

export default {
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.axios.get('https://bandaumnikov.ru/api/test/site/get-index')
        .then((response) => console.log(response.data));
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
