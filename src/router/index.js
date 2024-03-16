import { createRouter, createWebHistory  } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PokemonDetailView from '@/views/PokemonDetailView/PokemonDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/pokemon/:pokemonName',
      name: 'Pokemon Detail',
      component: PokemonDetailView,
      children: [
        {
          path: 'abilities',
          name: 'Pokemon Abilities',
          component: () => import('@/views/PokemonDetailView/PokemonAbilitiesView.vue')
        },
        {
          path: 'base-stats',
          name: 'Pokemon Base Stats',
          component: () => import('@/views/PokemonDetailView/PokemonBaseStatsView.vue')
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue')
    }
  ]
})

export default router