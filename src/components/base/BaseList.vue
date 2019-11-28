<template>
  <v-card class="ml-3 mr-3 mt-3">
    <v-card-title class="headline">
      Select a Base
    </v-card-title>
    <v-card-text>
      <p>
        After your first game you can choose a base, the choice is permanent to pick it with care.
      </p>
      <v-expansion-panels>
        <v-expansion-panel v-for="(base, i) in bases" :key="i">
          <v-expansion-panel-header>{{ base.name }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-col>
              <v-row class="mb-6">
                {{ base.description }}
              </v-row>
              <v-row justify="center">
                <v-btn color="primary" @click="selectBase(base)">Use as Base</v-btn>
              </v-row>
            </v-col>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Wizard from '../../model/wizards/Wizard'
import Inn from '../../model/bases/Inn'
import { PropValidator } from 'vue/types/options'
import Temple from '@/model/bases/Temple'
import Tower from '@/model/bases/Tower'
import Crypt from '@/model/bases/Crypt'
import Brewery from '@/model/bases/Brewery'
import Library from '@/model/bases/Library'
import Laboratory from '@/model/bases/Laboratory'
import Treasury from '@/model/bases/Treasury'
import Base from '@/model/bases/Base'

const bases = () => [
  new Inn(),
  new Temple(),
  new Crypt(),
  new Tower(),
  new Treasury(),
  new Brewery(),
  new Library(),
  new Laboratory()
]

export default Vue.extend({
  data() {
    return {
      bases: bases()
    }
  },
  methods: {
    selectBase(base: Base) {
      this.$emit('select', base)
    }
  }
})
</script>
