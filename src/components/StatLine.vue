<template>
  <v-container class="pb-0">
    <v-row>
      <div
        class="grow caption"
        v-for="header in statHeaders"
        :key="header"
        style="display: flex; flex: 1; justify-content: center;"
        cols="3"
      >
        {{ header }}
      </div>
    </v-row>
    <v-row>
      <div
        class="grow title font-weight-black"
        v-for="(stat, i) in stats"
        :key="i"
        style="display: flex; flex: 1; justify-content: center;"
        cols="3"
      >
        {{ stat }}
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Character from '../model/Character'
import { PropValidator } from 'vue/types/options'
export default Vue.extend({
  props: {
    character: {
      type: Character,
      required: true
    } as PropValidator<Character>
  },
  computed: {
    stats(): number[] {
      return [
        this.character.move.modified,
        this.character.fight.modified,
        this.character.shoot.modified,
        this.character.armour.modified,
        this.character.will.modified
      ]
    }
  },
  data() {
    return {
      statHeaders: ['MOVE', 'FIGHT', 'SHOOT', 'ARMOUR', 'WILL']
    }
  }
})
</script>
