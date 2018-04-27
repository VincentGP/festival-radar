<template>
  <footer class="footer">
    <p class="small">Subscribe and get the latest news</p>
    <fr-logo></fr-logo>
    <fr-newsletter-signup></fr-newsletter-signup>
  </footer>
</template>

<script>
import Logo from '../atoms/Logo';
import NewsletterSignup from '../organisms/NewsletterSignup';
export default {
  components: {
    'fr-logo': Logo,
    'fr-newsletter-signup': NewsletterSignup
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/_import.scss';

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background-color: $color-sand;
  p {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}

@include media($bp-phablet) {
  .footer {
    flex-direction: column;
    .small {
      margin: 10px;
    }
  }
}

</style>