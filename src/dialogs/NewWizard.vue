<template>
  <v-dialog v-model="open" fullscreen>
    <v-card>
      <v-card-title>
        <span class="headline">Create Wizard</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-text-field label="Name" required v-model="name"></v-text-field>
          </v-row>
          <v-row>
            <v-select label="School" v-model="school" :items="schools"></v-select>
          </v-row>
          <v-row>
            <v-select label="Weapon" v-model="weapon" :items="weapons"></v-select>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')">Close</v-btn>
        <v-btn color="blue darken-1" text @click="createWizard()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Elementalist from '@/model/wizards/Elementalist'
import Staff from '@/model/items/basic/weapons/Staff'
import HandWeapon from '@/model/items/basic/weapons/HandWeapon'
import Apprentice from '@/model/wizards/Apprentice'
import Archer from '@/model/soldiers/Archer'
import Thug from '@/model/soldiers/Thug'
import Thief from '@/model/soldiers/Thief'
import Chronomancer from '@/model/wizards/Chronomancer'
import Enchanter from '@/model/wizards/Enchanter'
import Illusionist from '@/model/wizards/Illusionist'
import Necromancer from '@/model/wizards/Necromancer'
import Sigilist from '@/model/wizards/Sigilist'
import Soothsayer from '@/model/wizards/Soothsayer'
import Thaumaturge from '@/model/wizards/Thaumaturge'
import Witch from '@/model/wizards/Witch'
import Summoner from '@/model/wizards/Summoner'
import Weapon from '@/model/items/basic/weapons/Weapon'
import Wizard from '@/model/wizards/Wizard'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: 'Saga Norén',
      schools: [
        { text: 'Chronomancer', value: 1 },
        { text: 'Elementalist', value: 2 },
        { text: 'Enchanter', value: 3 },
        { text: 'Illusionist', value: 4 },
        { text: 'Necromancer', value: 5 },
        { text: 'Sigilist', value: 6 },
        { text: 'Soothsayer', value: 7 },
        { text: 'Summoner', value: 8 },
        { text: 'Thaumaturge', value: 9 },
        { text: 'Witch', value: 10 }
      ],
      school: 1,
      weapons: [
        { text: 'Hand Weapon', value: 1 },
        { text: 'Staff', value: 2 }
      ],
      weapon: 2
    }
  },
  methods: {
    createWizard() {
      const wizards = JSON.parse(window.localStorage.getItem('wizards') || '[]') as any[]
      if (wizards.some(w => w.name === this.name)) {
        return
      }
      const weapon = this.getWeapon()
      const wizard = this.getWizard()
      wizard.addItem(weapon)
      this.$emit('new', wizard)
    },
    getWizard(): Wizard {
      switch (this.school) {
        case 1:
          return new Chronomancer(this.name)
        case 2:
          return new Elementalist(this.name)
        case 3:
          return new Enchanter(this.name)
        case 4:
          return new Illusionist(this.name)
        case 5:
          return new Necromancer(this.name)
        case 6:
          return new Sigilist(this.name)
        case 7:
          return new Soothsayer(this.name)
        case 8:
          return new Summoner(this.name)
        case 9:
          return new Thaumaturge(this.name)
        case 10:
          return new Witch(this.name)
      }
      throw new Error('Unkown Wizard')
    },
    getWeapon(): Weapon {
      switch (this.weapon) {
        case 1:
          return new HandWeapon()
        case 2:
          return new Staff()
      }
      throw new Error('Unkown Weapon')
    }
  }
})
</script>
