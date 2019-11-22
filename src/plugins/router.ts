import Vue from 'vue'

import Base from '@/pages/Base.vue'
import Warband from '@/pages/Warband.vue'
import Vault from '@/pages/Vault.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? 'wizard-sheet/' : '/',
  routes: [
    { name: 'Base', path: '/base', component: Base },
    { name: 'Warband', path: '/warband', component: Warband },
    { name: 'Vault', path: '/vault', component: Vault }
  ]
})
