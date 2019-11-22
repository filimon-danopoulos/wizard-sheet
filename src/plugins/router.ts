import Vue from 'vue'

import BasePage from '@/pages/BasePage.vue'
import WizardPage from '@/pages/WizardPage.vue'
import VaultPage from '@/pages/VaultPage.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? 'wizard-sheet/' : '/',
  routes: [
    { name: 'Base', path: '/base', component: BasePage },
    { name: 'Wizard', path: '/wizard', component: WizardPage },
    { name: 'Vault', path: '/vault', component: VaultPage }
  ]
})
