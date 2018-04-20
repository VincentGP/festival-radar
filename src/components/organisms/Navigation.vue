<template>
  <div class="navigation">
    <div class="logo">
      <h2>Festival</h2>
      <h2>radar</h2>
    </div>
    <div class="navigation__right">
      <div class="navigation__right__links">
        <a class="menu-item active">Festivals</a>
        <a class="menu-item">Artists</a>
        <a class="menu-item">Articles</a>
        <a class="menu-item">About us</a>
      </div>
      <div class="navigation__right__user">
        <template v-if="isAuthenticated">
          <a class="loggedin">
            <p class="menu-item menu-item--user">{{ user.firstName + " " + user.lastName }}</p>
            <fr-user-placeholder class="user-placeholder--small" :src="profileImagePath"></fr-user-placeholder>
          </a>
        </template>
        <template v-else>
          <a class="menu-item">Login</a>
          <a class="menu-item">Signup</a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import UserPlaceholder from '../../components/atoms/UserPlaceholder.vue';
import { apiBaseUrl } from '../../config/config';

export default {
  components: {
    'fr-user-placeholder': UserPlaceholder,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    user() {
      return this.$store.state.user; 
    },
    profileImagePath() {
      return `${apiBaseUrl}/uploads/${this.user.imagePath}`;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/colors.scss';

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

    .logo {
      display: flex;

      h2 {
        margin: 0;

        &:nth-child(2) {
          color: $color-blue;
        }
      }
    }
    
    &__right {
      display: flex;
      margin-top: 15px;

      &__links {
        position: relative;

        &::after {
          position: absolute;
          margin-top: -7px;
          content: '';
          display: inline-block;
          height: 30px;
          border-right: 1px solid $color-light-grey;
        }
      }

      &__user {
        margin-left: 20px;

        .loggedin {
          display: flex;
          margin-top: -5px;
        }
      }

      .menu-item {
        color: $color-black;
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 2.4px;
        font-weight: 300;
        padding: 10px;
        margin-right: 20px;
        position: relative;

        &--user {
          max-width: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 0;
          text-transform: capitalize;
        }

        &::after {
          content: '';
          position: absolute;
          width: 0;
          bottom: 0;
          left: 10px;
          display: inline-block;
          transition: width .2s ease-out;
        }

        &.active {
          &::after {
            width: 30px;
            border-bottom: 1px solid $color-blue;
          }
        }

        &:hover {
          &::after {
            width: 30px;
            border-bottom: 1px solid $color-light-grey;
          }
        }
      }
    }
  }
</style>

