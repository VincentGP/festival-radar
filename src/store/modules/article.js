import axios from 'axios';

const state = {
  articles: []
};

const mutations = {
  saveArticles(state, articleData) {
    state.articles = articleData;
  }
};

const actions = {
  getAllArticles({ commit }) {
    axios.get('/articles')
      .then((res) => {
        commit('saveArticles', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  createComment({ state, dispatch }, commentData) {
    axios.post(`/articles/${commentData.slug}/comment`, {
      comment: commentData.comment
    }, {
      headers: {
        'x-auth': state.authToken
      }
    })
      .then((res) => {
        dispatch('getAllArticles');
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export default {
  state,
  mutations,
  actions
};
