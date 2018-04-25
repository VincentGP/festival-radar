<template>
  <div class="btn">
    <slot></slot>
    <template v-if="icon === 'chevron-right'">
      <chevron-right class="chevron-right"></chevron-right>
    </template>
    <template v-if="icon === 'arrow-right'">
      <arrow-right class="arrow-right"></arrow-right>
    </template>
  </div>
</template>

<script>
import ArrowRight from '../../components/atoms/icons/ArrowRight.vue';
import ChevronRight from '../../components/atoms/icons/ChevronRight.vue';

export default {
  props: [
    'icon'
  ],
  components: {
    ArrowRight,
    ChevronRight
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.btn {
  display: inline-block;
  background: #f7f8f9;
  height: 48px;
  padding: 0 30px;
  border: 2px solid $color-blue;
  border-radius: 25px;
  transition: background 0.3s, color 0.3s;
  text-transform: uppercase;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 2.4px;

  svg {
    margin-left: 20px;
    transition: fill 0.3s;
    float: right;

    &.chevron-right {
      height: 17px;
      width: 9px;
      margin-top: 15px;
    }

    &.arrow-right {
      width: 19px;
      height: 18px;
      margin-top: 5px;
    }
  }

  &:hover {
    background: $color-blue;
    color: $color-white;

      svg {
        fill: $color-white;
      }
  }

  &--small {
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    font-size: 10px;
  }

  &--gray {
    border: 2px solid $color-lightish-grey;

    &:hover {
      background: $color-lightish-grey;
      color: $color-black;

      svg {
        fill: $color-black;
      }
    }
  }
  
  &--transparent {
    background: transparent;
  }

  &--no-style {
    background: none;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 0;
    border: 0;
    line-height: 30px;
    cursor: pointer;

    svg {
      fill: $color-blue;
      transition: transform .3s;
    }

    &:hover {
      background: 0;
      color: $color-black;

      svg {
        fill: $color-blue;
        transform: translateX(3px);
      }
    }
  }
}
</style>
