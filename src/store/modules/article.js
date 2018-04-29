import axios from 'axios';

const state = {
  articles: [],
  commenters: []
};

const getters = {
  showCommenters(state) {
    return state.commenters;
  }
};

const mutations = {
  saveArticles(state, articleData) {
    state.articles = articleData;
  },
  addComment(state, commentData) {
    // Find frem til index baseret på slug
    let index = state.articles.findIndex((article) => article.slug === commentData.slug);
    state.articles[index].comments.push(commentData.comment);
  },
  saveCommenters(state, commentersData) {
    state.commenters = commentersData;
  }
};

const actions = {
  getAllArticles({ commit }) {
    axios.get('/articles')
      .then((res) => {
        commit('saveArticles', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  createComment({ rootState, commit }, commentData) {
    axios.post(`/articles/${commentData.slug}/comment`, {
      comment: commentData.comment
    }, {
      headers: {
        'x-auth': rootState.authToken
      }
    })
      .then((res) => {
        // Gem nyeste kommentar i variabel
        let comment = res.data[res.data.length - 1];
        // Send kommentar og slug med for at tilføje til vores array i storen
        commit('addComment', { comment, slug: commentData.slug });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getCommenters({ commit }, slug) {
    axios.get(`/articles/${slug}/users`)
      .then((res) => {
        commit('saveCommenters', res.data);
      }).catch((err) => {
        console.error(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
