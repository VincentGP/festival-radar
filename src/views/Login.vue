<template>
  <section class="section">
    <fr-header-section :title="'Login'" :btn-text="'Signup'" :btn-link="'/signup'">
      Please fill out your login information below, if you dont already have an account please signup
    </fr-header-section>
    <div class="container">
      <div class="container__is-half">
        <fr-login-form></fr-login-form>
      </div>
      <div class="container__is-half container--is-large-text">
        <h1>SOME TEXT ABOUT HOW AWESOME WE ARE</h1>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from '../components/organisms/LoginForm.vue';
import HeaderSection from '../components/organisms/HeaderSection.vue';
export default {
  components: {
    'fr-login-form': LoginForm,
    'fr-header-section': HeaderSection
  }
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    margin-top: 50px;
  }
</style>
