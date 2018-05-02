<template>
  <div class="background">
    <div class="container">
      <div class="hero-section">
        <h1>Festival<span class="blue">Radar</span> Button is a feature in communication software</h1>
        <div class="image-boxes">
          <div class="image-boxes__image">
            <img src="../assets/a.jpg" alt="">
          </div>
          <div class="image-boxes__blue"></div>
          <div class="image-boxes__yellow"></div>
          <fr-hero-yellow-icon class="icon-yellow"></fr-hero-yellow-icon>
          <fr-hero-blue-icon class="icon-blue"></fr-hero-blue-icon>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import HeroYellowIcon from '../components/atoms/icons/HeroYellowIcon';
import HeroBlueIcon from '../components/atoms/icons/HeroBlueIcon';

export default {
  components: {
    'fr-hero-yellow-icon': HeroYellowIcon,
    'fr-hero-blue-icon': HeroBlueIcon
  }
}
</script>


<style lang="scss" scoped>
  @import '../assets/styles/_import.scss';

  .background {
    margin: -70px 0 0 0;
    padding-top: 70px;
    background-image: radial-gradient(69% 244%, #EDE7D1 25%, #93B6B7 100%);
  }

  .hero-section {
    display: flex;
    height: 420px;
    position: relative;
    margin-top: 70px;

    .blue {
      font-family: $font-bauhaus;  
      font-size: 60px;
      margin-bottom: 30px;
      color: $color-blue;
    }

    h1 {
      text-align: center;
      z-index: z(heroTitleText);
    }

    .image-boxes {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 76px;
      text-align: center;
      width: 487px;

      &__blue {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0px;
        top: 0px;
        height: 318px;
        width: 424px;
        background: rgba(112,203,224,0.22);
      }

      &__image {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 30px;
        top: -30px;
        height: 318px;
        width: 424px;

        img {
          width: 100%;
          height: 100%;
          transform: scaleX(-1);
        }
      }

      &__yellow {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 60px;
        top: -60px;
        height: 318px;
        width: 424px;
        background: rgba(248,231,28,0.15);
      }

      .icon-yellow {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: -60px;
        top: -20px;
        z-index: z(heroIcons);
      }

      .icon-blue {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 350px;
        top: 80px;
      }
    }
  }
</style>
