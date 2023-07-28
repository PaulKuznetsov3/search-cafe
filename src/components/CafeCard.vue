<template>
    <v-card
      v-if="cafe.distance" class="mx-auto" max-width="90%" variant="outlined">
        <div>
          <v-card-titele class="center">{{ cafe.name }}</v-card-titele>
          <br>
          <v-img height="200px" :src=cafe.photo alt='' />
          <br>
          <p>{{ cafe.address }}</p>
          <p>{{ `${cafe.distance}м` }}</p>
          <p>{{ `кухня: ${cafe.cuisine}` }}</p>
        </div>
      <v-card-actions>
        <v-btn variant="outlined">
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
  .image{
    display: block;
    margin: auto;
    width: 50%;
    height: 50%;
  }
  .center{
    text-align: center;
  }
</style>
