<template>
  <section class="section">
    <section class="section__header">
      <div class="container">
        <time>{{ article.date | niceDate }}</time>  
        <h1>{{ article.title }}</h1>
        <span class="comment-count">{{ commentsCount }}</span>
        <hr>
        <div class="container__is-full">
          <p>{{ article.body | excerpt }}</p>
        </div>
      </div>
    </section>
    <section class="section__content">
      <div class="container">
        <img :src="imagePath">
        <hr>
        <p>{{ article.body }}</p>
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
  computed: {
    article() {
      // Find artikel baseret på slug i url
      let slug = this.$router.currentRoute.params.slug;
      return this.$store.state.articles.find(article => article.slug === slug);
    },
    imagePath() {
      return `${apiBaseUrl}/uploads/${this.article.image}`;
    },
    commentsCount() {
      return this.article.comments.length;
    }
  },
  filters: {
    niceDate(date) {
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
    excerpt(text) {
      return text.substring(0, 350) + '...';
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  .container {
    width: calc(100% - 300px);
  }
  hr {
    margin: 45px 0;
  }
  &__header {
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
