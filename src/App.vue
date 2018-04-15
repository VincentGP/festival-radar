<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Login/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Login from './components/Login';

export default {
  components: {
    Navigation,
    Login
  },
  created() {
    // Prøv auto login når siden loader
    this.$store.dispatch('tryAutoLogin');
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
