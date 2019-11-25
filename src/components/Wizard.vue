<template>
  <v-card class="ml-3 mr-3 mt-3" color="primary" dark>
    <v-list-item three-line>
      <v-progress-circular size="72" rotate="-90" v-model="experience">
        {{ experience }} / 100
      </v-progress-circular>
      <v-list-item-content class="ml-4">
        <div class="overline mt-1">{{ wizard.description }}</div>
        <v-list-item-title class="headline">{{ wizard.name }}</v-list-item-title>
        <v-list-item-subtitle class="title">Level {{ wizard.level }}</v-list-item-subtitle>
      </v-list-item-content>
      <CharacterOptions :dismissable="false" />
    </v-list-item>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="wizard" />
      <CharacterDetails
        primaryColor="blue darken-3"
        secondaryColor="blue darken-1"
        :whiteText="true"
        :items="wizard.items"
        :maxItems="wizard.maxItems"
        :spells="wizard.spells"
      />
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="start">
          <v-icon class="mr-1">mdi-coins</v-icon>
          <span class="subheading">{{ wizard.gold }}</span>
        </v-row>
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2"
            >{{ wizard.health.current }} / {{ wizard.health.base }}</span
          >
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import StatLine from '@/components/StatLine.vue'
import CharacterDetails from '@/components/CharacterDetails.vue'
import CharacterOptions from '@/components/CharacterOptions.vue'
import Items from '@/components/Items.vue'
import Spells from '@/components/Spells.vue'
import Wizard from '@/model/wizards/Wizard'
import Spell, { School } from '@/model/magic/Spell'
import Item from '@/model/items/Item'
import Elementalist from '@/model/wizards/Elementalist'
import { PropValidator } from 'vue/types/options'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'
import Weapon from '@/model/items/basic/weapons/Weapon'
import Armour from '@/model/items/basic/armour/Armour'
import Potion from '@/model/items/potions/Potion'

export default Vue.extend({
  components: {
    StatLine,
    CharacterDetails,
    CharacterOptions
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
