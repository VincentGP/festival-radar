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
}
</script>

<style lang="scss" scoped>

.btn {
  display: inline-block;
  background: #f7f8f9;
  height: 48px;
  padding: 0 30px;
  border: 2px solid #93B6B7;
  border-radius: 25px;
  transition: background 0.3s, color 0.3s;
  text-transform: uppercase;
  text-align: center;
  line-height: 48px;
  cursor: pointer;

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
    background: #93B6B7;
    color: white;

      svg {
        fill: white;
      }
  }

  &--small {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
  }

  &--gray {
    border: 2px solid #D8D8D8;

    &:hover {
      background: #D8D8D8;
      color: black;

      svg {
        fill: black;
      }
    }
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
      fill: #93B6B7;
      transition: transform .3s;
    }

    &:hover {
      background: 0;
      color: black;

      svg {
        fill: #93B6B7;
        transform: translateX(3px);
      }
    }
  }
}

</style>
