<template>
  <div class="info-columns">
    <div class="info-column">
      <h4 class="info-column__title">
        Cross Mailbox
      </h4>
      <p class="info-column__text">
        The Monster DNA Pro 2.0 Over-Ear headphones are well-balanced and good-quality with two headphone ports for simultaneous listening. They come with a soft carrying case and two cables.
      </p>
    </div>
    <div class="info-column">
      <h4 class="info-column__title">
        Unable to sign in Hotmail
      </h4>
      <p class="info-column__text">
        If you’ve hung around kids at all in the last few years, you know they love YouTube, even though the video site is only supposed to be for people 13 and up.
      </p>
    </div>
    <div class="info-column">
      <h4 class="info-column__title">
        Fascinating Features
      </h4>
      <p class="info-column__text">
        Apple may be experimenting in the virtual reality space. The company has been granted a patent for a head-mounted virtual reality device that would use the iPhone screen as the display.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/_import.scss';

  .info-columns {
    display: flex;

    @include media($bp-tablet-sm) {
      flex-direction: column;
    }
    
    .info-column {
      width: 300px;
      margin: 0 auto;
      padding: 30px 30px;

      @include media($bp-tablet-sm) {
        padding: 30px 0 !important;
        width: auto;
      }

      &:first-child {
        padding: 30px 0;
        margin-left: 0;
        margin-top: -2px;
        border-top: 2px $color-blue solid;
      }

      &:last-child {
        padding: 30px 0;
        margin-right: 0;
      }

      &__title {
        margin-bottom: 15px;
      }
    }
  }

</style>

