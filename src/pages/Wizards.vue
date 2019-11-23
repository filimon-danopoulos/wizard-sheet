<template>
  <div class="pb-3">
    <div v-for="(wizard, i) in wizards" :key="i">
      {{ wiizard.name }}
    </div>
    <div
      v-if="!wizards.length"
      style="min-height: 240px; width: 100%; display: flex; justify-content: center; align-items: center;"
    >
      <v-btn color="primary" dark @click="$emit('create')">Create Wizard</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'
import Wizard from '@/model/wizards/Wizard'
export default Vue.extend({
  props: {
    wizards: {
      type: Array,
      required: true
    } as PropValidator<Wizard[]>
  }
})
</script>
