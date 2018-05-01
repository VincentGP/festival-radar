<template>
  <div class="festival-card">
    <div class="festival-card__header">
      <fr-imageplaceholder></fr-imageplaceholder>
      <div class="festival-card__header__info">
        <div class="festival-card__header__info__top">
          <div class="festival-card__header__info__date">
            {{ festival.startDate | niceDate }} - {{ festival.endDate | niceDate }}
          </div>
          <div class="festival-card__header__info__location">
            {{ festival.zip }} {{ festival.city }}, {{ festival.country }}
          </div>
        </div>
        <h4>{{ festival.name }}</h4>
      </div>
    </div>
    <div class="festival-card__content">
      <ul>
        <li>
          <fr-tag v-for="artist in artistNames"
            :key="artist._id"
            :text="artist.name"
            :action-link="'/artists/' + artist.slug">
          </fr-tag>
        </li>
      </ul>
    </div>
    <hr>
    <div class="festival-card__actions">
      <div class="festival-card__actions__info">
        <div class="festival-card__actions__info__item">
          <fr-follow-icon></fr-follow-icon>
          <span>{{ festival.popularity }} Followers</span>
        </div>
        <div class="festival-card__actions__info__item">
          <fr-fire-icon></fr-fire-icon>
          <span>27 Matches</span>
        </div>
      </div>
      <div class="festival-card__actions__buttons">
        <fr-toggle :text="isFollowed ? 'Unfollow' : 'Follow'" :active="isFollowed" @click.native="toggle()"></fr-toggle>
        <router-link :to="/festivals/ + festival.slug">
          <fr-button class="btn btn--small">Gå til festival</fr-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../atoms/ImagePlaceholder.vue';
import Toggle from '../atoms/Toggle.vue';
import FollowIcon from '../atoms/icons/FollowIcon.vue';
import FireIcon from '../atoms/icons/FireIcon.vue';
import Button from '../atoms/Button.vue';
import Tag from '../atoms/Tag.vue';

export default {
  components: {
    'fr-imageplaceholder': ImagePlaceholder,
    'fr-follow-icon': FollowIcon,
    'fr-fire-icon': FireIcon,
    'fr-button': Button,
    'fr-toggle': Toggle,
    'fr-tag': Tag
  },
  props: [
    'festival'
  ],
  methods: {
    toggle() {
      this.$store.dispatch('toggleFavorite', {id: this.festival._id, type: 'festival'});
    }
  },
  computed: {
    isFollowed() {
      return this.$store.getters.isFollowed(this.festival._id, 'festival');
    },
    artistNames() {
      let artists = [];
      // Loop igennem alle artister
      this.$store.state.artist.artists.forEach(artist => {
        // Loop igennem festivalens kunstnere og sammenlign
        this.festival.artists.forEach(id => {
          if (artist._id === id) {
            artists.push(artist);
          }
        });
      });
      return artists;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/colors.scss';

  .festival-card {
    padding: 25px;
    background: $color-lighter-grey;
    margin-bottom: 20px;
    border-radius: 8px;

    &__header {
      display: flex;
      align-items: center;

      &__info {
        margin-left: 10px;
        width: 100%;

        &__top {
          display: flex;
        }

        &__date {
          text-transform: uppercase;
          font-size: 10px;
          margin-bottom: 3px;
        }

        &__location {
          text-transform: uppercase;
          font-size: 10px;
          margin-left: auto;
        }
      }
    }

    &__content {
      margin-top: 10px;
    }

    hr {
      width: 100px;
    }

    &__actions {
      display: flex;
      justify-content: space-between;

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
          align-items: center;
          white-space: nowrap;
        }
      }

      &__buttons {
        display: flex;

        & > * {
          margin-right: 10px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
