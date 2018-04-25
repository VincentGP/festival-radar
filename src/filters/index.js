import Vue from 'vue';

Vue.filter('niceDate', (date) => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
});

Vue.filter('excerpt', (text) => text.substring(0, 350) + '...');
