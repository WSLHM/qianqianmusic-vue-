import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/containers/Home'
import Mine from '@/containers/Mine'
import Search from '@/containers/Search'
import Singer from '@/containers/Singer'
import SongList from '@/containers/SongList'
import Top from '@/containers/Top'
import Play from '@/containers/Play'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/list',
      name: 'SongList',
      component: SongList
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/play/:id',
      name: 'Play',
      component: Play
    }
  ]
})
