<template>
  <div class="artist-card">
    <fr-imageplaceholder :type="'user'"></fr-imageplaceholder>
    <div class="artist-card__info">
      <p>{{ artist.name }}</p>
      <div class="artist-card__info">
        <div class="artist-card__info__item">
          <fr-fire-icon></fr-fire-icon>
          <span>{{ artist.popularity }} Followers</span>
        </div>
      </div>
    </div>
    <div class="artist-card__right">
      <fr-toggle :text="isFollowed ? 'Unfollow' : 'Follow'" :active="isFollowed" @click.native="toggle()"></fr-toggle>
      <router-link :to="'/artists/' + artist.slug">
        <fr-button class="btn--small">Go to artist</fr-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../atoms/ImagePlaceholder.vue';
import FireIcon from '../atoms/icons/FireIcon.vue';
import Button from '../atoms/Button.vue';
import Toggle from '../atoms/Toggle.vue';

export default {
  components: {
    'fr-imageplaceholder': ImagePlaceholder,
    'fr-fire-icon': FireIcon,
    'fr-button': Button,
    'fr-toggle': Toggle
  },
  props: [
    'artist'
  ],
  computed: {
    isFollowed() {
      return this.$store.getters.isFollowed(this.artist._id, 'artist');
    }
  },
  methods: {
    toggle() {
      this.$store.dispatch('toggleFavorite', {id: this.artist._id, type: 'artist'});
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_import.scss';

  .artist-card {
    display: flex;
    padding: 10px;
    background: $color-lighter-grey;
    margin-bottom: 5px;
    border-radius: 8px;

    svg {
      height: 15px;
      width: 15px;
      fill: $color-light-grey;
      margin-right: 10px;
    }

    &__right {
      align-self: center;
      margin-left: auto;

      & > * {
        margin-right: 10px;
      }

      & > *:last-child {
        margin-right: 0;
      }
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
