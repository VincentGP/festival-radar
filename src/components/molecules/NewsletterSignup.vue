<template>
  <div class="newsletter-signup">
    <input class="inp inp--rounded" type="text" placeholder="Your email address" v-model="email">
    <div @click="signup()" class="arrow">
      <ArrowRight/>
    </div>
  </div>
</template>

<script>
import ArrowRight from '../atoms/icons/ArrowRight';
export default {
  components: {
    ArrowRight
  },
  data() {
    return {
      email: ''
    };
  },
  methods: {
    signup() {
      if (this.email === '') return alert('Woops, you have to fill out the field 😯');
      alert(`Congrats! Your mail ${this.email} would have received our newsletter, but the functionality is not quite ready 😄`);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';
.newsletter-signup {
  position: relative;
  margin: 10px;
  .arrow {
    position: absolute;
    top: 12px;
    right: 16px;
    svg {
      fill: $color-light-grey;
      transition: fill .3s;
      &:hover {
        fill: $color-black;
        cursor: pointer;
      }
    }
  }
}
</style>
