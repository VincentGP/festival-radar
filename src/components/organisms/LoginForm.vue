<template>
  <form class="form">
    <div class="form__element">
      <label for="email" class="label label--uppercase">Email</label>
      <input class="inp" name="email" type="email" placeholder="Please enter your email" v-model="email">    
    </div>
    <div class="form__element">
      <label for="password" class="label label--uppercase">Password</label>
      <input class="inp" name="password" type="password" placeholder="Please enter your password" v-model="password">    
    </div>
    <div class="form__element form__element--columns">
      <a class="link">Forgot password?</a>
      <fr-button class="btn--no-style" :icon="'arrow-right'" @click.native="login()">
        Login
      </fr-button>
    </div>
  </form>
</template>

<script>
import Button from '../atoms/Button.vue';
export default {
  components: {
    'fr-button': Button
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // What up validering
      if (this.email === '' && this.password === '') {
        return alert('The fields cannot be empty');
      }
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .catch((err) => {
          console.log(err);
          alert('Something went wrong. Please try again.');
        });
    }
  }
};
</script>
