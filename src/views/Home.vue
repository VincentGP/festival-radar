<template>
  <div>
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
        <fr-info-columns></fr-info-columns>
      </div>
    </div>
    <div class="background--white">
      <div class="container">
        <div class="container__main">
          <div class="container__main__content">
            <fr-artist-list :artists="artists"></fr-artist-list>
          </div>
          <template v-if="isAuthenticated">
            <div class="container__main__right">
              <div class="block block--sticky">
                <div class="block__row">
                  <fr-right-box></fr-right-box>
                </div>
                <div class="block__row block__row--right">
                  <router-link to="/festivals">
                    <fr-button :icon="'chevron-right'">Go to festivals</fr-button>
                  </router-link>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="container__main__right">
              <div class="block block--sticky">
                <div class="block__row">
                  <p><strong>Festivals where your chosen artists are playing:</strong></p>
                  <ul v-for="festival in visitorMatchingFestivals" :key="festival._id">
                    <router-link :to="'festivals/' + festival.slug">
                      <li>{{ festival.name }}</li>
                    </router-link>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroYellowIcon from '../components/atoms/icons/HeroYellowIcon';
import HeroBlueIcon from '../components/atoms/icons/HeroBlueIcon';
import InfoColumns from '../components/organisms/InfoColumns';
import ArtistList from '../components/organisms/ArtistsList.vue';
import RightBox from '../components/molecules/RightBoxArtists.vue';
import Button from '../components/atoms/Button.vue';

export default {
  components: {
    'fr-hero-yellow-icon': HeroYellowIcon,
    'fr-hero-blue-icon': HeroBlueIcon,
    'fr-info-columns': InfoColumns,
    'fr-artist-list': ArtistList,
    'fr-right-box': RightBox,
    'fr-button': Button
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    artists() {
      return this.$store.state.artist.artists;
    },
    visitorMatchingFestivals() {
      let matchingFestivals = [];
      // Alle festivaler
      const festivals = this.$store.state.festival.festivals;
      // Loop igennem alle festivaler
      festivals.forEach(festival => {
        // Loop herefter igennem kunstnere
        festival.artists.forEach(artist => {
          // Loop så igennem visitors valgte kunstnere
          this.$store.state.visitor.followedArtists.forEach(id => {
            if (artist === id) {
              // Hvis festivalen ikke allerede er i matchende festivaler
              if (!matchingFestivals.includes(festival)) {
                matchingFestivals.push(festival);
              }
            }
          });
        });
      });
      return matchingFestivals;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_import.scss';

  .background {
    margin: -70px 0 0 0;
    min-height: calc(100vh - 70px);
    padding-top: 70px;
    background-image: radial-gradient(69% 244%, #EDE7D1 25%, #93B6B7 100%);

    &--white {
      color: $color-white;
    }
  }

  .hero-section {
    display: flex;
    height: 420px;
    position: relative;
    margin-top: 70px;
    margin-bottom: 50px;

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

      @include media($bp-tablet) {
        display: none;
      }

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
