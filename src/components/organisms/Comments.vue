<template>
  <div class="comments">
    <div class="comments__header">
      <hr>
      <div class="container container--narrow">
        <span>COMMENTS</span>
        <div class="tag">
          <label class="tag__text">{{ comments.length }}</label>
        </div>
      </div>
      <hr>
    </div>
    <div class="comments__main" v-if="comments.length !== 0">
      <div class="container container--narrow">
        <div class="comment" v-for="comment in comments" :key="comment._id">
          <p>{{ comment.creator }}</p>
          <p>{{ comment.comment }}</p>
          <p>{{ comment.date | niceDate }}</p>
          <hr>
        </div>
        <div v-if="isAuthenticated">
          <label for="comment">Skriv kommentar</label>
          <textarea v-model="comment" name="comment" cols="30" rows="10"></textarea>
          <button @click="createComment()">Kommenter!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'comments'
  ],
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    createComment() {
      this.$store.dispatch('createComment', {
        comment: this.comment,
        slug: this.slug
      });
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    slug() {
      return this.$router.currentRoute.params.slug;
    }
  },
  filters: {
    niceDate(date) {
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
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
      cursor: none;
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
