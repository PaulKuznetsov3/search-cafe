<template>
  <v-container class="height-100vh flex" fill-height>
    <v-card class="background">
      <h4 class="text-h4 font-weight-bold mb-4 text-center text-color">Привет!</h4>
      <img :src="require('@/static/avatar1.jpeg')" alt='' />
      <p class="mb-8 text-color">
        Перед обедом нам сложно определиться, куда сходить поесть.
        Каждый раз одно и то же — начинаем вспоминать все места вокруг.
        Как далеко туда идти, какая там кухня и сколько в среднем стоит
        бизнес ланч, да и есть ли он вообще.
        Этот сервис, который может случайно выбрать новый вариант кафешки.
        Уверен, что Вы будете не всегда согласны с выбором сервиса и захотите
        еще раз испытать удачу.
        <br>
        <br>
        <br>
        В приложении Вы увидите все варианты где поесть и можете «попросить»
        сервис выбрать случайное кафе.
      </p>
      <v-row justify="center">
        <v-btn
        coll="4"
        class=" mb-4 btn"
        color="red-accent-2"
        size="x-large"
        variant="flat"
      >
        <router-link class="td-inp" to="/cafes" >Выбрать кафе</router-link>
      </v-btn>
      <v-btn
        coll="4"
        class="mb-4 btn"
        color="red-accent-2"
        size="x-large"
        variant="flat"
      >
        <router-link class="td-inp" to="/rulette" >Случайный выбор</router-link>
      </v-btn>
    </v-row>
    </v-card>
  </v-container>
</template>

<script>

export default {
};
</script>
<style scoped>
  .td{
    text-decoration: none;
    color: white;
  }
  img{
    display: block;
    margin: auto;
    width: 50%;
    height: 50%;
  }
  .btn{
    width: 300px;
    margin: 10px;
  }
  .text-color{
    font-family: 'Roboto';
    text-align: center;
    color:aliceblue;
  }

  .td-inp{
    text-decoration: none;
    color: "#659DBD";
  }
  .background{
    background: #659DBD;
  }
  .flex{
    justify-content: center;
  }
</style>
