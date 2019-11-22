<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ this.$route.name || 'Wizard Sheet' }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom v-if="selectedWizard">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="option in wizardOptions"
            :key="option.id"
            @click="handleOptionClick(option.id)"
            style="min-width: 200px"
          >
            <v-list-item-title>{{ option.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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

    <HireDialog
      v-if="selectedWizard && hireDialog"
      :open="hireDialog"
      :wizard="selectedWizard"
      @close="toggleHireDialog()"
      @hire="mercenary => this.hireMercenary(mercenary)"
    />

    <v-content>
      <template v-if="selectedWizard !== null">
        <WizardComponent v-if="selectedWizard !== null" :wizard="selectedWizard" />
        <ApprenticeComponent
          v-if="selectedWizard.apprentice"
          :apprentice="selectedWizard.apprentice"
          @dismissed="dismissMercenary(selectedWizard.apprentice)"
        />
        <SoldierComponent
          v-for="(soldier, i) in selectedWizard.soldiers"
          :key="i"
          :soldier="soldier"
          @dismissed="dismissMercenary(soldier)"
        />
      </template>
      <v-row v-else grow justify="center" align="center" style="min-height: 84px;">
        <router-view></router-view>
        <v-btn color="primary" @click="toggleNewWizardDialog()">Create Wizard</v-btn>
      </v-row>
    </v-content>
    <v-bottom-navigation :value="true" shift grow color="primary">
      <v-btn to="/base">
        <span>Base</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn to="/wizard">
        <span>Wizard</span>
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
import WizardComponent from './components/Wizard.vue'
import ApprenticeComponent from './components/Apprentice.vue'
import SoldierComponent from './components/Soldier.vue'
import NewWizardDialog from './components/dialogs/NewWizard.vue'
import HireDialog from './components/dialogs/Hire.vue'
import Wizard from './model/wizards/Wizard'
import Thug from './model/soldiers/Thug'
import Character from './model/Character'
import Soldier from './model/soldiers/Soldier'
import Apprentice from './model/wizards/Apprentice'

export default Vue.extend({
  name: 'App',

  components: {
    WizardComponent,
    NewWizardDialog,
    SoldierComponent,
    ApprenticeComponent,
    HireDialog
  },
  provide(): { wizards: Wizard[] } {
    return {
      wizards: this.wizards
    }
  },
  computed: {
    wizardOptions(): { id: number; text: string }[] {
      const options = [
        {
          id: 1,
          text: 'Hire'
        }
      ]
      return options.slice(this.selectedWizard === null || this.selectedWizard.gold <= 0 ? 1 : 0)
    }
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
    handleOptionClick(id: number) {
      switch (id) {
        case 1:
          return this.toggleHireDialog()
      }
    },
    toggleWizardList() {
      this.wizardList = !this.wizardList
    },
    toggleHireDialog() {
      this.hireDialog = !this.hireDialog
    },
    toggleNewWizardDialog() {
      this.newWizardDialog = !this.newWizardDialog
    },
    createNewWizard(wizard: Wizard) {
      this.toggleNewWizardDialog()
      this.wizards.push(wizard)
      this.selectedWizard = wizard
    },
    hireMercenary(mercenary: Soldier | Apprentice) {
      this.toggleHireDialog()
      this.selectedWizard!.hire(mercenary)
    },
    dismissMercenary(mercenary: Soldier | Apprentice) {
      this.selectedWizard!.dismiss(mercenary)
      this.$forceUpdate()
    }
  }
})
</script>

<style lang="less">
body {
  overscroll-behavior: contain;
}
</style>
