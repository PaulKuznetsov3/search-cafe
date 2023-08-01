<template>
  <div>
    <v-sheet
      class="pa-6 text-white mx-auto"
      color="#659DBD"
      max-width="80%"
      height="90%"
      margin-top="100px"
      text-align="justify"
    >
      <h4 class="text-h4 font-weight-bold mb-4 text-center text-color">Упс!</h4>
        <br>
        <br>
        <img class="image" :src="require('@/static/error.png')" alt='' />
        <br>
    </v-sheet>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
   .text-color{
    text-align: center;
    color:aliceblue;
  }
  .image{
    display: block;
    margin: auto;
    width: 50%;
    height: 50%;
  }
</style>
