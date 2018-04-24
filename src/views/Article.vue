<template>
  <div class="container">
    <p>{{ article.date | niceDate }}</p>
    <h1>{{ article.title }}</h1>
    <p>{{ commentsCount }} kommentar(er)</p>
    <hr>
    <p>{{ article.body | excerpt }}</p>
    <img :src="imagePath">
    <hr>
    <p>{{ article.body }}</p>
    <hr>
    <p><strong>{{ commentsCount }} kommentar(er)</strong></p>
    <hr>
    <div v-if="commentsCount !== 0">
      <div class="comment" v-for="comment in article.comments" :key="comment._id">
        <p>{{ comment.creator }}</p>
        <p>{{ comment.comment }}</p>
        <p>{{ comment.date | niceDate }}</p>
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
import { apiBaseUrl } from '../config/config';
export default {
  data() {
    return {
      comment: ''
    }
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
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
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
  },
  methods: {
    createComment() {
      this.$store.dispatch('createComment', {
        comment: this.comment,
        slug: this.article.slug,
        _id: this.article._id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
p {
  text-align: center;
}
img {
  display: block;
  margin: 30px auto;
  width: 40%;
}
</style>
