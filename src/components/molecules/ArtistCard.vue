<template>
  <div class="artist-card">
    <div class="artist-card__artist">
      <fr-imageplaceholder :type="'user'"></fr-imageplaceholder>
      <h4 class="title">Bruno Mars</h4>
    </div>
    <p class="artist-card__description">
      Apple Inc has decided to launch the much awaited Apple Watch in the upcoming month of April and has already received around five to six million orders for the product. Analysts have expected this product of the company to bring a positive change in the future revenue generation of the company. In the year 2014, when it became apparent that Apple (NASDAQ: AAPL) is in the midst of creating a smartwatch and will launch it in start of 2015, quite a few companies decided to create watches on their own to compete with the tech giant in the smart watch industry. Among the many companies who launched their customized versions of smart watches, Samsung Ltd (SSNLF) was the one of the prominent companies who was successful in producing a variety of smart watches within a very short period of time. Sony, Google and LG were other big companies who were also seen to have launched smart-watches taking advantage of the increasing interest of the consumers. According to a report released by Bidness ETC, Apple is expected to take full control of the smartwatch market on the release of its watch, in the same way that the company has excelled in the smartphone and laptop industry. According to the company’s history, the classic iPhone makers have never created the product that was not already in the market but it sure has introduced revolutionized and ingenious technology to every industry that it has stepped into. Taking the company’s iPod into consideration, it completely changed the perspective of the consumers on how a media player should be and raised expectations to a new level. The company was not the first one to introduce a media player but when it did, it made sure that it created a hype in the industry by coming up with technology that had never been used previously.
    </p>
    <hr>
    <div class="artist-card__info">
      <div class="artist-card__info__item">
        <fr-fire-icon></fr-fire-icon>
        <span>343 Followers</span>
      </div>
      <div class="artist-card__info__right">
        <fr-toggle :active="'active'" :text="'Unfollow'"></fr-toggle>
        <router-link :to="'#'">
          <fr-button class="btn--small">Go to artist</fr-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../atoms/ImagePlaceholder.vue'
import FireIcon from '../atoms/icons/FireIcon.vue'
import Button from '../atoms/Button.vue'
import Toggle from '../atoms/Toggle.vue'

export default {
  components: {
    'fr-imageplaceholder': ImagePlaceholder,
    'fr-fire-icon': FireIcon,
    'fr-button': Button,
    'fr-toggle': Toggle
  },
  props: [
    'artist'
  ]
}
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