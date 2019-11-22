<template funtional>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Wizard from '../model/wizards/Wizard'
import { PropValidator } from 'vue/types/options'

import WizardComponent from '../components/Wizard.vue'
import ApprenticeComponent from '../components/Apprentice.vue'
import SoldierComponent from '../components/Soldier.vue'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'

export default Vue.extend({
  components: {
    WizardComponent,
    SoldierComponent,
    ApprenticeComponent
  },
  props: {
    wizard: {
      type: Wizard,
      required: true
    } as PropValidator<Wizard>
  },
  methods: {
    dismissMercenary(mercenary: Soldier | Apprentice) {
      this.wizard.dismiss(mercenary)
      this.$forceUpdate()
    }
  }
})
</script>
