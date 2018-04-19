<template>
  <div class="btn">
    <slot></slot>
    <template v-if="icon === 'chevron-right'">
      <chevron-right></chevron-right>
    </template>
    <template v-if="icon === 'arrow-right'">
      <arrow-right></arrow-right>
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
    height: 17px;
    width: 9px;
    float: right;
    margin-top: 15px;
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
    
  }
}

</style>
