<template>
  <v-dialog v-model="open" max-width="600px" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">{{ header }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <span class="body-1">
              {{ message }}
            </span>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('no')">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="$emit('yes')">Continue</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    },
    header: {
      type: String,
      required: false,
      default: 'Please Confirm'
    },
    message: {
      type: String,
      required: false,
      default: "You can't undo this action, are you certain that you want to continue?"
    }
  }
})
</script>
