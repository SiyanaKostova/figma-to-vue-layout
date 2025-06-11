import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
