<template>
  <footer class="footer">
    <div class="footer__content">    
      <p class="small">Subscribe and get the latest news</p>
      <fr-logo></fr-logo>
      <fr-newsletter-signup></fr-newsletter-signup>
    </div>
  </footer>
</template>

<script>
import Logo from '../atoms/Logo';
import NewsletterSignup from '../molecules/NewsletterSignup';
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
  background-color: $color-sand;
  width: 100%;
  max-height: 100px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0px auto;
    width: calc(100% - 100px);
  }

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