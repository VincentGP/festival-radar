<template>
  <div>
    <fr-header-section
      :title="'festivals'"
      :bottom-text="'By following festivals we are able to find the most fitting music festivals for your needs'">
    </fr-header-section>
    <div class="container">
      <div class="container__main">
        <div class="container__main__content">
          <fr-festival-list :festivals="festivals"></fr-festival-list>
        </div>
        <div class="container__main__right">
          <div class="block">
            <div class="block__row">
              <fr-right-box></fr-right-box>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FestivalList from '../components/organisms/FestivalList';
import RightBox from '../components/molecules/RightBoxFestivals';
import HeaderSection from '../components/organisms/HeaderSection';

export default {
  components: {
    'fr-festival-list': FestivalList,
    'fr-header-section': HeaderSection,
    'fr-right-box': RightBox
  },
  data() {
    return {
      festivals: this.$store.state.festival.festivals
    };
  }
};
</script>
