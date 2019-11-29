<template>
  <div class="pb-3">
    <v-card class="ml-3 mr-3 mt-3">
      <Spells />
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Spells from '@/components/Spells.vue'

export default Vue.extend({
  components: {
    Spells
  }
})
</script>
