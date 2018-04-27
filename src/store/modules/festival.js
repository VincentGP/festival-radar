import axios from 'axios';

const state = {
  festivals: []
};

const mutations = {
  saveFestivals(state, festivalData) {
    state.festivals = festivalData;
  }
};

const actions = {
  getAllFestivals({ commit }) {
    axios.get('/festivals')
      .then((res) => {
        // Aktivér vores mutation og send data med
        commit('saveFestivals', res.data);
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
