<template>
  <div class="right-box">
    <h4>Followed festivals</h4>
    <hr>
    <ul class="tag-list">
      <li>
        <fr-tag :text="'Glostrup Festival'" :removeable="'true'"></fr-tag>
        <fr-tag :text="'Roskilde Festival'" :removeable="'true'"></fr-tag>
      </li>
    </ul>
    <hr>
    <div class="text">
      <p class="small">Change notification settings for festivals in profile <a class="link">dashboard</a></p>
    </div>
  </div>
</template>

<script>
import Tag from '../atoms/Tag.vue'

export default {
  components: {
    'fr-tag': Tag
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
  @import '../../assets/styles/colors.scss';

  .right-box {
    padding: 25px;
    background: #F7F8F9;
    border-radius: 8px;
    margin: 55px 0 0 0;

    .text {
      margin-top: 5px;
    }

    .tag-list {
      display: flex;
      margin-top: 10px;
    }
  }
</style>

