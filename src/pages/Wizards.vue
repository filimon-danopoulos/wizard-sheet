<template>
  <div class="pb-3">
    <v-card class="ml-3 mr-3 mt-3">
      <v-list two-line subheader>
        <v-list-item v-for="(wizard, i) in wizards" :key="i" @click="navigateTo(i)">
          <v-list-item-content>
            <v-list-item-title>{{ wizard.name }}</v-list-item-title>
            <v-list-item-subtitle>
              Level {{ wizard.level }} | {{ wizard.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn large icon @click.stop="deleteWarbandIndex = i">
              <v-icon color="">mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <div
        v-if="!wizards.length"
        style="min-height: 240px; width: 100%; display: flex; justify-content: center; align-items: center;"
      >
        <v-btn color="primary" dark @click="$emit('create')">Create Wizard</v-btn>
      </div>
    </v-card>
    <ConfirmDialog
      :open="deleteWarbandIndex !== -1"
      @no="deleteWarband = -1"
      @yes="handleDeleteWarband()"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'
import Wizard from '@/model/wizards/Wizard'
import ConfirmDialog from '@/dialogs/Confirm.vue'
import { serialize } from '../serializer'
import Warband from '@/model/Warband'

export default Vue.extend({
  components: {
    ConfirmDialog
  },
  props: {
    warbands: {
      type: Array,
      required: true
    } as PropValidator<Warband[]>
  },
  data() {
    return {
      deleteWarbandIndex: -1
    }
  },
  computed: {
    wizards(): Wizard[] {
      return this.warbands.map(warband => warband.wizard)
    }
  },
  methods: {
    navigateTo(index: number) {
      this.$router.push({
        name: 'Warband',
        params: {
          id: index.toString(),
          warband: this.warbands[index] as any
        }
      })
    },
    handleDeleteWarband() {
      if (this.deleteWarbandIndex !== -1) {
        this.warbands.splice(this.deleteWarbandIndex, 1)
        window.localStorage.setItem('warbands', JSON.stringify(this.warbands.map(serialize)))
      }
      this.deleteWarbandIndex = -1
    }
  }
})
</script>
