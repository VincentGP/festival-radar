<template>
  <div>
    <div class="festivals-top">
      <p>{{topTitle}}</p>
      <input v-model="search" class="inp inp__search" type="text" placeholder="Search for festival">
    </div>
    <ul>
      <li v-for="festival in filteredFestivals" :key="festival._id">
        <fr-festival-card :festival="festival"></fr-festival-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FestivalCard from '../../components/molecules/FestivalCard.vue';

export default {
  components: {
    'fr-festival-card': FestivalCard
  },
  props: [
    'festivals',
    'topTitle'
  ],
  data() {
    return {
      search: ''
    };
  },
  computed: {
    filteredFestivals() {
      return this.festivals.filter(festival => {
        return festival.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  }
};
</script>

<style lang="scss" scoped>
  .festivals-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
</style>
