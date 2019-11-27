<template>
  <v-card class="ml-3 mr-3 mt-3" color="light-green lighten-3">
    <v-card-title class="subtitle-2">
      {{ soldier.description }}
      <div style="flex: 1" />
      <CharacterOptions @dismissed="$emit('dismissed')" />
    </v-card-title>
    <v-card-subtitle v-if="soldier.name">
      {{ soldier.name }}
    </v-card-subtitle>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="soldier" />
      <CharacterDetails
        primaryColor="light-green lighten-2"
        secondaryColor="light-green lighten-4"
        :items="soldier.items"
        :maxItems="soldier.maxItems"
      />
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2"
            >{{ soldier.health.current }} / {{ soldier.health.base }}
          </span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Soldier from '@/model/soldiers/Soldier'
import StatLine from '@/components/StatLine.vue'
import Item from '@/model/items/Item'
import Potion from '@/model/items/potions/Potion'
import Armour from '@/model/items/basic/armour/Armour'
import Weapon from '@/model/items/basic/weapons/Weapon'
import { PropValidator } from 'vue/types/options'
import CharacterDetails from '@/components/CharacterDetails.vue'
import CharacterOptions from '@/components/CharacterOptions.vue'

export default Vue.extend({
  components: {
    StatLine,
    CharacterDetails,
    CharacterOptions
  },
  props: {
    soldier: {
      type: Soldier,
      required: true
    } as PropValidator<Soldier>
  }
})
</script>
