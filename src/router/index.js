import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MainLayout from '@/layouts/MainLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const mainRoutes = {
  path: '/',
  component: MainLayout,
  children: [
    { path: '', component: HomeView },
    { path: 'about', component: () => import('../views/AboutView.vue') },
    { path: 'news-and-events', component: () => import('../views/NewsAndEventsView.vue') },
    { path: 'gallary', component: () => import('../views/GalleryView.vue') },
    { path: 'contact', component: () => import('../views/ContactView.vue') },
    { path: 'info-news-or-evets/:id', component: () => import('../views/NewsAndEventsInfoView.vue') },
  ]
}

const adminRoutes = {
  path: '/admin',
  component: AdminLayout,
  children: [
    { path: '', component: () => import('../views/Admin/HomeView.vue') },
  ]
}

export default createRouter({
  history: createWebHistory('/school-template/'),
  routes: [mainRoutes, adminRoutes]
})
