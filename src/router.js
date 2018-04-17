import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Festival from './views/Festival.vue';
import Festivals from './views/Festivals.vue';
import Artist from './views/Artist.vue';
import Artists from './views/Artists.vue';
import Article from './views/Article.vue';
import Articles from './views/Articles.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Dashboard from './views/Dashboard.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hjem',
      component: Home
    },
    {
      path: '/om',
      name: 'om',
      component: About
    },
    {
      path: '/festival/:id',
      name: 'festival',
      component: Festival
    },
    {
      path: '/festivaler',
      name: 'festivaler',
      component: Festivals
    },
    {
      path: '/kunstner/:id',
      name: 'kunstner',
      component: Artist
    },
    {
      path: '/kunstnere',
      name: 'kunstnere',
      component: Artists
    },
    {
      path: '/artikel/:id',
      name: 'artikel',
      component: Article
    },
    {
      path: '/artikler',
      name: 'artikler',
      component: Articles
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
