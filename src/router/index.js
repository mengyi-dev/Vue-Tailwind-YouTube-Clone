import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoViewer from '../views/VideoViewer.vue'
import ExploreView from '../views/ExploreView'
import ShortView from '../views/ShortView'
import SubscriptionView from '../views/SubscriptionView'
import LibraryView from '../views/LibraryView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explores',
    name: 'explores',
    component: ExploreView
  },
  {
    path: '/shorts',
    name: 'shorts',
    component: ShortView
  },
  {
    path: '/subscriptions',
    name: 'subscriptions',
    component: SubscriptionView
  },
  {
    path: '/library',
    name: 'library',
    component: LibraryView
  },
  {
    path: '/watch/:id',
    name: 'watch',
    component: VideoViewer,
    props: true,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
