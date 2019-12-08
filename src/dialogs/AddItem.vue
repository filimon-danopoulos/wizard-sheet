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
              <v-icon
                class="ml-4 mr-4"
                :class="{
                  'blue--text': group.magic
                }"
              >
                {{ group.icon }}
              </v-icon>
              <v-list-item-content>
                <v-list-item-title>{{ group.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="(item, itemIndex) in group.items"
              :key="itemIndex"
              class="pl-8"
              :disabled="item.disabled"
              @click="$emit('added', item)"
            >
              <!-- <v-icon class="ml-4 mr-3">{{ getEntryIcon(item) }}</v-icon> -->
              <v-list-item-content>
                <v-list-item-title> {{ item.name }}</v-list-item-title>
                <v-list-item-subtitle> {{ item.description }} </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                {{ item.cost ? item.cost + 'gc' : 'Free' }}
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">Close</v-btn>
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
import MagicWeapon from '@/model/items/magic/weapons/MagicWeapon'
import MagicArmour from '@/model/items/magic/armour/MagicArmour'
import MagicItem from '@/model/items/magic/items/MagicItem'
import SpellItem from '@/model/items/magic/SpellItem'
import { allItems } from '../utils'
import Unarmed from '../model/items/basic/weapons/Unarmed'
import Wizard from '../model/wizards/Wizard'
import HandWeapon from '../model/items/basic/weapons/HandWeapon'
import Apprentice from '../model/wizards/Apprentice'
import Staff from '@/model/items/basic/weapons/Staff'
import Captain from '../model/captain/Captain'
import LeatherArmour from '../model/items/basic/armour/LeatherArmour'

const cost = (item: Item, character: Character) => {
  if (character instanceof Wizard || character instanceof Apprentice) {
    if (item instanceof HandWeapon || item instanceof Staff) {
      return 0
    }
  }
  if (character instanceof Captain) {
    if (item instanceof HandWeapon || item instanceof LeatherArmour) {
      return 0
    }
  }
  return item.cost
}

const disabled = (item: Item, character: Character, gold: number) => {
  if (character instanceof Wizard || character instanceof Apprentice) {
    if (
      item instanceof Armour ||
      (item instanceof MagicArmour && item.baseArmour instanceof Armour)
    ) {
      return true
    }
  }
  return item.cost > gold
}

const mapItem = (item: Item, character: Character, gold: number) => ({
  item: item,
  name: item.name,
  description: item.description,
  magic: false,
  cost: cost(item, character),
  disabled: disabled(item, character, gold)
})

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
          magic: false,
          items: items
            .filter(item => item instanceof Armour)
            .map(item => mapItem(item, this.character, this.gold))
        },
        {
          text: 'Weapon',
          icon: 'mdi-sword',
          magic: false,
          items: items
            .filter(item => item instanceof Weapon && !(item instanceof Unarmed))
            .map(item => mapItem(item, this.character, this.gold))
        },
        {
          text: 'Potion',
          icon: 'mdi-bottle-tonic-outline',
          magic: false,
          items: items
            .filter(item => item instanceof Potion)
            .map(item => mapItem(item, this.character, this.gold))
        },
        {
          text: 'Magic Armour',
          icon: 'mdi-shield-outline',
          magic: true,
          items: items
            .filter(item => item instanceof MagicArmour)
            .map(item => mapItem(item, this.character, this.gold))
        },
        {
          text: 'Magic Weapons',
          icon: 'mdi-sword',
          magic: true,
          items: items
            .filter(item => item instanceof MagicWeapon)
            .map(item => mapItem(item, this.character, this.gold))
        },
        {
          text: 'Magic Item',
          icon: 'mdi-crystal-ball',
          magic: true,
          items: items
            .filter(item => item instanceof MagicItem)
            .map(item => mapItem(item, this.character, this.gold))
        },
        {
          text: 'Scroll or Grimoire',
          icon: 'mdi-book-open-page-variant',
          magic: true,
          items: items
            .filter(item => item instanceof SpellItem)
            .map(item => mapItem(item, this.character, this.gold))
        }
      ]
    }
  }
})
</script>
