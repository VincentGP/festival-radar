<template>
  <section class="section">
    <fr-header-section :title="currentFestival.name" :btn-text="'Signup'" :btn-link="'/signup'">
      {{ currentFestival.description }}
    </fr-header-section>
  </section>
</template>

<script>
import HeaderSection from '../components/organisms/HeaderSection';
export default {
  props: [
    'festival'
  ],
  components: {
    'fr-header-section': HeaderSection
  },
  computed: {
    currentFestival() {
      // Find navn baseret på url
      let name = this.$router.currentRoute.params.slug;
      return this.$store.state.festivals.find(festival => festival.slug === name);
    }
  }
};
</script>
