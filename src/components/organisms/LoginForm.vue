<template>
  <form class="form" @submit.prevent>
    <div class="form__element">
      <label for="email" class="label label--uppercase">Email</label>
      <input class="inp" name="email" type="email" placeholder="Please enter your email" v-model="email" required>    
    </div>
    <div class="form__element">
      <label for="password" class="label label--uppercase">Password</label>
      <input class="inp" name="password" type="password" placeholder="Please enter your password" v-model="password" required>    
    </div>
    <div class="form__element form__element--columns">
      <a>Forgot password?</a>
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
        return alert('Hov. Du skal skrive noget i felterne');
      }
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then((res) => {
          console.log('Så er du sgu logget ind');
        })
        .catch((err) => {
          console.log(err + 'Det gik ikke så godt med at logge ind');
        });
    }
  }
}
</script>