<template>
  <div class="artist-card">
    <fr-imageplaceholder :type="'user'"></fr-imageplaceholder>
    <div class="artist-card__info">
      <p>Bruno Mars</p>
      <div class="artist-card__info">
        <div class="artist-card__info__item">
          <fr-fire-icon></fr-fire-icon>
          <span>343 Followers</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../atoms/ImagePlaceholder.vue'
import FireIcon from '../atoms/icons/FireIcon.vue'
import Button from '../atoms/Button.vue'

export default {
  components: {
    'fr-imageplaceholder': ImagePlaceholder,
    'fr-fire-icon': FireIcon,
  },
  props: [
    'artist'
  ]
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_import.scss';

  .artist-card {
    display: flex;
    padding: 10px;
    background: $color-lighter-grey;
    margin-bottom: 20px;
    border-radius: 8px;

    svg {
      height: 15px;
      width: 15px;
      fill: $color-light-grey;
      margin-right: 10px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 16px;
        line-height: 20px;
      }

      &__item {
        display: flex;
        margin-right: 20px;
        letter-spacing: 2.4px;
        font-size: 10px;
        text-transform: uppercase;
        align-items: flex-end;
      }
    }
  }
</style>