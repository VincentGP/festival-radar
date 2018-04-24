<template>
  <div class="right-box">
    <h4>Fulgte festivaller</h4>
    <hr>
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
    'type',
    'tags',
    'title',
    'btn-text'
  ]
};
</script>

<style lang="scss" scoped>
  .right-box {
    max-width: 300px;
    padding: 25px;
    background: #F7F8F9;
    border-radius: 8px;
    margin: 55px 0 0 25px;
  }
</style>

