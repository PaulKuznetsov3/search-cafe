<template>
  <div class="body">
    <div class="app">
      <img :src="require('@/static/pointer.jpg')" alt='' />
      <div class="scopeHidden">
        <ul>
           <li v-for="cafe in filteredCafes" :key="cafe.id">
             <CafeCard
               :cafe="cafe"
               :id="cafe.id"
             />
           </li>
         </ul>
      </div>
    </div>
  </div>
</template>
<script>
import routes from '../routes';

export default {
  data: () => ({
    cafes: [],
  }),
  async mounted() {
    try {
      this.cafes = (await this.fetchData()).data;
    } catch (e) {
      console.log(e);
      this.$toast.error('ошибка соединения');
    }
  },
  methods: {
    fetchData() {
      return this.axios.get(routes.dataPath());
    },
  },
  computed: {
    filteredCafes() {
      return this.cafes.data?.filter((cafe) => cafe.distance);
    },
  },
};
</script>
<style scoped>
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .scopeHidden{
    overflow: hidden;
    width: 800px;
    height: 150px;
    border-radius: 10px;
  }
  ul{
    display: flex;
  }
  li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
  }
  img{
    width: 50px;
    height: 50px;
    left: 50%;
    background: rgba(0,0,0,0);
  }
</style>
