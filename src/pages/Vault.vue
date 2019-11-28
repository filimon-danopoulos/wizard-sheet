<template funtional>
  <div class="pb-3">
    <v-card class="ml-3 mr-3 mt-3">
      <v-card-title class="headline">
        Available Items
      </v-card-title>
      <v-card-text>
        <div v-if="!wizard.base">
          After you have select a base you can see your vault items here.
        </div>
        <div v-else-if="wizard.base.vault.length">
          Your vault is not empty!
        </div>
        <div v-else>
          Your vault is empty!
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'
import Wizard from '../model/wizards/Wizard'
export default Vue.extend({
  props: {
    wizard: ({
      type: Wizard,
      required: true
    } as unknown) as PropValidator<Wizard>
  }
})
</script>
