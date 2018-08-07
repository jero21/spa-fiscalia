import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Causas/Causas'
import CausasForm from '@/components/Causas/Form'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: 'crear',
      component: CausasForm
    }
  ]
})

export default router
