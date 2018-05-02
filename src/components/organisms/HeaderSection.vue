<template>
  <section class="section">
    <div class="section__header">
      <div v-if="type === 'festival' || type === 'artist'" class="section__header__single">
        <div class="section__header__single__top">
          <div class="info">
            <div class="label label--uppercase">{{ type }}
              <div class="info__image">
                <img :src="imgSrc" alt="">
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
          <fr-toggle :text="actionText" :active="isFollowed" @click.native="toggle()"></fr-toggle>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
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
    'imgSrc',
    'description',
    'bottom-text',
    'action-type',
    'action-text',
    'actionId',
    'action-link',
    'actionName'
  ],
  methods: {
    navigate() {
      this.$router.push({ path: this.actionLink });
    },
    toggle() {
      this.$store.dispatch('toggleFavorite', {id: this.actionId, type: this.type});
    }
  },
  computed: {
    isFollowed() {
      return this.$store.getters.isFollowed(this.actionId, this.type);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_import.scss';

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
            width: 200px;
            height: 200px;

            img {
              width: 100%;
              height: 100%;
            }
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
