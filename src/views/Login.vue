<template>
  <div class="container">
    <div class="container__is-half">
      <fr-login-form></fr-login-form>
    </div>
    <div class="container__is-half container--is-large-text">
      <h1>SOME TEXT ABOUT HOW AWESOME WE ARE</h1>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/organisms/LoginForm.vue';
export default {
  components: {
    'fr-login-form': LoginForm
  }
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
  }
</style>
