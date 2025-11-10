import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import NewsAndEventsView from '@/views/NewsAndEventsView.vue'
import NewsAndEventsInfoView from '@/views/NewsAndEventsInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gallary',
      name: 'gallary',
      component: GalleryView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/news-and-events',
      name: 'news-and-events',
      component: NewsAndEventsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/info-news-or-evets/:id',
      name: 'info-news-and-events',
      component: NewsAndEventsInfoView,
    }
  ],
})

export default router
