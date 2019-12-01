<template>
  <v-dialog @input="$emit('close')" :value="monster !== null" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="title">{{ monster.name }}</span>
      </v-card-title>
      <v-card-text class="pb-0">
        <v-container>
          <v-row>
            <div
              class="grow caption"
              v-for="header in headers"
              :key="header"
              style="display: flex; flex: 1; justify-content: center;"
              cols="3"
            >
              {{ header }}
            </div>
          </v-row>
          <v-row>
            <div
              class="grow title font-weight-black"
              v-for="(value, i) in values"
              :key="i"
              style="display: flex; flex: 1; justify-content: center;"
              cols="3"
            >
              {{ value }}
            </div>
          </v-row>
        </v-container>
        <div v-if="monster.attributes.length > 0" class="text--primary mt-2 ml-2 mr-2">
          <div v-for="attribute in attributes" :key="attribute">
            {{ attribute }}
          </div>
        </div>
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
import Monster from '../model/monsters/Monster'

export default Vue.extend({
  props: {
    monster: {
      type: (Monster as unknown) as () => Monster,
      required: true
    }
  },
  computed: {
    headers(): string[] {
      return ['M', 'F', 'S', 'A', 'W', 'H']
    },
    values(): number[] {
      return [
        this.monster.move,
        this.monster.fight,
        this.monster.shoot,
        this.monster.armour,
        this.monster.will,
        this.monster.health
      ]
    },
    attributes(): string[] {
      return this.monster.attributes.map(Monster.attributeAsString)
    }
  }
})
</script>
