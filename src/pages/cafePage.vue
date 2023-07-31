<template>
  <v-container class="d-flex height-100vh justify-center " fill-height>
    <v-card class="background">
        <v-card-title class="justify-center text-color td-name ">
          {{ cafe.data?.name }}
        </v-card-title>
        <v-img :src="cafe.data?.photo" alt='' class="photo" />
        <v-card-title class="td-title text-color justify-center">
          Адрес:
        </v-card-title>
        <v-card-subtitle class="td-title text-color justify-center" style="color: white;">
          {{ cafe.data?.address }}
        </v-card-subtitle>
        <v-card-text v-if="cafe.data?.landmark" class="td text-center" style="color: white;">
         ({{ `${cafe.data?.landmark}` }})
        </v-card-text>
        <v-card-text v-if="cafe.data?.distance > 0 && cafe.data?.time > 0"
        class=" justify-center font-size text-center" style="color: white;">
          Расстояние: {{ ` ${cafe.data?.distance} м,`  }}
           время пути: {{ `  ${cafe.data?.time} минут` }}
        </v-card-text>
        <p class="td text-center" v-if="cafe.data?.business_lunch === true ">бизнес-ланч:
         есть</p>
        <p class="td text-center" v-else>Бизнес-ланч:
         нет</p>
        <p class="td text-center"><span>Кухня: </span>{{` ${cafe.data?.cuisine.toLowerCase()}`}}</p>
        <p v-if="cafe.data?.price !== 0" class="td text-center">
          Средняя цена: {{` ${cafe.data?.price} рублей`}}
        </p>
        <p v-else class="td text-center">Средняя цена: не указана</p>
        <v-btn>
          <ShareNetwork
          v-for="network in networks"
          :network="network.network"
          :key="network.network"
          :url="sharing.url"
          :title="sharing.title"
          :description="sharing.description"
          :quote="sharing.quote"
          :hashtags="sharing.hashtags"
          >
            <i :class="network.icon"></i>
          <span>{{ network.name }}</span>
          </ShareNetwork>
        </v-btn>
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
      sharing: {
        url: 'https://news.vuejs.org/issues/180',
        title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
        description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        quote: 'The hot reload is so fast it\'s near instant. - Evan You',
        hashtags: 'vuejs,vite,javascript',
      },
      networks: [
        {
          network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane',
        },
        {
          network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp',
        },
      ],
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
  @media (max-width:991px) {
    .td-title{
      font-size: 15px;
    }
    .font-size{
      font-size: 13px;
    }
    .td-name {
      font-size: 20px;
    }
  }
  @media (max-width:1200px) {
    .td-title{
      font-size: 15px;
    }
    .font-size{
      font-size: 13px;
    }
    .td-name {
      font-size: 29px;
      overflow-wrap:break-word;
    }
  }
</style>
