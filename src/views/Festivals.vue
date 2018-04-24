<template>
  <div>
    <div class="section">
      <fr-header-section :title="'Festivaller'" :btn-text="''" :btn-link="''">
        By following festivals we are able to find the most fitting music festivals for your needs
      </fr-header-section>
    </div>
    <div class="container">
      <div class="container__main">
        <div class="container__main__content">
          <fr-festival-list :festivals="festivals"></fr-festival-list>
        </div>
        <div class="container__main__right">
          <fr-right-box></fr-right-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FestivalList from '../components/organisms/FestivalList.vue';
import RightBox from '../components/molecules/RightBox.vue';
import HeaderSection from '../components/organisms/HeaderSection';

export default {
  components: {
    'fr-festival-list': FestivalList,
    'fr-header-section': HeaderSection,
    'fr-right-box': RightBox
  },
  data() {
    return {
      festivals: this.$store.state.festivals
    };
  }
};
</script>
