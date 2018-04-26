<template>
  <section class="section">
    <fr-header-section 
      :title="'News'"
      :bottom-text="'Catch up with the latest news about awesome music festivals and talented artists.'">
    </fr-header-section>
    <div class="container">
      <div class="container__main">
        <fr-articles-list :articles="articles"></fr-articles-list>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderSection from '../components/organisms/HeaderSection';
import ArticlesList from '../components/organisms/ArticlesList';
export default {
  components: {
    'fr-header-section': HeaderSection,
    'fr-articles-list': ArticlesList
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  }
};
</script>
