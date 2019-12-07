<template>
  <v-card class="ml-3 mr-3 mt-3">
    <v-list-item three-line>
      <v-progress-circular v-if="hasLevels" size="72" rotate="-90" v-model="character.experience">
        {{ character.experience }} / 100
      </v-progress-circular>
      <v-list-item-content class="ml-4">
        <div class="overline mt-1">{{ character.description }}</div>
        <v-list-item-title v-if="character.name" class="headline">
          {{ character.name }}
        </v-list-item-title>
        <v-list-item-subtitle v-if="hasLevels" class="title"
          >Level {{ character.level }}</v-list-item-subtitle
        >
      </v-list-item-content>
      <CharacterOptions
        :dismissable="!isWizard"
        @dismissed="$emit('dismissed')"
        @rename="renaming = true"
      />
    </v-list-item>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="character" />
      <CharacterDetails :character="character" />
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-icon class="mr-1" color="red darken-3">mdi-heart</v-icon>
          <span class="subheading mr-2 font-weight-bold red--text text--darken-3"
            >{{ character.health.current }} / {{ character.health.base }}</span
          >
        </v-row>
      </v-list-item>
    </v-card-actions>
    <RenameDialog
      :open="renaming"
      :name="character.name"
      @save="
        name => {
          this.character.name = name
          this.renaming = false
        }
      "
      @close="renaming = false"
    />
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
import Captain from '@/model/captain/Captain'
import Spell, { School } from '@/model/magic/Spell'
import Item from '@/model/items/Item'
import Elementalist from '@/model/wizards/Elementalist'
import { PropValidator } from 'vue/types/options'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'
import Weapon from '@/model/items/basic/weapons/Weapon'
import Armour from '@/model/items/basic/armour/Armour'
import Potion from '@/model/items/potions/Potion'
import RenameDialog from '@/dialogs/Rename.vue'
import Character from '../model/Character'

export default Vue.extend({
  components: {
    StatLine,
    CharacterDetails,
    CharacterOptions,
    RenameDialog
  },
  props: {
    character: {
      type: Character as new () => Character,
      required: false,
      default: null
    }
  },
  data() {
    return {
      renaming: false
    }
  },
  computed: {
    hasLevels(): boolean {
      return this.character instanceof Wizard || this.character instanceof Captain
    },
    isWizard(): boolean {
      return this.character instanceof Wizard
    }
  }
})
</script>
