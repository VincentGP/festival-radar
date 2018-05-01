<template>
  <div>
    <div class="lineup-top">
      <p>You are currently following <span class="bold">140</span> artists</p>
      <input class="inp inp__search" type="text" placeholder="Search for artist">
    </div>
    <ul>
      <li v-for="artist in artists" :key="artist._id">
        <fr-artist-card :artist="artist"></fr-artist-card>
      </li>
    </ul>
  </div>
</template>
<script>
import ArtistCard from '../molecules/ArtistCard';

export default {
  props: [
    'artists'
  ],
  components: {
    'fr-artist-card': ArtistCard
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
