<template>
  <div>
  <v-container fluid>
    <v-app-bar
      color="#c27800"
      dense
      dark>
      <v-spacer/>
    <v-btn outlined class="mr-10">
        <router-link class="td" to="/cafes" > Войти</router-link>
    </v-btn>
    </v-app-bar>
  </v-container>
  <v-sheet
    class="pa-6 text-white mx-auto"
    color="#659DBD"
    max-width="80%"
    height="90%"
    margin-top="100px"
    text-align="justify"
  >

    <h4 class="text-h4 font-weight-bold mb-4 text-center text-color">Привет!</h4>

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
      <img class="image" :src="require('@/assets/avatar1.jpeg')" alt='' />
      <br>
        В приложении Вы увидите все варианты где поесть и можете «попросить»
        сервис выбрать случайное кафе.
    </p>

    <v-btn
      class="text-none text-black mb-4 center"
      color="red-accent-2"
      size="x-large"
      variant="flat"
    >
    <router-link class="td-inp" to="/cafes" >Выбрать кафе</router-link>
    </v-btn>
  </v-sheet>
</div>
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
  .image{
    display: block;
    margin: auto;
    width: 50%;
    height: 50%;
  }
  .text-color{
    text-align: center;
    color:aliceblue;
  }
  .center{
    display: block;
    margin: auto;
  }
  .td-inp{
    text-decoration: none;
    color: "#659DBD";
  }
</style>
