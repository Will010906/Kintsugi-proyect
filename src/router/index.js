import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/donaciones',
    name: 'Donaciones',
    component: () => import('../views/DonationsView.vue')
  },
  {
  path: '/donaciones/tarjeta',
  name: 'DonacionTarjeta',
  component: () => import('../views/DonationFormView.vue')
},
{
  path: '/donaciones/deposito',
  name: 'DonacionDeposito',
  component: () => import('../views/DonationDepositView.vue')
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router