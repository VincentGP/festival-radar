<template>
  <div>
    <fr-header-section
      :type="'artist'"
      :title="currentArtist.name"
      :imgSrc="imagePath"
      :description="currentArtist.description"
      :bottom-text="currentArtist.popularity + ' fans tracking alerts for this festival.'"
      :action-type="'toggle'"
      :action-text="isFollowed ? 'Unfollow' : 'Follow'"
      :action-id="currentArtist._id"
      :action-link="''">
    </fr-header-section>
     <div class="container">
      <div class="container__main">
        <div class="container__main__content">
          <p>Upcomming festivals where <span>20SYL</span> is playing <span>(2)</span></p>
          <fr-festival-list></fr-festival-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiBaseUrl } from '../config/config';
import HeaderSection from '../components/organisms/HeaderSection';
import Button from '../components/atoms/Button.vue';
import FestivalList from '../components/organisms/FestivalList.vue';
import LogoVue from '../components/atoms/Logo.vue';

export default {
  components: {
    'fr-header-section': HeaderSection,
    'fr-button': Button,
    'fr-festival-list': FestivalList
  },
  computed: {
    currentArtist() {
      // Find navn baseret på url
      let name = this.$router.currentRoute.params.slug;
      return this.$store.state.artist.artists.find(artist => artist.slug === name);
    },
    isFollowed() {
      return this.$store.getters.isFollowed(this.currentArtist._id, 'artist');
    },
    imagePath() {
      return `${apiBaseUrl}/uploads/artists/${this.currentArtist.image}`;
    }
  }
};

</script>
