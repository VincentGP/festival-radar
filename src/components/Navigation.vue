<template>
  <nav>
    <div>
      <router-link to="/">Hjem</router-link>
      <router-link to="/festivaler">Festivaler</router-link>
      <router-link to="/kunstnere">Kunstnere</router-link>
      <router-link to="/artikler">Artikler</router-link>
      <router-link to="/om">Om</router-link>
    </div>
    <div>
      <template v-if="!isAuthenticated">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Opret konto</router-link>
      </template>
      <template v-else>
        <div class="user-info">
          <p>{{ randomGreeting }}!</p>
          <img @mouseover="showDropdown = true" @mouseleave="showDropdown = false" :src="profileImagePath">
        </div>
        <transition name="fade">
          <div @mouseover="showDropdown = true" @mouseleave="showDropdown = false" v-if="showDropdown" class="dropdown">
            <router-link to="/dashboard">Dashboard</router-link>
            <button @click="logout()">Log ud</button>
          </div>
        </transition>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      showDropdown: false,
      greetings: ['Hej', 'Hejsa', 'Go\'daw']
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      // Reset denne så dropdown ikke er nede når man kommer ind på siden
      this.showDropdown = false;
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    profileImagePath() {
      return `http://localhost:7777/uploads/${this.$store.state.user.imagePath}`;
    },
    randomGreeting() {
      let number = Math.floor(Math.random() * this.greetings.length);
      return `${this.greetings[number]} ${this.$store.state.user.firstName} ${this.$store.state.user.lastName}`;
    }
  }
};
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  a {
    padding: 8px;
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    z-index: 1;
  }
  .user-info {
    display: flex;
    align-items: center;
    &::before {
      content: "";
      height: 35px;
      padding-right: 20px;
      border-left: 1px solid #CFCEC8;
    }
    p {
      margin-right: 15px;
    }
  }
  .dropdown {
    position: absolute;
    top: 45px;
    right: 0px;
    display: flex;
    flex-direction: column;
    width: 160px;
    padding: 10px;
    background-color: #fafafa;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
