<template>
  <div class="pb-3">
    <v-card class="ml-3 mr-3 mt-3">
      <v-list>
        <v-list-item
          v-for="monster in monsters"
          :key="monster.name"
          @click="activeMonster = monster"
        >
          <v-list-item-content>
            <v-list-item-title v-text="monster.name"></v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <MonsterDialog
      v-if="activeMonster !== null"
      :monster="activeMonster"
      @close="activeMonster = null"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { allMonsters } from '../utils'
import Monster from '@/model/monsters/Monster'
import MonsterDialog from '@/dialogs/Monster.vue'

export default Vue.extend({
  components: {
    MonsterDialog
  },
  computed: {
    monsters() {
      return allMonsters()
    }
  },
  data() {
    return {
      activeMonster: null as Monster | null
    }
  }
})
</script>
