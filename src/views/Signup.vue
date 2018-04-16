<template>
  <div>
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
      <input type="text" placeholder="Profil billede" v-model="image">
      <button>Opret bruger</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      image: ''
    }
  },
  methods: {
    signup() {      
      this.$store.dispatch('signup', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        image: this.image
      });
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>
