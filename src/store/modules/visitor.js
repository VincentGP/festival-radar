const state = {
  followedArtists: []
};

const mutations = {
  // Tilføjer element til besøgerens favoritter
  addToVisitorFavorites(state, elementData) {
    // Tilføj til besøgerens fulgte kunstnere
    return state.followedArtists.push(elementData.id);
  },
  removeFromVisitorFavorites(state, elementData) {
    // Fjern fra brugerens state
    let artistIndex = state.followedArtists.indexOf(elementData.id);
    return state.followedArtists.splice(artistIndex, 1);
  }
};

const actions = {
  toggleVisitor({commit, state}, elementData) {
    const id = elementData.id;
    // Check if visitor already follows artist
    let artist = state.followedArtists.find(artistId => artistId === id);
    if (artist) {
      commit('removeFromVisitorFavorites', { id });
    } else {
      commit('addToVisitorFavorites', { id });
    }
  }
};

export default {
  state,
  mutations,
  actions
};
