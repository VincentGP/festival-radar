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
          <div class="comment__image">
            <fr-image-placeholder :type="'user'" :src="comment.image"></fr-image-placeholder>
          </div>
          <div class="comment__content">
            <div class="comment__content__top">
              <p class="small">{{ comment.firstName }}</p>
              <p class="small">{{ comment.date | daysAgo }}</p>
            </div>
            <p>{{ comment.comment }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isAuthenticated" class="comments__footer">
      <div class="container container--narrow">
        <div class="field">
          <div class="field__image">
            <fr-image-placeholder :type="'user'" :src="profileImagePath"></fr-image-placeholder>        
          </div>
          <div class="field__content">
            <p class="small">{{ user.firstName }}</p>
            <textarea v-model="comment" name="comment" cols="20" rows="5" placeholder="Your comment"></textarea>
            <fr-button class="btn--gray" @click.native="createComment()">
              Send
            </fr-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePlaceholder from '../atoms/ImagePlaceholder';
import { apiBaseUrl } from '../../config/config';
import Button from '../atoms/Button.vue';
export default {
  components: {
    'fr-image-placeholder': ImagePlaceholder,
    'fr-button': Button    
  },
  props: [
    'comments'
  ],
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    createComment() {
      this.$store.dispatch('createComment', {
        comment: this.comment,
        slug: this.slug
      });
      // Tøm comment
      this.comment = '';
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    slug() {
      return this.$router.currentRoute.params.slug;
    },
    user() {
      return this.$store.state.user;
    },
    profileImagePath() {
      return `${apiBaseUrl}/uploads/${this.user.imagePath}`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';
.comments {
  .small {
    text-transform: uppercase;
  }
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
      display: flex;
      padding: 30px 0;
      border-bottom: 1px solid $color-lightish-grey;
      &__image {
        margin-right: 20px;
      }
      &__content {
        width: 100%;
        &__top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
      }
    }
  }
  &__footer {
    display: flex;
    padding: 50px 0;
    background-color: $color-background;
    .field {
      display: flex;
      &__image {
        margin-right: 20px;
      }
      &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        textarea {
          margin: 20px 0;
        }
        .btn {
          align-self: flex-end;
          width: 80px;
        }
      }
    }
  }
}
</style>