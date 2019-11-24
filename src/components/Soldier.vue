<template>
  <v-card class="ml-3 mr-3 mt-3" color="light-green lighten-4">
    <v-card-title class="subtitle-2">
      {{ soldier.description }}
      <div style="flex: 1" />
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
          <v-spacer />
          <v-list-item @click="$emit('dismissed')">
            <v-list-item-title>Dismiss</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-subtitle v-if="soldier.name">
      {{ soldier.name }}
    </v-card-subtitle>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="soldier" />
      <v-list color="light-green lighten-2" class="mt-4">
        <v-list-group
          v-for="(group, groupIndex) in entryGroups"
          v-model="group.active"
          :key="groupIndex"
          :prepend-icon="group.icon"
          style="color: rgba(0, 0, 0, 0.54) !important;"
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
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">{{ soldier.health.current }} </span>
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

export default Vue.extend({
  components: {
    StatLine
  },
  props: {
    soldier: {
      type: Soldier,
      required: true
    } as PropValidator<Soldier>
  },
  computed: {
    entryGroups(): { text: string; icon: string; entries: Item[] }[] {
      return [
        {
          text: 'Items',
          icon: 'mdi-sword-cross',
          entries: this.soldier.items
        }
      ]
    }
  },
  methods: {
    getEntryIcon(item: Item) {
      if (item instanceof Weapon) {
        return 'mdi-sword'
      } else if (item instanceof Armour) {
        return 'mdi-shield-outline'
      } else if (item instanceof Potion) {
        return 'mdi-bottle-tonic-outline'
      }
      return 'mdi-tools'
    },
    getEntryAction(item: Item): string {
      return ''
    }
  }
})
</script>
