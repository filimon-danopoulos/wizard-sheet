<template>
  <v-card class="ml-3 mr-3 mt-3" color="blue" dark>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mt-1">{{ wizard.description }}</div>
        <v-list-item-title class="headline">{{ wizard.name }}</v-list-item-title>
        <v-list-item-subtitle class="title">Level {{ wizard.level }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-progress-circular size="72" rotate="-90" v-model="experience">
        {{ experience }} / 100
      </v-progress-circular>
    </v-list-item>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="wizard" />
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="start">
          <v-icon class="mr-1">mdi-coins</v-icon>
          <span class="subheading">{{ wizard.gold }}</span>
        </v-row>
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">{{ wizard.health.current }} </span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import StatLine from './StatLine.vue'
import Wizard from '@/model/wizards/Wizard'
import { School } from '../model/magic/Spell'
import Elementalist from '../model/wizards/Elementalist'
import { PropValidator } from 'vue/types/options'

export default Vue.extend({
  components: {
    StatLine
  },
  props: {
    wizard: {
      type: Wizard,
      required: false,
      default: null
    } as PropValidator<Wizard>
  },
  computed: {
    experience(): number {
      if (this.wizard instanceof Wizard) {
        return this.wizard.experience
      }
      return 0
    }
  }
})
</script>
