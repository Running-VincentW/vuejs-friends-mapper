import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FriendDetail from './views/FriendDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MapExplorer.vue')
    },
    {
      path: '/view/:id',
      name: 'frienddetails',
      component: FriendDetail,
      props: true,
    }
  ]
})
