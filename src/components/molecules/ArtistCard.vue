<template>
  <div class="artist-card">
    <div class="artist-card__artist">
      <fr-imageplaceholder :src="imagePath"></fr-imageplaceholder>
      <h4 class="title">{{ artist.name }}</h4>
    </div>
    <p class="artist-card__description">{{ artist.description }}</p>
    <hr>
    <div class="artist-card__info">
      <div class="artist-card__info__item">
        <fr-fire-icon></fr-fire-icon>
        <span>{{ artist.popularity }} Followers</span>
      </div>
      <div class="artist-card__info__right">
        <fr-toggle :text="isFollowed ? 'Unfollow' : 'Follow'" :active="isFollowed" @click.native="toggle()"></fr-toggle>
        <router-link :to="'artists/' + artist.slug">
          <fr-button class="btn--small">Go to artist</fr-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { apiBaseUrl } from '../../config/config';
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
    imagePath() {
      return `${apiBaseUrl}/uploads/artists/${this.artist.image}`;
    },
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
    padding: 20px 30px 20px;
    background: $color-lighter-grey;
    margin-bottom: 15px;
    border-radius: 8px;

    &__artist {
      display: flex;
      align-items: center;

      .title {
        margin-left: 15px;
      }
    }

    &__description {
      display: -webkit-box;
      height: 48px;
      margin-top: 15px;
      line-height: 24px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    hr {
      width: 100px;
    }

    &__info {
      display: flex;
      align-items: center;

      svg {
        height: 15px;
        width: 15px;
        fill: $color-light-grey;
        margin-right: 10px;
      }

      &__item {
        display: flex;
        margin-right: 20px;
        letter-spacing: 2.4px;
        font-size: 10px;
        text-transform: uppercase;
        align-items: flex-end;
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
    }
  }
</style>
