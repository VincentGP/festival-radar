<template>
  <div id="app" v-if="!isLoading">
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/organisms/Navigation';
import Footer from './components/organisms/Footer';

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      isLoading: true
    };
  },
  created() {
    // Hent alle festivaler og artikler
    this.$store.dispatch('getAllFestivals');
    this.$store.dispatch('getAllArticles');
    // Prøv auto login når siden loader
    this.$store.dispatch('tryAutoLogin');
    // Det her er helt hen i vejret men vi bliver nødt til at vente på svar om brugeren er valid før vi kan vise navigation
    // Kan måske erstattes af en lækker load animation eller noget 🤙
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
};
</script>

<style lang="scss">
@import './assets/styles/main';
#app {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
