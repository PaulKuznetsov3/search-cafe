<template>
  <div class="flex">
    <PreLoader v-if="loading" class="load"/>
    <v-container v-else class="grid">
      <CafeCard class="back-color"
        v-for="cafe in filteredCafes"
        :key="cafe.id"
        :cafe="cafe"
        :id="cafe.id"
      />
    </v-container>
   </div>
</template>

<script>
import PreLoader from '@/components/PreLoader.vue';
import CafeCard from '../components/CafeCard.vue';
import routes from '../routes';

export default {
  components: {
    CafeCard,
    PreLoader,
  },
  data: () => ({
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
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, auto));
    gap: 10px;
    height: fit-content;
  }
  .back-color:hover {
    background-color: #659DBD;
  }
  .load{
    display: flex;
    align-items: center;
  }
  .flex{
    display: flex;
  }
</style>
