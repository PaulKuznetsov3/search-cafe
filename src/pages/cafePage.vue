<template>
  <div>
    <v-sheet
      class="pa-6 text-white mx-auto"
      color="#659DBD"
      max-width="80%"
      height="100%"
      margin-top="100px"
      text-align="justify"
    >
      <v-container>
        <h2 class="text-h4 font-weight-bold mb-4 text-center text-color">{{ cafe.data?.name }}</h2>
        <v-img :src="cafe.data?.photo" alt='' />
        <h4 class="td text-center">Адрес:</h4>
        <p class="td text-center">{{ cafe.data?.address }} ({{ `${cafe.data?.landmark}` }})</p>
        <p class="td text-center"> <span>Расстояние: </span>{{ ` ${cafe.data?.distance} м` }}</p>
        <p class="td text-center"> <span>Время пути: </span>{{ ` ${cafe.data?.time} минут` }}</p>
        <p class="td text-center" v-if="cafe.data?.business_lunch === true "> <span>бизнес-ланч:
        </span> есть</p>
        <p class="td text-center" v-else> <span>Бизнес-ланч:
        </span> нет</p>
        <p class="td text-center"><span>Кухня: </span>{{` ${cafe.data?.cuisine.toLowerCase()}`}}</p>
        <p class="td text-center"><span>Средняя цена: </span>{{` ${cafe.data?.price} рублей`}}</p>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import routes from '../routes';

export default {
  name: 'Roulette',
  data() {
    return {
      cafe: [],
      id: this.$route.params.id,
    };
  },
  async mounted() {
    try {
      this.cafe = (await this.fetchCafeData()).data;
      console.log(this.cafe.data);
    } catch (e) {
      console.log(e);
      this.$toast.error('ошибка соединения');
    }
  },
  methods: {
    fetchCafeData() {
      return this.axios.get(`${routes.dataCafe()}id=${this.id}`);
    },
    openModal(cafe) {
      this.currentCafe = cafe;
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped>
  .td{
    text-decoration: none;
    color: white;
  }
  .card{
    width: 100%;
  }
  .image{
    width: 40%;
    height: 40%;
    display: block;
    margin: auto;
    margin-bottom: 20px ;;
  }
  .text-color{
    text-align: center;
    color:aliceblue;
  }
  .center{
    display: block;
    margin: auto;
  }
  .in-bl{
    display: inline-block;
  }
  p{
    margin-bottom: 5px;
  }
</style>
