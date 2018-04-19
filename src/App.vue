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
    // Hent alle festivaler
    this.$store.dispatch('getAllFestivals');
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
@import 'assets/styles/main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F7F8F9;
  color: #2c3e50;
}
button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}
</style>
