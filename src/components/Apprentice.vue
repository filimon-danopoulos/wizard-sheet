<template>
  <v-card class="ml-3 mr-3 mt-3" color="primary lighten-2" dark>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mt-1">{{ apprentice.description }}</div>
        <v-list-item-title class="headline">
          {{ apprentice.name }}
        </v-list-item-title>
      </v-list-item-content>

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
    </v-list-item>
    <v-card-text class="pb-0 pt-0">
      <StatLine :character="apprentice" />
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">{{ apprentice.health.current }} </span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import StatLine from '@/components/StatLine.vue'
import Apprentice from '@/model/wizards/Apprentice'

export default Vue.extend({
  components: {
    StatLine
  },
  props: {
    apprentice: {
      type: Apprentice,
      required: true
    } as any
  }
})
</script>
