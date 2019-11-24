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

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Rename</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="wizard" />
      <v-list color="primary darken-1" class="mt-4">
        <v-list-group
          v-for="(group, groupIndex) in entryGroups"
          v-model="group.active"
          :key="groupIndex"
          :prepend-icon="group.icon"
          color="white"
          dark
          no-action
        >
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title>{{ group.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="(entry, entryIndex) in group.entries" :key="entryIndex" class="pl-12">
            <v-icon>{{ getEntryIcon(entry) }}</v-icon>
            <v-list-item-content class="ml-12">
              <v-list-item-title>{{ entry.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              {{ getEntryAction(entry) }}
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="start">
          <v-icon class="mr-1">mdi-coins</v-icon>
          <span class="subheading">{{ wizard.gold }}</span>
        </v-row>
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">{{ wizard.health.current }} </span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import StatLine from '@/components/StatLine.vue'
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
import Armour from '../model/items/basic/armour/Armour'
import Potion from '../model/items/potions/Potion'

export default Vue.extend({
  components: {
    StatLine
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
    },
    entryGroups(): { text: string; icon: string; entries: (Spell | Item)[] }[] {
      return [
        {
          text: 'Items',
          icon: 'mdi-sword-cross',
          entries: this.wizard.items
        },
        {
          text: 'Spells',
          icon: 'mdi-auto-fix',
          entries: this.wizard.spells
        }
      ]
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
          return 'mdi-paw'
        case School.Thaumaturgy:
          return 'mdi-shield-cross-outline'
        case School.Witchcraft:
          return 'mdi-flask-empty-outline'
        default:
          return ''
      }
    },
    getEntryAction(entry: Item | Spell): string {
      if (entry instanceof Spell) {
        return entry.difficulty.toString()
      }
      return ''
    }
  }
})
</script>
