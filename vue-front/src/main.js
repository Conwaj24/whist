import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Mode from './Mode.vue'
import Join from './Join.vue'
import User from './User.vue'
import Lobby from './Lobby.vue'
import Game from './Game.vue'
import MButton from 'vue-m-button'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(MButton);


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mode',
    component: Mode
  },
  {
    path: '/join',
    component: Join
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/lobby',
    component: Lobby
  },
  {
    path: '/game',
    component: Game
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});