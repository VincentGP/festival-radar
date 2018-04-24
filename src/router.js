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
import Styleguide from './views/dev/Styleguide.vue';
import Dashboard from './views/Dashboard.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about us',
      component: About
    },
    {
      path: '/festival/:name',
      name: 'festival',
      component: Festival
    },
    {
      path: '/festivals',
      name: 'festivals',
      component: Festivals
    },
    {
      path: '/artists/:id',
      name: 'artist',
      component: Artist
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: Article
    },
    {
      path: '/articles',
      name: 'articles',
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
      path: '/dev/styleguide',
      name: 'styleguide',
      component: Styleguide
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
