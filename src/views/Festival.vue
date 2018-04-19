<template>
  <div>
    {{ currentFestival.name }}
  </div>
</template>

<script>
export default {
  computed: {
    currentFestival() {
      // Find navn baseret på url
      let name = this.$router.currentRoute.params.name;      
      return this.$store.state.festivals.find(festival => festival.slug === name);
    }
  }
}
</script>
