<template>
  <div class="festival-card">
    <div class="festival-card__header">
      <fr-imageplaceholder></fr-imageplaceholder>
      <div class="festival-card__header__info">
        <div class="festival-card__header__info__date">1 JUNE 2018 - 8 JUNE 2018</div>
        <h4>{{ festival.name }}</h4>      
      </div>
    </div>
    <div class="festival-card__content">
      <ul>
        <li>
          <div class="tag">
            <label class="tag__text">FOO-FIGHTERS</label>
          </div>
          <div class="tag">
            <label class="tag__text">CARDI-B</label>
          </div>
          <div class="tag">
            <label class="tag__text">FOO-FIGHTERS</label>
          </div>
        </li>
      </ul>
    </div>
    <hr>
    <div class="festival-card__actions">
      <div class="festival-card__actions__info">
        <div class="festival-card__actions__info__item">
          <fr-follow-icon></fr-follow-icon>
          <span>343</span>
        </div>
        <div class="festival-card__actions__info__item">
          <fr-fire-icon></fr-fire-icon>
          <span>27</span>
        </div>
      </div>
      <div class="festival-card__actions__buttons">
        <div class="toggle">Follow</div>
        <router-link :to="/festival/ + festival.slug">
          <fr-button class="btn btn--small">Gå til festival</fr-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../atoms/ImagePlaceholder.vue'
import FollowIcon from '../atoms/icons/FollowIcon.vue'
import FireIcon from '../atoms/icons/FireIcon.vue'
import Button from '../atoms/Button.vue'

export default {
  components: {
    'fr-imageplaceholder': ImagePlaceholder,
    'fr-follow-icon': FollowIcon,
    'fr-fire-icon': FireIcon,
    'fr-button': Button
  },
  props: [
    'festival'
  ]
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

        &__date {
          text-transform: uppercase;
          font-size: 10px;
          margin-bottom: 3px;
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

        .toggle {
          display: inline-block;
          height: 30px;
          padding: 0 20px;
          border: 2px solid $color-blue;
          border-radius: 25px;
          transition: background 0.3s, color 0.3s;
          text-transform: uppercase;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 2.4px;

          &:hover {
            background: $color-blue;
            color: $color-white;
          }

          .active {
            background: $color-blue;
            color: $color-white;
          }
        }
      }
    }
  }
</style>

