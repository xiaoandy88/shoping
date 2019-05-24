import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import shoppingMallRouter from './shoppingmall'
import liveRouter from './live'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRouter,
    shoppingMallRouter,
    liveRouter,
    mineRouter
  ]
})
