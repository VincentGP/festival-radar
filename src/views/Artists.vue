<template>
  <div>
    <fr-header-section
      :title="'Artists'"
      :bottom-text="'By following artists we are able to find the most fitting music festivals for your needs'">
    </fr-header-section>
     <div class="container">
      <div class="container__main">
        <div class="container__main__content">
          <fr-artist-list :artists="artists"></fr-artist-list>
        </div>
        <div class="container__main__right">
          <div class="block block--sticky">
            <div class="block__row">
              <fr-right-box></fr-right-box>
            </div>
            <div class="block__row block__row--right">
              <fr-button :icon="'chevron-right'">Go to festivals</fr-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from '../components/organisms/HeaderSection';
import ArtistList from '../components/organisms/ArtistsList.vue';
import RightBox from '../components/molecules/RightBoxArtists.vue';
import Button from '../components/atoms/Button.vue';

export default {
  components: {
    'fr-header-section': HeaderSection,
    'fr-artist-list': ArtistList,
    'fr-right-box': RightBox,
    'fr-button': Button
  },
  data() {
    return {
      artists: this.$store.state.artist.artists
    };
  }
};
</script>
