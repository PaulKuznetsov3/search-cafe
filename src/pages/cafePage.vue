<template>
  <v-container class="d-flex height-100vh justify-center " fill-height>
    <v-card class="background">
        <v-card-title class="justify-center text-h4 text-color">
          {{ cafe.data?.name }}
        </v-card-title>
        <v-img :src="cafe.data?.photo" alt='' class="photo" />
        <v-card-item>
        <v-card-title class="td justify-center">Адрес:</v-card-title>
        <v-card-subtitle class="td font-size ">
          {{ cafe.data?.address }} ({{ `${cafe.data?.landmark}` }})
        </v-card-subtitle>
      </v-card-item>
      <v-card-item>
        <v-card-text class="td justify-center font-size text-center">
          Расстояние: {{ ` ${cafe.data?.distance} м,`  }}
           время пути: {{ `  ${cafe.data?.time} минут` }}
        </v-card-text>
      </v-card-item>
        <p class="td text-center" v-if="cafe.data?.business_lunch === true "> <span>бизнес-ланч:
        </span> есть</p>
        <p class="td text-center" v-else> <span>Бизнес-ланч:
        </span> нет</p>
        <p class="td text-center"><span>Кухня: </span>{{` ${cafe.data?.cuisine.toLowerCase()}`}}</p>
        <p class="td text-center"><span>Средняя цена: </span>{{` ${cafe.data?.price} рублей`}}</p>
    </v-card>
  </v-container>
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
    } catch (e) {
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
  .text-color{
    text-align: center;
    color:aliceblue;
  }
  p{
    margin-bottom: 5px;
  }
  .background{
    background: #659DBD;
  }
  .photo{
    max-width: 450px;
    max-height: 450px;
    display: block;
    margin: auto;
  }
  .font-size{
    font-size: 16px;
  }
</style>
