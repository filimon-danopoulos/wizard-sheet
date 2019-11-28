<template>
  <v-card class="ml-3 mr-3 mt-3">
    <v-card-title>
      Select a Base
    </v-card-title>
    <v-card-text>
      <v-list three-line subheader>
        <v-list-item v-for="(base, i) in bases" :key="i" @click="() => {}">
          <v-list-item-content>
            <v-list-item-title>{{ base.name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ base.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
  }
})
</script>
