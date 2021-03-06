<template>
  <div class="container">
    <div class="navigation">
      <fr-logo></fr-logo>
      <div class="navigation__right">
        <div class="navigation__right__links">
          <router-link class="menu-item" to="/festivals">Festivaler</router-link>
          <router-link class="menu-item" to="/artists">Artists</router-link>
          <router-link class="menu-item" to="/articles">News</router-link>
        </div>
        <div class="navigation__right__user">
          <template v-if="isAuthenticated">
            <a class="loggedin">
              <router-link to="/dashboard">
                <div class="menu-item menu-item--user">{{ user.firstName + " " + user.lastName }}</div>
                <fr-image-placeholder class="image-placeholder--small" :src="profileImagePath"></fr-image-placeholder>
              </router-link>
            </a>
          </template>
          <template v-else>
            <router-link to="/login" class="menu-item">Login</router-link >
            <router-link to="/signup" class="menu-item">Signup</router-link >
          </template>
        </div>
        <div class="navigation__right__menu-trigger">
          <button>Menu trigger</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../../components/atoms/ImagePlaceholder.vue';
import Logo from '../../components/atoms/Logo.vue';
import { apiBaseUrl } from '../../config/config';

export default {
  components: {
    'fr-image-placeholder': ImagePlaceholder,
    'fr-logo': Logo
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
  @import '../../assets/styles/_import.scss';

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

    &__right {
      display: flex;
      margin-top: 5px;

      &__menu-trigger {
        display: none;

        @include media($bp-tablet) {
          display: block;
        }
      }

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

        @include media($bp-tablet) {
          display: none;
        }
      }

      &__user {
        margin-left: 20px;

        .loggedin {
          a {
            display: flex;
          }
          display: flex;
          margin-top: -5px;
        }

        @include media($bp-tablet) {
          display: none;
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
          max-width: 140px;
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

        &.router-link-exact-active {
          &::after {
            width: calc(100% - 22px);
            border-bottom: 1px solid $color-blue;
          }
        }

        &:hover {
          &::after {
            width: calc(100% - 22px);
            border-bottom: 1px solid $color-light-grey;
          }
        }
      }
    }
  }
</style>
