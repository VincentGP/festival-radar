<template>
  <nav>
    <router-link to="/">Hjem</router-link> |
    <router-link to="/festivaler">Festivaler</router-link> |
    <router-link to="/kunstnere">Kunstnere</router-link> |
    <router-link to="/artikler">Artikler</router-link> |
    <router-link to="/om">Om</router-link> |
    <template v-if="!isAuthenticated">
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Opret konto</router-link>
    </template>
    <button v-if="isAuthenticated" @click="logout()">Log ud</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
</style>
