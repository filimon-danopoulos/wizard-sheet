<template>
  <v-card class="ml-3 mr-3 mt-3">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mt-1">{{ apprentice.description }}</div>
        <v-list-item-title class="headline">
          {{ apprentice.name }}
        </v-list-item-title>
      </v-list-item-content>
      <CharacterOptions @dismissed="$emit('dismissed')" @rename="renaming = true" />
    </v-list-item>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="apprentice" />
      <CharacterDetails
        primaryColor=""
        secondaryColor=""
        :whiteText="true"
        :items="apprentice.items"
        :maxItems="apprentice.maxItems"
        :spells="apprentice.spells"
      />
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-icon class="mr-1" color="red darken-3">mdi-heart</v-icon>
          <span class="subheading mr-2 font-weight-bold red--text text--darken-3"
            >{{ apprentice.health.current }} / {{ apprentice.health.base }}</span
          >
        </v-row>
      </v-list-item>
    </v-card-actions>
    <RenameDialog
      :open="renaming"
      :name="apprentice.name"
      @save="
        name => {
          this.apprentice.name = name
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
import Apprentice from '@/model/wizards/Apprentice'
import Spell, { School } from '@/model/magic/Spell'
import Item from '@/model/items/Item'
import { PropValidator } from 'vue/types/options'
import Potion from '@/model/items/potions/Potion'
import Armour from '@/model/items/basic/armour/Armour'
import Weapon from '@/model/items/basic/weapons/Weapon'
import CharacterDetails from '@/components/CharacterDetails.vue'
import CharacterOptions from '@/components/CharacterOptions.vue'
import RenameDialog from '@/dialogs/Rename.vue'

export default Vue.extend({
  components: {
    StatLine,
    CharacterDetails,
    CharacterOptions,
    RenameDialog
  },
  props: {
    apprentice: {
      type: Apprentice,
      required: true
    } as PropValidator<Apprentice>
  },
  data() {
    return {
      renaming: false
    }
  }
})
</script>
