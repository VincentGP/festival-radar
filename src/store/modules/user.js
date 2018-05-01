const getters = {
  followedFestivals(state, getters, rootState) {
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
  }
};

export default {
  getters
};
