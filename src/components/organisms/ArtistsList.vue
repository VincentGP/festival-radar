<template>
  <div>
    <template v-if="isAuthenticated">
      <div class="lineup-top">
        <p>You are currently following <span class="bold">{{ followedArtists.length }}</span> {{ followedArtists.length === 1 ? 'artist' : 'artists' }}</p>
        <input v-model="search" class="inp inp__search" type="text" placeholder="Search for artist">
      </div>
      <ul>
        <li v-for="artist in filteredArtists" :key="artist._id">
          <fr-artist-card :artist="artist"></fr-artist-card>
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="lineup-top">
        <div></div>
        <input v-model="search" class="inp inp__search" type="text" placeholder="Search for artist">
      </div>
      <ul>
        <li v-for="artist in filteredArtists" :key="artist._id">
          <fr-artist-card :artist="artist"></fr-artist-card>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ArtistCard from '../molecules/ArtistCard';

export default {
  components: {
    'fr-artist-card': ArtistCard
  },
  props: [
    'artists',
    'topTitle'
  ],
  data() {
    return {
      search: ''
    };
  },
  computed: {
    filteredArtists() {
      return this.artists.filter(artist => {
        return artist.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    ...mapGetters([
      'isAuthenticated',
      'followedArtists'
    ])
  }
};
</script>

<style lang="scss" scoped>
.lineup-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
