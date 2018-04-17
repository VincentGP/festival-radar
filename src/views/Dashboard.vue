<template>
  <div>
    <h2>Dit dashboard</h2>
    <p>Fornavn: {{ user.firstName }}</p>
    <p>Efternavn: {{ user.lastName }}</p>
    <p>Email: {{ user.email }}</p>
    <p><strong>Gemte festivaler</strong></p>
    <p v-for="festival in followedFestivals" :key="festival.name">{{ festival.name }}</p>
  </div>
</template>

<script>
import router from '../router';

export default {
  data() {
    return {
      user: this.$store.state.user
    }
  },
  created() {
    // Hvis bruger ikke er valid skal de smides til login siden
    let auth = this.$store.getters.isAuthenticated;
    if (!auth) {
      router.push({ path: '/login' });
    }
  },
  computed: {
    followedFestivals() {
      // Gem alle festivaler i variabel
      let festivals = this.$store.state.festivals;
      // Returner festivaler hvor id matcher
      return festivals.filter((festival) => {
        return this.user.followedFestivals.indexOf(festival._id) !== -1;
      });
    }
  }
}
</script>
