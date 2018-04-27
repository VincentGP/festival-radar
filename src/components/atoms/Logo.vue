<template>
  <div class="logo">
    <router-link to="/">
      <h2>Festival</h2>
      <h2>radar</h2>
    </router-link>
  </div>
</template>

<style lang="scss">
@import '../../assets/styles/_import.scss';
.logo {
  display: flex;
  a {
    display: flex;
  }
  h2 {
    margin: 0;
    &:nth-child(2) {
      color: $color-blue;
    }
  }
}
</style>
