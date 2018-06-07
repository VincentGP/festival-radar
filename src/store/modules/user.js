const getters = {
  followedFestivals(state, getters, rootState) {
    if (!getters.isAuthenticated) {
      return false;
    }
    // Brugerens fulgte festivaler
    let followedFestivals = [];
    // Alle festivaler
    const festivals = rootState.festival.festivals;
    // Loop igennem alle festivaler
    festivals.forEach(festival => {
      // Loop igennem brugerens festivaler
      rootState.user.followedFestivals.forEach(id => {
        if (festival._id === id) {
          followedFestivals.push(festival);
        }
      });
    });
    return followedFestivals;
  },
  followedArtists(state, getters, rootState) {
    if (!getters.isAuthenticated) {
      return false;
    }
    // Brugerens fulgte kunstnere
    let followedArtists = [];
    // Alle kunstnere
    const artists = rootState.artist.artists;
    // Loop igennem alle kunstnere
    artists.forEach(artist => {
      // Loop igennem brugerens kunstnere
      rootState.user.followedArtists.forEach(id => {
        if (artist._id === id) {
          followedArtists.push(artist);
        }
      });
    });
    return followedArtists;
  }
};

export default {
  getters
};
