<template>
  <v-list dense="">
    <v-list-item v-for="(spell, i) in spells" :key="i">
      <v-list-item-content>
        <v-list-item-title>{{ spell.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'
import Spell from '@/model/magic/Spell'
export default Vue.extend({
  props: {
    spells: {
      type: Array,
      required: true
    } as PropValidator<Spell[]>
  }
})
</script>
