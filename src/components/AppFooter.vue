<template>
    <v-footer color="#c27800" class="bg-indigo-lighten-1 text-center d-flex flex-column mt">
      <div>
      </div>
      <div class="pt-0">
      </div>
      <v-divider></v-divider>
      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
  </template>
<script>
export default {
  data: () => ({
  }),
};
</script>
<style scoped>
  .mt{
    margin-top: 20px;
  }
</style>
