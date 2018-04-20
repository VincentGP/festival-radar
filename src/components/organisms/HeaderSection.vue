<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="container__is-full">
      <p><slot></slot></p>
      <fr-button class="btn--small">
        Signup
      </fr-button>
    </div>
  </div>  
</template>

<script>
import Button from '../atoms/Button.vue';
export default {
  components: {
    'fr-button': Button
  },
  props: [
    'title'
  ]
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  &__is-full {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid $color-lightish-grey;
  }
}
</style>
