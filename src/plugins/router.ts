import Vue from 'vue'

import Wizards from '@/pages/Wizards.vue'
import Base from '@/pages/Base.vue'
import Warband from '@/pages/Warband.vue'
import Vault from '@/pages/Vault.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'abstract',
  base: process.env.NODE_ENV === 'production' ? 'wizard-sheet/' : '/',
  routes: [
    {
      name: 'Wizards',
      path: '',
      component: Wizards,
      props: true
    },
    {
      name: 'Base',
      path: '/base',
      component: Base,
      props: true,
      meta: {
        navigation: true
      }
    },
    {
      name: 'Warband',
      path: '/warband',
      component: Warband,
      props: true,
      meta: {
        navigation: true
      }
    },
    {
      name: 'Vault',
      path: '/vault',
      component: Vault,
      props: true,
      meta: {
        navigation: true
      }
    }
  ]
})
