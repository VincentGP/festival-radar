<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article._id">
        <router-link :to="/articles/ + article.slug">{{ article.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  }
};
</script>
