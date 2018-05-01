<template>
  <router-link :to="`/festivals/${actionLink}`">
    <div class="tag">
      <label class="tag__text">{{ text }}</label>
      <template v-if="removeable === 'true'">
        <span class="tag__removeable">
          <fr-close-icon></fr-close-icon>
        </span>
      </template>
    </div>
  </router-link>
</template>

<script>
import CloseIcon from '../atoms/icons/CloseIcon.vue';

export default {
  components: {
    'fr-close-icon': CloseIcon
  },
  props: [
    'text',
    'removeable',
    'action-link'
  ]
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_import.scss';

.tag {
  display: inline-block;
  background: $color-blue;
  height: 24px;
  padding: 0 20px;
  margin: 5px 10px 0 0;
  border-radius: 25px;
  transition: background 0.3s, color 0.3s;
  text-align: center;
  cursor: pointer;

  &__removeable {
    margin: 3px -10px 0 10px;
    cursor: pointer;
    height: 24px;

    svg {
      height: 7px;
      width: 10px;
      fill: $color-white;
    }
  }

  &__text {
    text-transform: uppercase;
    color: $color-white;
    line-height: 24px;
    font-size: 10px;
    letter-spacing: 2.4px;
    cursor: pointer;
  }
}
</style>
