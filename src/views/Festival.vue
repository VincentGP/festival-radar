<template>
  <section class="section">
    <fr-header-section
      :type="'festival'"
      :title="currentFestival.name"
      :imgSrc="imagePath"
      :description="currentFestival.description"
      :bottom-text="'24,868 fans tracking alerts for this festival.'"
      :action-type="'toggle'"
      :action-text="isFollowed ? 'Unfollow' : 'Follow'"
      :action-id="currentFestival._id"
      :action-link="''">
    </fr-header-section>
    <div class="container">
      <div class="container__main">
        <div class="container__main__content">
          <fr-lineup-list :festival="currentFestival"></fr-lineup-list>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { apiBaseUrl } from '../config/config';
import HeaderSection from '../components/organisms/HeaderSection';
import LineupList from '../components/organisms/LineupList';

export default {
  components: {
    'fr-header-section': HeaderSection,
    'fr-lineup-list': LineupList
  },
  computed: {
    currentFestival() {
      // Find navn baseret på url
      let name = this.$router.currentRoute.params.slug;
      return this.$store.state.festival.festivals.find(festival => festival.slug === name);
    },
    isFollowed() {
      return this.$store.getters.isFollowed(this.currentFestival._id, 'festival');
    },
    imagePath() {
      return `${apiBaseUrl}/uploads/festivals/${this.currentFestival.poster}`;
    }
  }
};
</script>
