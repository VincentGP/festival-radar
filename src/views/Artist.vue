<template>
  <div>
    <fr-header-section
      :type="'artist'"
      :title="currentArtist.name"
      :imgSrc="imagePath"
      :description="currentArtist.description"
      :bottom-text="currentArtist.popularity + ' fans tracking alerts for this artist.'"
      :action-type="'toggle'"
      :action-text="isFollowed ? 'Unfollow' : 'Follow'"
      :action-id="currentArtist._id"
      :action-link="''">
    </fr-header-section>
     <div class="container">
      <div class="container__main">
        <div class="container__main__content">
          <fr-festival-list 
            :topTitle="'Upcomming festivals where ' + currentArtist.name +' is playing (' + festivals.length + ')'" 
            :festivals="festivals"
            :search="false">
            </fr-festival-list>
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
    },
    festivals() {
      let festivals = [];
      this.$store.state.festival.festivals.forEach(festival => {
        festival.artists.forEach(artistId => {
          if (this.currentArtist._id === artistId) {
            festivals.push(festival);
          }
        });
      });
      return festivals;
    },
  }
};

</script>
