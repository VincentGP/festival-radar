<template>
  <div>
    <h2>Dit dashboard</h2>
    <p>Fornavn: {{ user.firstName }}</p>
    <p>Efternavn: {{ user.lastName }}</p>
    <p>Email: {{ user.email }}</p>
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
  }
}
</script>
