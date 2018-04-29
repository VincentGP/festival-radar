<template>
  <div class="articles">
    <div class="article-card" v-for="article in articlesByDate" :key="article._id">
      <router-link :to="/articles/ + article.slug">
        <div class="article-card__image" :style="{ backgroundImage: 'url(' + imagePath(article.image) + ')' }"></div>
        <div class="article-card__main">
          <div class="article-card__main__top">
            <h4 class="title">{{ article.title }}</h4>
            <time class="date">{{ article.date | niceDate }}</time>
          </div>
          <div class="article-card__main__content">
            <p class="small">{{ article.body }}</p>
          </div>
          <div class="article-card__main__bottom">
            <hr>
            <p class="small comments">{{ article.comments.length }}</p>
            <fr-tag v-for="tag in article.tags" :key="tag" :text="tag"></fr-tag>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { apiBaseUrl } from '../../config/config';
import Tag from '../atoms/Tag';
export default {
  components: {
    'fr-tag': Tag
  },
  props: [
    'articles'
  ],
  methods: {
    imagePath(image) {
      return `${apiBaseUrl}/uploads/${image}`;
    }
  },
  computed: {
    articlesByDate() {
      return this.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/_import.scss';
.articles {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .article-card {
    width: 33%;
    margin: 10px;
    background-color: $color-lighter-grey;
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow .3s;
    &:hover {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.05);
    }
    &:nth-child(2) {
      flex-grow: 10;
    }
    &__image {
      height: 200px;
      background-size: cover;
      border-top-right-radius: 8px;  
      border-top-left-radius: 8px;
    }
    &__main {
      padding: 20px;
      &__top {
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 18px;
        }
        .date {
          font-size: 10px;
          &::before {
            content: url('../../assets/icons/watch.svg');
            padding: 0 5px 0 0;
            vertical-align: -45%;
          }
        }
      }
      &__content {
        margin: 10px 0;
        p {
          height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      &__bottom {
        hr {
          margin: 15px 0;
        }
        .comments {
          &::before {
            content: url('../../assets/icons/comment.svg');   
            padding: 0 5px 0 0;
            vertical-align: -10%;
          }
        }
      }
    }
  }
}

@include media($bp-mobile) {
  .articles {
    .article-card {
      width: 100%;
      &__main {
        &__top {
          flex-direction: column;
          align-items: center;
          .title {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
