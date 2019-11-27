<template>
  <v-menu left bottom offset-y min-width="calc(60%)">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list color="grey lighten-2">
      <v-list-item>
        <v-list-item-title @click="$emit('rename')">Rename</v-list-item-title>
      </v-list-item>
      <v-spacer />
      <v-list-item v-if="dismissable" @click="$emit('dismissed')">
        <v-list-item-title>Dismiss</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    dismissable: {
      type: Boolean,
      required: false,
      default: true
    }
  }
})
</script>
