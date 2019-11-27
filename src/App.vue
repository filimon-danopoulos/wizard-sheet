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
      <transition :name="transition">
        <router-view @create="toggleNewWizardDialog()"></router-view>
      </transition>
    </v-content>

    <v-bottom-navigation v-if="$route.meta.navigation" app value shift grow color="primary">
      <v-btn :to="{ name: 'Base', params: { id: $route.params.id, wizard: selectedWizard } }">
        <span>Base</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Warband', params: { id: $route.params.id, wizard: selectedWizard } }">
        <span>Warband</span>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Vault', params: { id: $route.params.id, wizard: selectedWizard } }">
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
import Decay from './model/magic/chronomancy/Decay'
import TimeWalk from './model/magic/chronomancy/TimeWalk'
import ElementalBall from './model/magic/elementalism/ElementalBall'
import Slow from './model/magic/chronomancy/Slow'
import BoneDart from './model/magic/necromancy/BoneDart'
import EnchantWeapon from './model/magic/enchanting/EnchantWeapon'
import CreateGrimoire from './model/magic/sigilism/CreateGrimoire'
import RevealSecret from './model/magic/soothsaying/RevealSecret'
import * as serializer from '@/serializer'

export default Vue.extend({
  components: {
    NewWizardDialog
  },
  data() {
    return {
      transitioning: false,
      transition: 'slide-right',
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
  created() {
    const storedWizards = window.localStorage.getItem('wizards')
    const wizardRecords = storedWizards
      ? (JSON.parse(storedWizards) as serializer.IWizardRecord[])
      : []
    this.wizards = wizardRecords.map(record => serializer.deserialize(record))
  },
  mounted() {
    this.goToWizardList()
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Base' || from.name === 'Vault') {
        this.transition = 'slide-left'
      } else if (to.name === 'Vault' || from.name === 'Base') {
        this.transition = 'slide-right'
      }
      if (to.params.wizard !== from.params.wizard) {
        this.selectedWizard = to.params.wizard
      }
    },
    selectedWizard: {
      deep: true,
      handler(val: Wizard | undefined) {
        if (typeof val !== 'undefined') {
          const storedWizards = window.localStorage.getItem('wizards')
          const wizards = storedWizards ? (JSON.parse(storedWizards) as any[]) : []
          if (wizards[+this.$route.params.id]) {
            wizards.splice(+this.$route.params.id, 1, serializer.serialize(val))
          } else {
            wizards.push(serializer.serialize(val))
          }
          window.localStorage.setItem('wizards', JSON.stringify(wizards))
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
      wizard.learnSpell(new Decay())
      wizard.learnSpell(new Slow())
      wizard.learnSpell(new TimeWalk())
      wizard.learnSpell(new RevealSecret())
      wizard.learnSpell(new ElementalBall())
      wizard.learnSpell(new BoneDart())
      wizard.learnSpell(new EnchantWeapon())
      wizard.learnSpell(new CreateGrimoire())
      this.toggleNewWizardDialog()
      this.wizards.push(wizard)
      this.$router.push({
        name: 'Warband',
        params: {
          id: (this.wizards.length - 1).toString(),
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

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  position: absolute;
  width: 100%;
  height: calc(100% + 56px);
  transition-duration: 0.2s;
  transition-property: transform;
  transition-timing-function: linear;
}

.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(-100%);
}
.slide-left-leave-to,
.slide-right-enter {
  transform: translateX(100%);
}
</style>
