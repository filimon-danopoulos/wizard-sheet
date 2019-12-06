<template funtional>
  <div style="padding-bottom: 72px;">
    <CharacterComponent :character="wizard" />
    <CharacterComponent
      v-if="wizard.apprentice"
      :character="wizard.apprentice"
      @dismissed="dismissMercenary(wizard.apprentice)"
    />
    <CharacterComponent
      v-for="(soldier, i) in wizard.soldiers"
      :key="i"
      :character="soldier"
      @dismissed="dismissMercenary(soldier)"
    />
    <v-fab-transition>
      <v-btn
        @click="toggleHireDialog()"
        color="primary"
        v-if="wizard.gold > 0 && warbandCount < 10"
        dark
        fixed
        bottom
        right
        fab
        mode=""
        style="bottom: 64px;"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <HireDialog
      v-if="hireDialog"
      :open="hireDialog"
      :wizard="wizard"
      @close="toggleHireDialog()"
      @hire="mercenary => this.hireMercenary(mercenary)"
    />
    <ConfirmDialog
      :open="showConfimDialog"
      @yes="handleConfirmation(true)"
      @no="handleConfirmation(false)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Wizard from '../model/wizards/Wizard'
import { PropValidator } from 'vue/types/options'

import CharacterComponent from '@/components/Character.vue'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'
import HireDialog from '@/dialogs/Hire.vue'
import ConfirmDialog from '@/dialogs/Confirm.vue'

let resolve: (val: boolean) => void

export default Vue.extend({
  components: {
    CharacterComponent,
    HireDialog,
    ConfirmDialog
  },
  computed: {
    warbandCount() {
      return 1 + this.wizard.soldiers.length + (this.wizard.apprentice !== null ? 1 : 0)
    }
  },
  data() {
    return {
      showFAB: false,
      hireDialog: false,
      showConfimDialog: false
    }
  },
  props: {
    wizard: {
      type: (Wizard as unknown) as new () => Wizard,
      required: true
    }
  },
  methods: {
    confirmDismissal(): Promise<boolean> {
      this.showConfimDialog = true
      return new Promise(r => {
        resolve = r
      })
    },
    handleConfirmation(val: boolean) {
      if (resolve instanceof Function) {
        resolve(val)
      }
      this.showConfimDialog = false
    },
    async dismissMercenary(mercenary: Soldier | Apprentice) {
      const confirmed = await this.confirmDismissal()
      if (confirmed) {
        this.wizard.dismiss(mercenary)
        this.$forceUpdate()
      }
    },
    toggleHireDialog() {
      this.hireDialog = !this.hireDialog
    },
    hireMercenary(mercenary: Soldier | Apprentice) {
      this.toggleHireDialog()
      this.wizard.hire(mercenary)
      this.$forceUpdate()
    }
  }
})
</script>
