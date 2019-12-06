<template funtional>
  <div class="pb-3">
    <v-card class="ml-3 mr-3 mt-3">
      <v-card-title class="headline">
        Available Items
      </v-card-title>
      <v-card-text>
        <div v-if="warband.vault.length">
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
import Warband from '../model/Warband'
export default Vue.extend({
  props: {
    warband: {
      type: Warband as new () => Warband,
      required: true
    }
  }
})
</script>
