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
