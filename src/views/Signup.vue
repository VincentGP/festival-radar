<template>
  <section class="section">
    <fr-header-section 
      :title="'Signup'"
      :bottom-text="'Please fill out the information below, if you already have an account please login'"
      :action-type="'button'"
      :action-text="'Login'" 
      :action-link="'/login'">
    </fr-header-section>
    <div class="container">
      <div class="container__main">
        <div class="container__is-half">
          <fr-signup-form></fr-signup-form>
        </div>
        <div class="container__is-half container--is-large-text">
          <h1>SOME TEXT ABOUT HOW AWESOME WE ARE</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderSection from '../components/organisms/HeaderSection';
import SignupForm from '../components/organisms/SignupForm';
export default {
  components: {
    'fr-header-section': HeaderSection,
    'fr-signup-form': SignupForm
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      imageFile: null
    };
  },
  methods: {
    signup() {
      this.$store.dispatch('signup', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        avatar: this.imageFile
      });
    },
    // Når @change eksekveres får vi adgang til et event
    onFileChanged(event) {
      this.imageFile = event.target.files[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.container__main {
  align-items: center;
}
</style>
