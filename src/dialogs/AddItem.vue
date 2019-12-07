<template>
  <v-dialog v-model="open" max-width="600px" scrollable persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Add Item</span>
      </v-card-title>
      <v-card-text>
        <v-list class="mt-4 pb-0 pt-0" flat>
          <v-list-group
            v-for="(group, groupIndex) in itemGroups"
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
            <v-list-item v-for="(item, itemIndex) in group.items" :key="itemIndex" class="pl-8">
              <!-- <v-icon class="ml-4 mr-3">{{ getEntryIcon(item) }}</v-icon> -->
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                {{ item.cost }}
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')">Close</v-btn>
        <v-btn color="blue darken-1" text @click="$emit('close')">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Character from '@/model/Character'
import Armour from '../model/items/basic/armour/Armour'
import Weapon from '../model/items/basic/weapons/Weapon'
import Item from '@/model/items/Item'
import Potion from '@/model/items/potions/Potion'
import MagicItem from '@/model/items/magic/MagicItem'
import SpellItem from '@/model/items/magic/SpellItem'
import { allItems } from '../utils'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    },
    character: {
      type: Character as new () => Character,
      required: true
    },
    gold: {
      type: Number,
      required: true
    }
  },
  data() {
    const items = allItems()
    return {
      itemGroups: [
        {
          text: 'Armour',
          icon: 'mdi-shield-outline',
          items: items.filter(item => item instanceof Armour)
        },
        {
          text: 'Weapon',
          icon: 'mdi-sword',
          items: items.filter(item => item instanceof Weapon)
        },
        {
          text: 'Potion',
          icon: 'mdi-bottle-tonic-outline',
          items: items.filter(item => item instanceof Potion)
        },
        {
          text: 'Magic Item',
          icon: 'mdi-crystal-ball',
          items: items.filter(item => item instanceof MagicItem)
        },
        {
          text: 'Scroll or Grimoire',
          icon: 'mdi-book-open-page-variant',
          items: items.filter(item => item instanceof SpellItem)
        }
      ]
    }
  }
})
</script>
