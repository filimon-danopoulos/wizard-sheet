<template>
  <div class="pb-3">
    <v-card class="ml-3 mr-3 mt-3">
      <v-list two-line subheader>
        <v-list-item v-for="(wizard, i) in wizards" :key="i" @click="navigateTo(wizard, i)">
          <v-list-item-content>
            <v-list-item-title>{{ wizard.name }}</v-list-item-title>
            <v-list-item-subtitle>
              Level {{ wizard.level }} | {{ wizard.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn large icon @click.stop="deleteWizard = wizard">
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
    <ConfirmDialog :open="!!deleteWizard" @no="deleteWizard = null" @yes="handleDeleteWizard()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'
import Wizard from '@/model/wizards/Wizard'
import ConfirmDialog from '@/dialogs/Confirm.vue'
import { serialize } from '../serializer'

export default Vue.extend({
  components: {
    ConfirmDialog
  },
  props: {
    wizards: {
      type: Array,
      required: true
    } as PropValidator<Wizard[]>
  },
  data() {
    return {
      deleteWizard: null as Wizard | null
    }
  },
  methods: {
    navigateTo(wizard: Wizard, index: number) {
      this.$router.push({
        name: 'Warband',
        params: {
          id: index.toString(),
          wizard: wizard as any
        }
      })
    },
    handleDeleteWizard() {
      if (this.deleteWizard instanceof Wizard) {
        const index = this.wizards.findIndex(wizard => wizard === this.deleteWizard)
        if (index !== -1) {
          this.wizards.splice(index, 1)
          window.localStorage.setItem('wizards', JSON.stringify(this.wizards.map(serialize)))
        }
      }
      this.deleteWizard = null
    }
  }
})
</script>
