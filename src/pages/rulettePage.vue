<template>
  <div class="body">
    <div class="app">
      <img :src="require('@/static/pointer.jpg')" alt='' />
      <div class="scopeHidden" ref="scopeHidden">
        <ul ref="ul">
          <li v-for="(cafe, index) in filteredCafes" :key="cafe.id" :ref="`li${index}`">
             <CafeCard
               :cafe="cafe"
               :id="cafe.id"
             />
           </li>
         </ul>
      </div>
      <button class="btn" @click="start">Играть</button>

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
      this.$toast.error('ошибка соединения');
    }
  },
  methods: {
    fetchData() {
      return this.axios.get(routes.dataPath());
    },
    start() {
      const move = -150 * Math.floor(Math.random() * 9);
      this.$refs.ul.style.left = `${move}px`;
      console.log(this.$refs.scopeHidden);
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
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .scopeHidden{
    overflow: hidden;
    border-radius: 10px;
    width: 800px;
    margin: auto;
  }
  ul{
    position: relative;
    display: inline-flex;
    left: 0;
    transition: 4s ease;
  }
  li{
    display: flex;
    justify-content: center;
    align-items: center;
    width:150px;
    height: 400px;
  }
  img{
    position: relative;
    width: 50px;
    height: 50px;
    left: 50%;
    background: rgba(0,0,0,0);
    transform: translate(-50%, 25px);
  }
  .btn{
    position: relative;
    left: 50%;
    transform: translate(-50%, 20px);
    padding: 10px, 30px;
    cursor: pointer;
    transition: 0.2s ease;
  }
</style>
