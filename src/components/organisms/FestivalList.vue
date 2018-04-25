<template>
  <div>
    <div class="festivals-top">
      <p>There are <span class="bold">130</span> festivals where your favorite artists are playing</p>
      <input class="inp inp__search" type="text" placeholder="Søg på festival...">
    </div>
    <ul>
      <li v-for="festival in festivals" :key="festival._id">
        <fr-festival-card :festival="festival"></fr-festival-card>
      </li>
    </ul>
  </div>
</template>

<script>
import FestivalCard from '../../components/molecules/FestivalCard.vue';

export default {
  components: {
    'fr-festival-card': FestivalCard
  },
  props: ['festivals']
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
