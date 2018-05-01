<template>
  <div class="image-placeholder">
    <img v-if="src" :src="src">
    <user-icon v-if="type === 'user'"></user-icon>
    <image-icon></image-icon>
  </div>
</template>

<script>
import UserIcon from '../../components/atoms/icons/UserIcon.vue';
import ImageIcon from '../../components/atoms/icons/ImageIcon.vue';

export default {
  components: {
    UserIcon,
    ImageIcon
  },
  props: [
    'src',
    'type'
  ]
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.image-placeholder {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: $color-lighter-grey;
  overflow: hidden;

  svg {
    fill: $color-lightish-grey;
    margin-top: 10px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &--small {
    height: 30px;
    width: 30px;

    svg {
      margin-top: 6px;
    }
  }
}

</style>
