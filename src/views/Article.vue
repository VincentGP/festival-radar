<template>
  <section class="section">
    <section class="section__header">
      <div class="container container--narrow">
        <time>{{ article.date | niceDate }}</time>
        <h1>{{ article.title }}</h1>
        <span class="comment-count">{{ article.comments.length }}</span>
        <hr>
        <div class="container__is-full">
          <p>{{ article.body | excerpt }}</p>
        </div>
      </div>
    </section>
    <section class="section__content">
      <div class="container container--narrow">
        <img :src="imagePath">
        <hr>
        <p class="small">{{ article.body }}</p>
      </div>
    </section>
    <fr-comments :comments="article.comments"></fr-comments>
  </section>
</template>

<script>
import { apiBaseUrl } from '../config/config';
import Comments from '../components/organisms/Comments';
export default {
  components: {
    'fr-comments': Comments
  },
  created() {
    // Hent commenters
    this.$store.dispatch('getCommenters', this.article.slug);
  },
  computed: {
    article() {
      // Find artikel baseret på slug i url
      let slug = this.$router.currentRoute.params.slug;
      return this.$store.state.article.articles.find(article => article.slug === slug);
    },
    imagePath() {
      return `${apiBaseUrl}/uploads/${this.article.image}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  hr {
    margin: 45px 0;
  }
  &__header {
    margin-top: -70px;
    background-image: radial-gradient(69% 244%, #EDE7D1 25%, #93B6B7 100%);
    padding-top: 170px;
    padding-bottom: 100px;
    text-align: center;
    h1 {
      margin-top: 15px;
    }
    .comment-count {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      &::before {
        content: url('../assets/icons/comment.svg');
        width: 12px;
        height: 12px;
        margin-right: 10px;
      }
    }
  }
  &__content {
    .container {
      margin-bottom: 30px;
    }
    img {
      display: block;
      width: 70%;
      margin: 0 auto;
      margin-top: -30px;
      border-radius: 8px;
    }
    p {
      text-align: center;
    }
  }
}
</style>
