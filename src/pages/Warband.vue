<template funtional>
  <div style="padding-bottom: 72px;">
    <WizardComponent :wizard="wizard" />
    <ApprenticeComponent
      v-if="wizard.apprentice"
      :apprentice="wizard.apprentice"
      @dismissed="dismissMercenary(wizard.apprentice)"
    />
    <SoldierComponent
      v-for="(soldier, i) in wizard.soldiers"
      :key="i"
      :soldier="soldier"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Wizard from '../model/wizards/Wizard'
import { PropValidator } from 'vue/types/options'

import WizardComponent from '@/components/Wizard.vue'
import ApprenticeComponent from '@/components/Apprentice.vue'
import SoldierComponent from '@/components/Soldier.vue'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'
import HireDialog from '@/dialogs/Hire.vue'

export default Vue.extend({
  components: {
    WizardComponent,
    SoldierComponent,
    ApprenticeComponent,
    HireDialog
  },
  computed: {
    warbandCount() {
      return 1 + this.wizard.soldiers.length + (this.wizard.apprentice !== null ? 1 : 0)
    }
  },
  data() {
    return {
      showFAB: false,
      hireDialog: false
    }
  },
  props: {
    wizard: ({
      type: Wizard,
      required: true
    } as unknown) as PropValidator<Wizard>
  },
  methods: {
    dismissMercenary(mercenary: Soldier | Apprentice) {
      this.wizard.dismiss(mercenary)
      this.$forceUpdate()
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
