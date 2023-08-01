<template>
  <div class="div-flex">
    <PreLoader v-if="loading" class="load"/>
    <div v-else class="body flex">
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
  </div>
</template>
<script>
import PreLoader from '@/components/PreLoader.vue';
import CafeRulette from '@/components/CafeRulette.vue';
import routes from '../routes';

export default {
  data: () => ({
    caunter: 0,
    cafes: [],
    loading: false,
  }),
  async mounted() {
    this.loading = true;
    try {
      this.cafes = (await this.fetchData()).data;
    } catch (e) {
      this.$toast.error('ошибка соединения');
    } finally {
      this.loading = false;
    }
  },
  methods: {
    fetchData() {
      return this.axios.get(routes.dataPath());
    },
    start() {
      this.caunter += 1;
      const move = -150 * Math.floor(Math.random() * 12);
      this.$refs.ul.style.left = `${move}px`;
    },
  },
  computed: {
    filteredCafes() {
      return this.cafes.data?.filter((cafe) => cafe.address && cafe.photo);
    },
  },
  components: { CafeRulette, PreLoader },
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
    left: 250px;
    transition: 2s ease;
  }
  li{
    display: flex;
    justify-content: center;
    align-items: center;
    width:150px;
    height: 270px;
  }
  img{
    position: relative;
    width: 50px;
    height: 50px;
    left: 50%;
    background:#ffefd5;
    transform: translate(-50%, 20px);
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
    margin-top: 20px;
  }
  .load{
    display: flex;
    align-items: center;
  }
  .div-flex{
    display: flex;
  }
  @media (max-width:767px) {
    .scopeHidden{
      max-width: 700px;
    }
  }
  @media (max-width:730px) {
    .scopeHidden{
      max-width: 600px;
    }
  }
  @media (max-width:630px) {
    .scopeHidden{
      max-width: 500px;
    }
    ul{
      left: 200px;
    }
  }
  @media (max-width:530px) {
    .scopeHidden{
      max-width: 430px;
    }
    ul{
      left: 180px;
    }
  }
  @media (max-width:430px) {
    .scopeHidden{
      max-width: 330px;
    }
    ul{
      left: 120px;
    }
    li{
      width:140px;
    }
  }
  @media (max-width:350px) {
    .scopeHidden{
      max-width: 300px;
    }
    ul{
      left: 100px;
    }
    li{
      width:140px;
    }
  }
</style>
