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
      <v-list-item v-if="dismissable" @click.stop="setConfirmAction(() => $emit('dismissed'))">
        <v-list-item-title>Dismiss</v-list-item-title>
      </v-list-item>
    </v-list>
    <ConfirmDialog :open="confirm" @no="ignoreAction()" @yes="executeAction()" />
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import ConfirmDialog from '@/dialogs/Confirm.vue'

let action = () => {}

export default Vue.extend({
  components: {
    ConfirmDialog
  },
  props: {
    dismissable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      confirm: false
    }
  },
  methods: {
    setConfirmAction(a: () => void) {
      action = a
      this.confirm = !this.confirm
    },
    ignoreAction() {
      action = () => {}
      this.confirm = !this.confirm
    },
    executeAction() {
      this.confirm = !this.confirm
      action()
      action = () => {}
    }
  }
})
</script>
