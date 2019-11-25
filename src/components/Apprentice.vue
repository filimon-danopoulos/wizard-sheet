<template>
  <v-card class="ml-3 mr-3 mt-3" color="teal lighten-2" dark>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mt-1">{{ apprentice.description }}</div>
        <v-list-item-title class="headline">
          {{ apprentice.name }}
        </v-list-item-title>
      </v-list-item-content>

      <div style="flex: 1" />
      <CharacterOptions @dismiss="$emit('dismiss')" />
    </v-list-item>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="apprentice" />
      <CharacterDetails
        primaryColor="teal lighten-1"
        secondaryColor="teal lighten-3"
        :whiteText="true"
        :items="apprentice.items"
        :maxItems="apprentice.maxItems"
        :spells="apprentice.spells"
      />
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2"
            >{{ apprentice.health.current }} / {{ apprentice.health.base }}
          </span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import StatLine from '@/components/StatLine.vue'
import Apprentice from '@/model/wizards/Apprentice'
import Spell, { School } from '@/model/magic/Spell'
import Item from '@/model/items/Item'
import { PropValidator } from 'vue/types/options'
import Potion from '@/model/items/potions/Potion'
import Armour from '@/model/items/basic/armour/Armour'
import Weapon from '@/model/items/basic/weapons/Weapon'
import CharacterDetails from '@/components/CharacterDetails.vue'
import CharacterOptions from '@/components/CharacterOptions.vue'

export default Vue.extend({
  components: {
    StatLine,
    CharacterDetails,
    CharacterOptions
  },
  props: {
    apprentice: {
      type: Apprentice,
      required: true
    } as PropValidator<Apprentice>
  }
})
</script>
