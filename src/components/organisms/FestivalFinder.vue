<template>
  <div>
    <p>Klik på kunstner for at vælge kunstnere du er interesseret i</p>
    <div v-for="artist in artists" :key="artist._id">
      <p @click="toggleArtist(artist._id)" :class="{'active': selectedArtist(artist._id)}">
        {{ artist.name }}
      </p>
    </div>
    <hr>
    <p>Festivaler hvor din dine valgte kunstnere spiller:</p>
    <div v-for="festival in festivalMatches" :key="festival._id">
      <p>{{ festival.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedArtists: []
    };
  },
  methods: {
    toggleArtist(id) {
      if (this.selectedArtists.includes(id)) {
        const index = this.selectedArtists.indexOf(id);
        // Fjern fra array
        return this.selectedArtists.splice(index, 1);
      }
      // Tilføj til array
      this.selectedArtists.push(id);
    },
    selectedArtist(id) {
      return this.selectedArtists.includes(id);
    }
  },
  computed: {
    festivals() {
      return this.$store.state.festival.festivals;
    },
    artists() {
      return this.$store.state.artist.artists;
    },
    festivalMatches() {
      const matches = [];
      // Loop igennem festivaler
      this.festivals.forEach(festival => {
        festival.artists.filter(artist => {
          // Hvis der er et match!
          if (this.selectedArtists.includes(artist)) {
            // Hvis festival ikke allerede er i matches
            if (!matches.includes(festival)) {
              matches.push(festival);
            }
          }
        });
      });
      return matches;
    }
  }
};
</script>

<style lang="scss">
.active {
  color: green;
}
</style>
