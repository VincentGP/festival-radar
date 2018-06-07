<template>
  <div>
    <div class="lineup-top">
      <h4>Lineup</h4>
      <input v-model="search" class="inp inp__search" type="text" placeholder="Search for artist">
    </div>
    <ul>
      <li v-for="artist in filteredArtists" :key="artist._id">
        <fr-artist-card-small :artist="artist"></fr-artist-card-small>
      </li>
    </ul>
  </div>
</template>

<script>
import ArtistCardSmall from '../molecules/ArtistCardSmall';

export default {
  props: [
    'festival'
  ],
  data() {
    return {
      search: ''
    };
  },
  components: {
    'fr-artist-card-small': ArtistCardSmall
  },
  computed: {
    artists() {
      return this.$store.state.artist.artists.filter((artist) => this.festival.artists.includes(artist._id));
    },
    filteredArtists() {
      return this.artists.filter(artist => {
        return artist.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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
