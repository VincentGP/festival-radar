<template>
  <section>
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

@import '../assets/styles/_import.scss';
.container__main {
  align-items: center;
}

@include media($bp-tablet) {
  .container__main {
    margin: 25px 0;
  }
}

@include media($bp-phablet-lg) {
  .container--is-large-text {
    h1 {
      font-size: 50px;
    }
  }
}

@include media($bp-phablet) {
  .container__main {
    flex-direction: column-reverse;
  }
  .container__is-half {
    width: 100%;
  }
}

</style>
