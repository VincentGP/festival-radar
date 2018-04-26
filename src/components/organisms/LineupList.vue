<template>
  <div>
    <div class="lineup-top">
      <h4>Lineup</h4>
      <input class="inp inp__search" type="text" placeholder="Søg på festival...">
    </div>
    <ul>
      <li>
        <fr-artist-card-small></fr-artist-card-small>
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
  }
}
</script>

<style lang="scss" scoped>
.lineup-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>

