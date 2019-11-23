<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$route.name || 'Wizard Sheet' }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
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

    <v-content>
      <transition name="fade" mode="out-in">
        <router-view v-if="selectedWizard" :wizard="selectedWizard"></router-view>
      </transition>
    </v-content>
    <v-bottom-navigation v-if="selectedWizard" :value="true" shift grow color="primary">
      <v-btn to="/base">
        <span>Base</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn to="/warband">
        <span>Warband</span>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>

      <v-btn to="/vault">
        <span>Vault</span>
        <v-icon>mdi-piggy-bank</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
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
  provide(): { wizards: Wizard[] } {
    return {
      wizards: this.wizards
    }
  },
  data() {
    return {
      selectedWizard: null as null | Wizard,
      wizards: [] as Wizard[],
      drawer: false,
      newWizardDialog: true,
      hireDialog: false,
      wizardList: false,
      drawerItems: [
        { id: 1, icon: 'mdi-account-multiple', text: 'Change Wizard' },
        { id: 2, icon: 'mdi-account-multiple-plus', text: 'Create Wizard' }
      ]
    }
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
          return this.toggleWizardList()
        case 2:
          return this.toggleNewWizardDialog()
      }
    },
    toggleWizardList() {
      this.wizardList = !this.wizardList
    },
    toggleNewWizardDialog() {
      this.newWizardDialog = !this.newWizardDialog
    },
    createNewWizard(wizard: Wizard) {
      this.toggleNewWizardDialog()
      this.wizards.push(wizard)
      this.selectedWizard = wizard
      if (this.$route.path !== '/warband') {
        this.$router.push('/warband')
      }
    }
  }
})
</script>

<style lang="less">
body {
  overscroll-behavior: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: linear;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
