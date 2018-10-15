import Vue from 'vue'
import Router from 'vue-router'
import AboutAppPage from '@/components/main/AboutAppPage.vue'
import MapsPage from '@/components/main/MapsPage.vue'
import PointsPage from '@/components/main/PointsPage.vue'
import IllustrationPage from '@/components/main/IllustrationPage.vue'
import AboutMembersPage from '@/components/main/AboutMembersPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AboutAppPage,
    },
    {
      path: '/maps',
      component: MapsPage,
    },
    {
      path: '/points',
      component: PointsPage,
    },
    {
      path: '/illustration',
      component: IllustrationPage,
    },
    {
      path: '/members',
      component: AboutMembersPage,
    },
  ]
})
