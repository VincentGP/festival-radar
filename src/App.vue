<template>
  <div id="app" v-if="!isLoading">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  components: {
    Navigation
  },
  data() {
    return {
      isLoading: true
    }
  },
  created() {
    // Prøv auto login når siden loader
    this.$store.dispatch('tryAutoLogin');
    // Det her er helt hen i vejret men vi bliver nødt til at vente på svar om brugeren er valid før vi kan vise navigation
    // Kan måske erstattes af en lækker load animation eller noget 🤙
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
