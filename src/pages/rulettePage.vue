<template>
  <div class="body flex">
    <p class="text">Случайный выбор Вам поможет сделать игра в рулетку!</p>
    <p class="text">Сыграем?</p>
    <div class="app">
      <img :src="require('@/static/pointer.png')" alt='' />
      <div class="scopeHidden" ref="scopeHidden">
        <ul ref="ul">
          <li v-for="(cafe, index) in filteredCafes" :key="cafe.id" :ref="`li${index}`">
             <CafeRulette
               :cafe="cafe"
               :id="cafe.id"
             />
           </li>
         </ul>
      </div>
      <v-btn v-if="caunter<=0" variant="outlined" class="btn" @click="start" color="#659DBD">
        Играть!
      </v-btn>
      <v-btn v-else variant="outlined" class="btn" @click="start" color="#659DBD">
        Играть еще!
      </v-btn>
    </div>
  </div>
</template>
<script>
import CafeRulette from '@/components/CafeRulette.vue';
import routes from '../routes';

export default {
  data: () => ({
    caunter: 0,
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
      this.caunter += 1;
      const move = -150 * Math.floor(Math.random() * 9);
      this.$refs.ul.style.left = `${move}px`;
    },
  },
  computed: {
    filteredCafes() {
      return this.cafes.data?.filter((cafe) => cafe.distance);
    },
  },
  components: { CafeRulette },
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
    max-width: 800px;
    margin: auto;
  }
  ul{
    position: relative;
    display: inline-flex;
    left: 0;
    transition: 2s ease;
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
    background:#ffefd5;
    transform: translate(-50%, 50px);
  }
  .btn{
    position: relative;
    left: 50%;
    transform: translate(-50%, 20px);
    padding: 10px, 30px;
    cursor: pointer;
    transition: 0.2s ease;
    color: white;
    margin-bottom: 20px;
  }
  .text{
    color: #659DBD;
    text-align: center;
    font-size: 20px;
  }
</style>
