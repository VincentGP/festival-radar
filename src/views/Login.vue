<template>
  <section class="section">
    <fr-header-section 
      :title="'Login'"
      :bottom-text="'Please fill out your login information below, if you dont already have an account please signup'"
      :action-type="'button'"
      :action-text="'Signup'" 
      :action-link="'/signup'">
    </fr-header-section>
    <div class="container">
      <div class="container__main">
        <div class="container__is-half">
          <fr-login-form></fr-login-form>
        </div>
        <div class="container__is-half container--is-large-text">
          <h1>SOME TEXT ABOUT HOW AWESOME WE ARE</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderSection from '../components/organisms/HeaderSection.vue';
import LoginForm from '../components/organisms/LoginForm.vue';
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
  }
</style>
