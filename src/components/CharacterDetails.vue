<template>
  <v-list class="mt-4 pb-0 pt-0" flat>
    <v-list-group
      v-for="(group, groupIndex) in entryGroups"
      v-model="group.active"
      :key="groupIndex"
      no-action
    >
      <v-list-item slot="activator" style="margin-left: -36px;">
        <v-icon class="ml-4 mr-4">
          {{ group.icon }}
        </v-icon>
        <v-list-item-content>
          <v-list-item-title>{{ group.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="(entry, entryIndex) in group.entries" :key="entryIndex" class="pl-0">
        <v-icon class="ml-4 mr-3">{{ getEntryIcon(entry) }}</v-icon>
        <v-list-item-content>
          <v-list-item-title>{{ entry.name }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-chip v-if="getEntryChip(entry)">
            {{ getEntryChip(entry) }}
          </v-chip>
        </v-list-item-action>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '@/model/items/Item'
import Spell, { School } from '@/model/magic/Spell'
import Weapon from '@/model/items/basic/weapons/Weapon'
import Armour from '@/model/items/basic/armour/Armour'
import Potion from '@/model/items/potions/Potion'
import { PropValidator } from 'vue/types/options'
import Character from '../model/Character'
import Wizard from '../model/wizards/Wizard'
export default Vue.extend({
  props: {
    character: {
      type: Character as new () => Character,
      required: true
    }
  },
  computed: {
    items(): Item[] {
      return this.character.items
    },
    maxItems(): number {
      return this.character.maxItems
    },
    spells(): Spell[] {
      if (this.character instanceof Wizard) {
        return this.character.spells
      }
      return []
    },
    entryGroups(): { text: string; icon: string; entries: (Spell | Item)[] }[] {
      const entryGroups = []
      if (this.items.length) {
        entryGroups.push({
          text:
            'Items' +
            (this.maxItems !== Infinity ? ` (${this.items.length}/${this.maxItems})` : ''),
          icon: 'mdi-sword-cross',
          entries: this.items
        })
      }
      if (this.spells.length) {
        entryGroups.push({
          text: 'Spells',
          icon: 'mdi-auto-fix',
          entries: this.spells
        })
      }
      return entryGroups
    }
  },
  methods: {
    getEntryIcon(entry: Item | Spell) {
      if (entry instanceof Item) {
        return this.getItemIcon(entry)
      } else if (entry instanceof Spell) {
        return this.getSpellIcon(entry)
      }
      return ''
    },
    getItemIcon(item: Item): string {
      if (item instanceof Weapon) {
        return 'mdi-sword'
      } else if (item instanceof Armour) {
        return 'mdi-shield-outline'
      } else if (item instanceof Potion) {
        return 'mdi-bottle-tonic-outline'
      }
      return 'mdi-tools'
    },
    getSpellIcon(spell: Spell): string {
      switch (spell.school) {
        case School.Chronomancy:
          return 'mdi-timer-sand'
        case School.Elementalism:
          return 'mdi-fire'
        case School.Enchanting:
          return 'mdi-tools'
        case School.Illusionism:
          return 'mdi-help'
        case School.Necromancy:
          return 'mdi-skull-outline'
        case School.Sigilism:
          return 'mdi-feather'
        case School.Soothsaying:
          return 'mdi-eye-outline'
        case School.Summoning:
          return 'mdi-emoticon-devil-outline'
        case School.Thaumaturgy:
          return 'mdi-shield-cross-outline'
        case School.Witchcraft:
          return 'mdi-flask-empty-outline'
        default:
          return ''
      }
    },
    getEntryChip(entry: Item | Spell): string {
      if (entry instanceof Spell) {
        return entry.difficulty.toString()
      }
      return ''
    }
  }
})
</script>
