<template>
  <div class="header-section">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="container__is-full">
        <p><slot></slot></p>
        <fr-button @click.native="navigate()" class="btn--small">{{ btnText }}</fr-button>
      </div>
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
    'title',
    'btn-text',
    'btn-link'
  ],
  methods: {
    navigate() {
      this.$router.push({ path: this.btnLink });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__is-full {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid $color-lightish-grey;
  }
}
</style>
