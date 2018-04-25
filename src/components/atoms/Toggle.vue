<template>
  <div class="toggle">
    {{ text }}
  </div>
</template>

<script>
import ArrowRight from '../../components/atoms/icons/ArrowRight.vue';
import ChevronRight from '../../components/atoms/icons/ChevronRight.vue';

export default {
  props: [
    'text',
    'active'
  ],
  components: {
    ArrowRight,
    ChevronRight
  }
};
</script>


<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.toggle {
  display: inline-block;
  border: 2px solid $color-blue;
  border-radius: 25px;
  transition: background 0.3s, color 0.3s;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  letter-spacing: 2.4px;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  font-size: 10px;

  .active {
    background: $color-blue;
    color: $color-white;

    svg {
      fill: $color-white;
    }
  }

  &:hover {
    background: $color-blue;
    color: $color-white;

    svg {
      fill: $color-white;
    }
  }
}
</style>

