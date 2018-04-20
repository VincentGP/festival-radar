<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="login()">
      <label>Email</label>
      <input type="email" placeholder="Email" v-model="email">
      <label>Password</label>
      <input type="password" placeholder="Password" v-model="password">
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then((res) => {
          console.log('Så er du sgu logget ind');
        })
        .catch((err) => {
          console.log(err + 'Det gik ikke så godt med at logge ind');
        });
    }
  }
};
</script>
