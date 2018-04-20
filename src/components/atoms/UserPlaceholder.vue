<template>
  <div>
    <div class="user-placeholder">
        <img v-if="src" :src="src" alt="">
        <user-icon></user-icon>
    </div>
  </div>
</template>

<script>
import UserIcon from '../../components/atoms/icons/UserIcon.vue';

export default {
  components: {
    UserIcon
  },
  props: ['src']
};
</script>
