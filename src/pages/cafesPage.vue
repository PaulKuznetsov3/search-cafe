<template>
  <v-container class="grid">
      <CafeCard class="back-color"
        v-for="cafe in filteredCafes"
        :key="cafe.id"
        :cafe="cafe"
        :id="cafe.id"
      />
  </v-container>
</template>

<script>
import CafeCard from '../components/CafeCard.vue';
import routes from '../routes';

export default {
  components: {
    CafeCard,
  },
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
  },
  computed: {
    filteredCafes() {
      return this.cafes.data?.filter((cafe) => cafe.address && cafe.photo);
    },
  },
};
</script>
<style scoped>
  .grid{
    display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, auto));
    gap: 10px;
    height: fit-content;
  }
  .back-color:hover {
    background-color: #659DBD;
  }
</style>
