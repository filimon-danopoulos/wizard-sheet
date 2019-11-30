<template>
  <v-dialog @input="$emit('close')" :value="open" max-width="600px">
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
        <v-btn text @click="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    },
    header: {
      type: String,
      required: false,
      default: ''
    },
    message: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>
