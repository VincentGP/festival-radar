<template>
  <div>
    <div class="lineup-top">
      <h4>Lineup</h4>
      <input class="inp inp__search" type="text" placeholder="Search for artist">
    </div>
    <ul>
      <li>
        <fr-artist-card-small v-for="artist in artists" :key="artist._id" :artist="artist"></fr-artist-card-small>
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
  components: {
    'fr-artist-card-small': ArtistCardSmall
  },
  computed: {
    artists() {
      return this.$store.state.artist.artists.filter((artist) => this.festival.artists.includes(artist._id));
    }
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
