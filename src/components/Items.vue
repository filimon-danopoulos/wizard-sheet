<template>
  <v-list dense color="primary lighten-1">
    <v-list-item v-for="(item, i) in items" :key="i">
      <v-list-item-content>
        <v-list-item-title>{{ item.type }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'
import Item from '@/model/items/Item'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    } as PropValidator<Item[]>
  }
})
</script>
