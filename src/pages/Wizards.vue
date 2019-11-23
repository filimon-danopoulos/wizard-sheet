<template>
  <div class="pb-3">
    <v-list two-line subheader>
      <v-list-item v-for="(wizard, i) in wizards" :key="i" @click="navigateTo(wizard)">
        <v-list-item-content>
          <v-list-item-title>{{ wizard.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Level {{ wizard.level }} | {{ wizard.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
  },
  methods: {
    navigateTo(wizard: Wizard) {
      this.$router.push({
        name: 'Warband',
        params: {
          wizard: wizard as any
        }
      })
    }
  }
})
</script>
