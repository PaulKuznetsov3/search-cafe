<template>
  <v-app class="bg">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
  }),
};
</script>
<style scoped>
  .bg{
    background-color: #ffefd5;
  }
</style>
