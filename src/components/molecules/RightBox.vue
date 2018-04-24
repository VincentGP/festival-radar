<template>
  <div class="right-box">
    <h4>Followed festivals</h4>
    <hr>
    <ul class="tag-list">
      <li>
        <div class="tag">
          <label class="tag__text">FOO-FIGHTERS</label>
          <span class="tag__removeable">
            <fr-close-icon></fr-close-icon>
          </span>
        </div>
        <div class="tag">
          <label class="tag__text">CARDI-B</label>
          <span class="tag__removeable">
            <fr-close-icon></fr-close-icon>
          </span>
        </div>
        <div class="tag">
          <label class="tag__text">FOO-FIGHTERS</label>
          <span class="tag__removeable">
            <fr-close-icon></fr-close-icon>
          </span>
        </div>
      </li>
    </ul>
    <hr>
    <div class="text">
      <p class="small">Change notification settings for festivals in profile <a class="link">dashboard</a></p>
    </div>
  </div>
</template>

<script>
import CloseIcon from '../atoms/icons/CloseIcon.vue'

export default {
  components: {
    'fr-close-icon': CloseIcon
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
    margin: 55px 0 0 25px;

    .text {
      margin-top: 5px;
    }

    .tag-list {
      display: flex;
      margin-top: 10px;
    }
  }
</style>

