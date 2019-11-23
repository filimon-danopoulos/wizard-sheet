<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$route.name || 'Wizard Sheet' }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in drawerItems">
          <v-list-item :key="i" link @click="handleListClick(item.id)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <NewWizardDialog
      :open="newWizardDialog"
      @close="toggleNewWizardDialog()"
      @new="wizard => this.createNewWizard(wizard)"
    />

    <v-content style="overflow: hidden;">
      <router-view @create="toggleNewWizardDialog()"></router-view>
    </v-content>

    <v-bottom-navigation v-if="$route.meta.navigation" app value shift grow color="primary">
      <v-btn :to="{ name: 'Base', params: { wizard: selectedWizard } }">
        <span>Base</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Warband', params: { wizard: selectedWizard } }">
        <span>Warband</span>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Vault', params: { wizard: selectedWizard } }">
        <span>Vault</span>
        <v-icon>mdi-piggy-bank</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '@/components/Navigation.vue'
import WizardComponent from '@/components/Wizard.vue'
import ApprenticeComponent from '@/components/Apprentice.vue'
import SoldierComponent from '@/components/Soldier.vue'
import NewWizardDialog from '@/dialogs/NewWizard.vue'
import Wizard from '@/model/wizards/Wizard'
import Thug from '@/model/soldiers/Thug'
import Character from '@/model/Character'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'

export default Vue.extend({
  name: 'App',

  components: {
    NewWizardDialog
  },
  data() {
    return {
      selectedWizard: null as null | Wizard,
      wizards: [] as Wizard[],
      drawer: false,
      newWizardDialog: false,
      hireDialog: false,
      wizardList: false,
      drawerItems: [
        { id: 1, icon: 'mdi-account-multiple', text: 'Change Wizard' },
        { id: 2, icon: 'mdi-account-multiple-plus', text: 'Create Wizard' }
      ]
    }
  },
  mounted() {
    this.goToWizardList()
  },
  watch: {
    selectedWizard: {
      deep: true,
      handler(val: Wizard | undefined) {
        if (typeof val !== 'undefined') {
          // eslint-disable-next-line no-console
          console.log(JSON.stringify(val.toJSON(), null, 2))
        }
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    handleListClick(id: number) {
      switch (id) {
        case 1:
          return this.goToWizardList()
        case 2:
          return this.toggleNewWizardDialog()
      }
    },
    goToWizardList() {
      this.$router.push({
        name: 'Wizards',
        params: {
          wizards: this.wizards as any
        }
      })
    },
    toggleNewWizardDialog() {
      this.newWizardDialog = !this.newWizardDialog
    },
    createNewWizard(wizard: Wizard) {
      this.toggleNewWizardDialog()
      this.wizards.push(wizard)
      this.selectedWizard = wizard
      this.$router.push({
        name: 'Warband',
        params: {
          wizard: wizard as any
        }
      })
    }
  }
})
</script>

<style lang="less">
body {
  overscroll-behavior: contain;
}
</style>
