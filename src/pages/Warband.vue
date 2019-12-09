<template funtional>
  <div style="padding-bottom: 72px;">
    <CharacterComponent
      :character="warband.wizard"
      @addItem="addItemCharacter = warband.wizard"
      @removeItem="e => itemRemoved(e)"
      @dismissed="() => {}"
    />
    <CharacterComponent
      v-if="warband.wizard.apprentice"
      :character="warband.wizard.apprentice"
      @dismissed="dismissMercenary(warband.wizard.apprentice)"
      @removeItem="e => itemRemoved(e)"
      @addItem="addItemCharacter = warband.apprentice"
    />
    <CharacterComponent
      v-if="warband.captain"
      :character="warband.captain"
      @dismissed="dismissMercenary(warband.captain)"
      @removeItem="e => itemRemoved(e)"
      @addItem="addItemCharacter = warband.captain"
    />
    <CharacterComponent
      v-for="(soldier, i) in warband.soldiers"
      :key="i"
      :character="soldier"
      @dismissed="dismissMercenary(soldier)"
      @removeItem="e => itemRemoved(e)"
      @addItem="addItemCharacter = soldier"
    />
    <v-fab-transition>
      <v-btn
        @click="toggleHireDialog()"
        color="primary"
        v-if="warband.gold > 0 && warbandCount < 10"
        dark
        fixed
        bottom
        right
        fab
        mode=""
        style="bottom: 64px;"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <HireDialog
      v-if="hireDialog"
      :open="hireDialog"
      :warband="warband"
      @close="toggleHireDialog()"
      @hire="mercenary => this.hireMercenary(mercenary)"
    />
    <ConfirmDialog
      :open="showConfimDialog"
      @yes="handleConfirmation(true)"
      @no="handleConfirmation(false)"
    />
    <AddItemDialog
      v-if="addItemDialog"
      :open="addItemDialog"
      :gold="warband.gold"
      :character="addItemCharacter"
      @close="addItemCharacter = null"
      @added="e => itemAdded(e)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Wizard from '../model/wizards/Wizard'
import { PropValidator } from 'vue/types/options'

import CharacterComponent from '@/components/Character.vue'
import Soldier from '@/model/soldiers/Soldier'
import Apprentice from '@/model/wizards/Apprentice'
import HireDialog from '@/dialogs/Hire.vue'
import ConfirmDialog from '@/dialogs/Confirm.vue'
import AddItemDialog from '@/dialogs/AddItem.vue'
import Warband from '../model/Warband'
import Character from '../model/Character'
import Item from '@/model/items/Item'

let resolve: (val: boolean) => void

export default Vue.extend({
  components: {
    CharacterComponent,
    HireDialog,
    ConfirmDialog,
    AddItemDialog
  },
  computed: {
    warbandCount() {
      return 1 + this.warband.soldiers.length + (this.warband.wizard.apprentice !== null ? 1 : 0)
    },
    addItemDialog(): boolean {
      return this.addItemCharacter !== null
    }
  },
  data() {
    return {
      addItemCharacter: null as Character | null,
      showFAB: false,
      hireDialog: false,
      showConfimDialog: false
    }
  },
  props: {
    warband: {
      type: Warband as new () => Warband,
      required: true
    }
  },
  methods: {
    confirmDismissal(): Promise<boolean> {
      this.showConfimDialog = true
      return new Promise(r => {
        resolve = r
      })
    },
    handleConfirmation(val: boolean) {
      if (resolve instanceof Function) {
        resolve(val)
      }
      this.showConfimDialog = false
    },
    async dismissMercenary(mercenary: Soldier | Apprentice) {
      const confirmed = await this.confirmDismissal()
      if (confirmed) {
        this.warband.dismiss(mercenary)
        this.$forceUpdate()
      }
    },
    toggleHireDialog() {
      this.hireDialog = !this.hireDialog
    },
    hireMercenary(mercenary: Soldier | Apprentice) {
      this.toggleHireDialog()
      this.warband.hire(mercenary)
      this.$forceUpdate()
    },
    itemAdded(e: { item: Item; cost: number }) {
      this.addItemCharacter!.items.push(e.item)
      this.warband.gold -= e.cost
      this.addItemCharacter = null
    },
    async itemRemoved(e: { item: Item; character: Character }) {
      const confirmed = await this.confirmDismissal()
      if (confirmed) {
        e.character.removeItem(e.item)
        if (this.warband.numberOfGames === 0) {
          this.warband.gold += e.item.cost
        }
      }
    }
  }
})
</script>
