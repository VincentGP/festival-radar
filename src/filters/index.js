// Eksterne imports
import Vue from 'vue';
import { store } from '../store/store';

// Vis flot dato
Vue.filter('niceDate', (date) => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
});

// Vis de første 350 karaktere
Vue.filter('excerpt', (text) => text.substring(0, 350) + '...');

Vue.filter('shortExcerpt', (text) => text.substring(0, 50) + '...');

Vue.filter('daysAgo', (date) => {
  let oneDay = 24 * 60 * 60 * 1000;
  let today = new Date();
  let result = Math.round(Math.abs((new Date(date).getTime() - today.getTime()) / (oneDay)));
  if (result !== 0) {
    return `${result} days ago`;
  } else {
    return 'Just now';
  }
});

Vue.filter('artistIdToName', (id) => {
  let artistName = '';
  store.state.artist.artists.forEach(artist => {
    if (artist._id === id) {
      artistName = artist.name;
    }
  });
  return artistName;
});
