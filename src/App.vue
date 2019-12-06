<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$route.name || 'Wizard Sheet' }}</v-toolbar-title>
      <div v-if="selectedWarband" class="d-flex flex-grow-1 justify-end pl-4">
        <v-icon class="mr-1" color="amber darken-2">mdi-coins</v-icon>
        <span class="subheading font-weight-bold  amber--text text--darken-2">{{
          selectedWarband.gold
        }}</span>
      </div>
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

    <CreateWizardDialog
      v-if="newWizardDialog"
      :open="newWizardDialog"
      @close="toggleNewWizardDialog()"
      @created="wizard => this.createNewWizard(wizard)"
    />

    <v-content style="overflow: hidden;">
      <keep-alive>
        <router-view @create="toggleNewWizardDialog()"></router-view>
      </keep-alive>
    </v-content>

    <v-bottom-navigation v-if="$route.meta.navigation" app value shift grow color="primary">
      <v-btn
        :ripple="false"
        :to="{ name: 'Base', params: { id: $route.params.id, warband: selectedWarband } }"
      >
        <span>Base</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn
        :ripple="false"
        :to="{ name: 'Warband', params: { id: $route.params.id, warband: selectedWarband } }"
      >
        <span>Warband</span>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>

      <v-btn
        :ripple="false"
        :to="{ name: 'Vault', params: { id: $route.params.id, warband: selectedWarband } }"
      >
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
import CreateWizardDialog from '@/dialogs/CreateWizard.vue'
import Wizard from '@/model/wizards/Wizard'
import Thug from '@/model/soldiers/Thug'
import Character from '@/model/Character'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'
import Decay from './model/magic/chronomancy/Decay'
import TimeWalk from './model/magic/chronomancy/TimeWalk'
import ElementalBall from './model/magic/elementalism/ElementalBall'
import Slow from './model/magic/chronomancy/Slow'
import BoneDart from './model/magic/necromancy/BoneDart'
import EnchantWeapon from './model/magic/enchanting/EnchantWeapon'
import CreateGrimoire from './model/magic/sigilism/CreateGrimoire'
import RevealSecret from './model/magic/soothsaying/RevealSecret'
import * as serializer from '@/serializer'
import Warband from './model/Warband'

export default Vue.extend({
  components: {
    CreateWizardDialog
  },
  data() {
    return {
      selectedWarband: null as null | Warband,
      warbands: [] as Warband[],
      drawer: false,
      newWizardDialog: false,
      hireDialog: false,
      wizardList: false,
      drawerItems: [
        { id: 1, icon: 'mdi-account-multiple', text: 'Change Wizard' },
        { id: 2, icon: 'mdi-account-multiple-plus', text: 'Create Wizard' },
        { id: 3, icon: 'mdi-book-open-variant', text: 'Spellbook' },
        { id: 4, icon: 'mdi-paw', text: 'Beastiary' }
      ]
    }
  },
  created() {
    const storedWarbands = window.localStorage.getItem('warbands')
    const warbandRecords = storedWarbands
      ? (JSON.parse(storedWarbands) as serializer.IWarbandRecord[])
      : []
    this.warbands = warbandRecords.map(record => serializer.deserialize(record))
  },
  mounted() {
    this.goToWizardList()
  },
  watch: {
    $route(to, from) {
      if (to.params.warband !== from.params.warband) {
        this.selectedWarband = to.params.warband
      }
    },
    selectedWarband: {
      deep: true,
      handler(val: Warband | undefined) {
        if (typeof val !== 'undefined') {
          const storedWarbands = window.localStorage.getItem('warbands')
          const warbands = storedWarbands ? (JSON.parse(storedWarbands) as any[]) : []
          if (warbands[+this.$route.params.id]) {
            warbands.splice(+this.$route.params.id, 1, serializer.serialize(val))
          } else {
            warbands.push(serializer.serialize(val))
          }
          window.localStorage.setItem('warbands', JSON.stringify(warbands))
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
        case 3:
          return this.goToSpellbook()
        case 4:
          return this.goToBeastiary()
      }
    },
    goToWizardList() {
      this.$router.push({
        name: 'Wizards',
        params: {
          warbands: this.warbands as any
        }
      })
    },
    goToBeastiary() {
      this.$router.push({
        name: 'Beastiary'
      })
    },
    goToSpellbook() {
      this.$router.push({
        name: 'Spellbook'
      })
    },
    toggleNewWizardDialog() {
      this.newWizardDialog = !this.newWizardDialog
    },
    createNewWizard(wizard: Wizard) {
      this.toggleNewWizardDialog()
      const warband = new Warband(wizard)
      this.warbands.push(warband)
      this.$router.push({
        name: 'Warband',
        params: {
          id: (this.warbands.length - 1).toString(),
          warband: warband as any
        }
      })
    }
  }
})
</script>

<style lang="less">
html {
  overscroll-behavior: contain;
}
</style>
