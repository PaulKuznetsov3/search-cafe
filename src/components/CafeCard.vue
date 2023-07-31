<template>
    <v-card
       class="mx-auto" max-width="90%" variant="outlined">
        <div >
          <v-card-title class="justify-center font-size">{{ cafe.name }}</v-card-title>
          <v-img height="200px" :src=cafe.photo alt='' />
        </div>
      <v-card-actions class="justify-center">
          <v-btn variant="outlined" class="btn">
          <router-link class="td" :to="'/cafe/' + id" >Подробнее</router-link>
         </v-btn>
      </v-card-actions>
    </v-card>
</template>
<script>
export default {
  name: 'CafeCard',
  props: {
    cafe: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$emit('openModal', this.cafe);
    },
  },
};
</script>

<style scoped>
  .td{
    text-decoration: none;
  }
  .btn{
    background: #659DBD;
    color: white;
    margin: 10px;
  }
  .font-size{
    font-size: 19px;
  }
</style>
