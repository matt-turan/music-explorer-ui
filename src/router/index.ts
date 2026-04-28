import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: () => import('../views/ArtistView.vue')
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import('../views/AlbumView.vue')
    }
  ]
})

export default router