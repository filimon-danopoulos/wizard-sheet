<template>
  <v-card class="ml-3 mr-3 mt-3" color="grey lighten-4">
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

export default Vue.extend({
  components: {
    StatLine
  },
  props: {
    soldier: {
      type: Soldier,
      required: true
    } as any
  }
})
</script>
