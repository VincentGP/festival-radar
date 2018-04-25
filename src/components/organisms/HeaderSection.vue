<template>
  <section class="section">
    <div class="section__header">
      <div v-if="type === 'article'" class="section__header__article">

      </div>  
      <div v-else-if="type === 'festival' || type === 'artist'" class="section__header__single">
        <div class="section__header__single__top">
          <div class="info">
            <div class="label label--uppercase">{{ type }}
              <div class="info__image">
              </div>
            </div>
            <h1 class="info__title">{{ title }}</h1>
            <p class="info__description">{{ description }}</p>
            <a class="link">Read more</a>
          </div>
        </div>
      </div>
      <div v-else class="section__header__default">
        <h1>{{ title }}</h1>
      </div>
      <hr>
      <div class="section__header__bottom">
        <p>{{ bottomText }}</p>
        <template v-if="actionType === 'button'">
          <fr-button @click.native="navigate()" class="btn--small btn--transparent">{{ actionText }}</fr-button>
        </template>
        <template v-if="actionType === 'toggle'">
          <fr-toggle :text="actionText" :active="''" @click.native="navigate()"></fr-toggle>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import clamp from 'clamp.js';
import Button from '../atoms/Button.vue';
import Toggle from '../atoms/Toggle.vue';

export default {
  components: {
    'fr-button': Button,
    'fr-toggle': Toggle
  },
  props: [
    'type',
    'title',
    'description',
    'bottom-text',
    'action-type',
    'action-text',
    'action-link'
  ],
  methods: {
    navigate() {
      this.$router.push({ path: this.actionLink });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.section{
  margin-top: -70px;
  background-image: radial-gradient(69% 244%, #EDE7D1 25%, #93B6B7 100%);

  &__header {
    max-width: 1200px;
    margin: 0px auto;
    width: calc(100% - 100px);

    &__single {
      padding: 190px 0 0;

      &__top {
        .info {
          &__title {
            margin-bottom: 10px
          }

          $font-size: 16px;
          $line-height: 24px;
          $lines-to-show: 4;

          &__description {
            display: block; /* Fallback for non-webkit */
            display: -webkit-box;
            height: 96px;
            font-size: $font-size;
            line-height: $line-height;
            -webkit-line-clamp: $lines-to-show;
            -webkit-box-orient: vertical;
            overflow: hidden;

            &.open {
              overflow: visible;
              height: auto;
              -webkit-line-clamp: unset;
            }
          }

          &__image {
            margin: 0 0 30px 30px;
            float: right;
            min-width: 200px;
            height: 200px;
            background: green;
          }
        }
      } 
    }
    
    &__default {
      padding: 170px 0 0;
    }

    &__bottom {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>
