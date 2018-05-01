<template>
  <div class="right-box">
    <h4>Followed artists</h4>
    <hr>
    <p class="small" v-if="!isAuthenticated">
      Please <router-link class="link" to="/login">login</router-link> or <router-link class="link" to="/signup">signup</router-link> to view your followed artists
    </p>
    <template v-else>
      <ul class="tag-list">
        <li>
          <fr-tag v-for="artist in followedArtists"
            :key="artist._id"
            :text="artist.name"
            :action-link="artist.slug">
          </fr-tag>
        </li>
      </ul>
      <hr>
      <div class="text">
        <p class="small">All followed artists can be managed in the profile <a class="link">dashboard</a></p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Tag from '../atoms/Tag.vue';

export default {
  components: {
    'fr-tag': Tag
  },
  props: [
    'type',
    'tags',
    'title',
    'btn-text'
  ],
  computed: {
    // Vi kan mappe de getters fra vores store som vi har brug for
    ...mapGetters([
      'isAuthenticated',
      'followedArtists'
    ])
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/colors.scss';

  .right-box {
    padding: 25px;
    background: #F7F8F9;
    border-radius: 8px;
    margin: 55px 0 0;

    .text {
      margin-top: 5px;
    }

    .tag-list {
      display: flex;
      margin-top: 10px;
    }
  }
</style>
