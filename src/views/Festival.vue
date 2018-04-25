<template>
  <section class="section">
    <fr-header-section 
      :type="'festival'" 
      :title="currentFestival.name"
      :description="currentFestival.description"
      :bottom-text="'24,868 fans tracking alerts for this festival.'"
      :action-type="'toggle'"
      :action-text="'Follow'"
      :action-link="''">
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
