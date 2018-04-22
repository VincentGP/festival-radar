<template>
  <section class="section">
    <fr-header-section :title="'Signup'" :btn-text="'Login'" :btn-link="'/login'">
      Please fill out the information below, if you already have an account please login
    </fr-header-section>
    <h3>Opret konto</h3>
    <p>Efter bruger har oprettet konto tænker jeg man kan blive sendt videre til en side hvor det er nemt at søge i kunstnere</p>
    <form @submit.prevent="signup()">
      <label>Fornavn</label>
      <input type="text" placeholder="Fornavn" v-model="firstName">
      <label>Efternavn</label>
      <input type="text" placeholder="Efternavn" v-model="lastName">
      <label>Email</label>
      <input type="email" placeholder="Email" v-model="email">
      <label>Password</label>
      <input type="password" placeholder="Password" v-model="password">
      <label>Profil billede</label>
      <input type="file" name="avatar" enctype="multipart/form-data" @change="onFileChanged">
      <button>Opret bruger</button>
    </form>
  </section>
</template>

<script>
import HeaderSection from '../components/organisms/HeaderSection';
export default {
  components: {
    'fr-header-section': HeaderSection
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
form {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>
