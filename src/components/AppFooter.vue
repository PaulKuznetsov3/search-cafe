<template>
  <v-footer color="#c27800" class="bg-indigo-lighten-1 text-center d-flex flex-column mt">
    <div class="text">
      <strong>Наши соцсети</strong>
    </div>
    <div class="pt-0 flex">
      <a class="margin" href="#">{{ null }}
        <v-img :src="require('@/static/inst.png')"
          alt='' :width="30" :height="30"/>
      </a>
      <a class="margin" href="#">{{ null }}
        <v-img :src="require('@/static/fb.png')"
          alt='' :width="30" :height="30"/>
      </a>
      <a class="margin" href="#">{{ null }}
        <v-img :src="require('@/static/linkedin.png')"
          alt='' :width="30" :height="30"/>
      </a>
      <a class="margin" href="#">{{ null }}
        <v-img :src="require('@/static/tw.png')"
          alt='' :width="30" :height="30"/>
      </a>
    </div>
    <v-divider></v-divider>
    <div>{{ new Date().getFullYear() }} — <strong>Search Cafe</strong></div>
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
  .flex{
    display: flex;
    justify-content:space-between ;
  }
  .margin{
    margin: 10px;
  }
  .text{
    color: wheat;
  }
</style>
