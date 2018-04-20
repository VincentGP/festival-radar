<template>
  <div>
    <h1>Festivals</h1>
    <ul>
      <li v-for="festival in festivals" :key="festival._id">
        <router-link :to="/festival/ + festival.slug">{{ festival.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      festivals: this.$store.state.festivals
    };
  }
};
</script>
