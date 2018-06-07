<template>
  <div>
    <fr-header-section
      :title="'Dashboard'"
      :bottom-text="'From here you can see all upcoming festivals, edit your nofication setting and personal info'"
      :action-type="'button'"
      :action-text="'Logout'"
      :action-name="'logout'">
    </fr-header-section>
    <div class="container">
      <div class="container__main">

      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';
import HeaderSection from '../components/organisms/HeaderSection';

export default {
  components: {
    'fr-header-section': HeaderSection
  },
  data() {
    return {
      user: this.$store.state.user
    };
  },
  created() {
    // Hvis bruger ikke er valid skal de smides til login siden
    let auth = this.$store.getters.isAuthenticated;
    if (!auth) {
      router.push({ path: '/login' });
    }
  },
  computed: {
    followedFestivals() {
      // Gem alle festivaler i variabel
      let festivals = this.$store.state.festival.festivals;
      // Returner festivaler hvor id matcher
      return festivals.filter((festival) => {
        return this.user.followedFestivals.indexOf(festival._id) !== -1;
      });
    }
  }
};
</script>
