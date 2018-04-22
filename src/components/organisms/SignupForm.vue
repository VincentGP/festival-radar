<template>
  <form class="form">
    <div class="form__element">
      <label for="firstName" class="label label--uppercase">First name *</label>
      <input class="inp" name="firstName" type="text" placeholder="Please enter your first name" v-model="firstName">    
    </div>
    <div class="form__element">
      <label for="lastName" class="label label--uppercase">Last name *</label>
      <input class="inp" name="lastName" type="text" placeholder="Please enter your last name" v-model="lastName">    
    </div>
    <div class="form__element">
      <label for="email" class="label label--uppercase">Email *</label>
      <input class="inp" name="email" type="email" placeholder="Please enter your email" v-model="email">    
    </div>
    <div class="form__element">
      <label for="password" class="label label--uppercase">Password *</label>
      <input class="inp" name="password" type="password" placeholder="Please enter your password" v-model="password">    
    </div>
    <div class="form__element">
      <label class="label label--uppercase">Profile image</label>
      <input type="file" name="avatar" enctype="multipart/form-data" @change="onFileChanged">      
    </div>
    <hr>
    <p>To generate better results for you, please enter your location.</p>
    <div class="form__element">
      <label for="location" class="label label--uppercase">Location</label>
      <input class="inp" name="location" type="text" placeholder="Country, region or address" v-model="location">    
    </div>
      <fr-button class="btn--no-style" :icon="'arrow-right'" @click.native="signup()">
        Signup
      </fr-button>
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      imageFile: null,
      location: ''
    };
  },
  methods: {
    signup() {
      // What up validering
      if (this.email === '' && this.password === '' && this.firstName === '' && this.lastName === '') {
        return alert('Hov. Du skal skrive noget i felterne');
      }
      this.$store.dispatch('signup', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        avatar: this.imageFile,
        location: this.location
      });
    },
    // Når @change eksekveres får vi adgang til et event
    onFileChanged(event) {
      this.imageFile = event.target.files[0];
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  padding-top: 5px;
  padding-bottom: 15px;
  font-size: 13px;
}
.btn--no-style {
  display: flex;
  justify-content: flex-end;
}
</style>
