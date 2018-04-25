<template>
  <div class="comments">
    <div class="comments__header">
      <hr>
      <div class="container container--narrow">
        <span>COMMENTS</span>
        <div class="tag">
          <label class="tag__text">{{ completeComments.length }}</label>
        </div>
      </div>
      <hr>
    </div>
    <div class="comments__main" v-if="completeComments.length !== 0">
      <div class="container container--narrow">
        <div class="comment" v-for="comment in completeComments" :key="comment._id">
          <fr-image-placeholder :type="'user'" :src="comment.image"></fr-image-placeholder>
          <p>{{ comment.firstName }}</p>
          <p>{{ comment.comment }}</p>
          <p>{{ comment.date | niceDate }}</p>
          <hr>
        </div>
      </div>
    </div>
    <div v-if="isAuthenticated">
      <label for="comment">Skriv kommentar</label>
      <textarea v-model="comment" name="comment" cols="30" rows="10"></textarea>
      <button @click="createComment()">Kommenter!</button>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../atoms/ImagePlaceholder';
import { completeComments } from '../../helpers';
export default {
  components: {
    'fr-image-placeholder': ImagePlaceholder
  },
  props: [
    'comments'
  ],
  data() {
    return {
      comment: '',
      users: []
    };
  },
  created() {
    this.getCommentInformation();
  },
  methods: {
    createComment() {
      this.$store.dispatch('createComment', {
        comment: this.comment,
        slug: this.slug
      });
    },
    getCommentInformation() {
      // Hvis der overhovedet er nogle kommentarer
      if (this.comments.length !== 0) {
        // Hent brugerne som har kommenteret på artiklen
        this.axios.get(`/articles/${this.slug}/users`)
          .then((res) => {
            this.users = res.data;
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    slug() {
      return this.$router.currentRoute.params.slug;
    },
    completeComments() {
      return completeComments(this.comments, this.users);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';
.comments {
  &__header {
    hr {
      margin: 15px 0;
      &:last-child {
        margin-bottom: 0px;
      }
    }
    span {
      font-size: 12px;
      font-weight: 700;
    }
    .tag {
      margin-left: 10px;
      &__text {
        font-size: 12px;
        color: $color-black;
      }
    }
  }
  &__main {
    background-color: $color-background;
    .comment {
      
    }
  }
}
</style>
