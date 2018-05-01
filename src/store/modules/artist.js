import axios from 'axios';

const state = {
  artists: []
};

const mutations = {
  saveArtists(state, artistData) {
    state.artists = artistData;
  }
};

const actions = {
  getAllArtists({ commit }) {
    axios.get('/artists')
      .then((res) => {
        // Aktivér vores mutation og send data med
        commit('saveArtists', res.data);
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
