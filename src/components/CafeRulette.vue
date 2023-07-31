<template>
    <v-card
      class="mx-auto" variant="outlined">
          <v-img :height="200" :src=cafe.photo alt='' />
      <v-card-actions class="justify-center">
        <v-btn variant="outlined" class="background">
          <router-link class="td" :to="'/cafe/' + id" >Подробнее</router-link>
         </v-btn>
      </v-card-actions>
    </v-card>
</template>
<script>
export default {
  name: 'CafeRulette',
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
  .background{
    background: #659DBD;
    color: white;
  }
</style>
