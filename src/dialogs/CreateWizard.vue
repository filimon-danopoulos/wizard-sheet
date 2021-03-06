<template>
  <v-dialog v-model="open" scrollable persistent no-click-animation>
    <v-card>
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
      </v-card-title>
      <v-card-text :class="step >= 2 && step <= 4 ? 'pt-0 pl-0 pd-0 pr-0' : ''">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-text-field label="Name" required v-model="wizard.name"></v-text-field>
            <v-select
              label="School"
              :value="school"
              @change="handleSchoolChange"
              :items="schools"
            ></v-select>
            <v-select
              label="Weapon"
              :value="weapon"
              @change="handleWeaponChange(wizard, weapon)"
              :items="weapons"
            ></v-select>
          </v-window-item>

          <v-window-item :value="2">
            <Spells :selectable="true" :restrictTo="primaryRestriction" v-model="primarySpells" />
          </v-window-item>

          <v-window-item :value="3">
            <Spells :selectable="true" :restrictTo="allignedRestriction" v-model="allignedSpells" />
          </v-window-item>

          <v-window-item :value="4">
            <Spells :selectable="true" :restrictTo="neutralRestriction" v-model="neutralSpells" />
          </v-window-item>
        </v-window>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text @click="$emit('close')">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-show="step !== 1" text @click="step--">
          Back
        </v-btn>
        <v-btn color="primary" :disabled="disabledStep" depressed @click="handleStep(step)">
          {{ step === 4 ? 'Done' : 'Next' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Spells from '@/components/Spells.vue'
import Crumble from '../model/magic/chronomancy/Crumble'
import Spell, { School } from '../model/magic/Spell'
import FastAct from '../model/magic/chronomancy/FastAct'
import FleetFeet from '../model/magic/chronomancy/FleetFeet'
import Petrify from '../model/magic/chronomancy/Petrify'
import Decay from '@/model/magic/chronomancy/Decay'
import Slow from '../model/magic/chronomancy/Slow'
import TimeStone from '../model/magic/chronomancy/TimeStone'
import TimeWalk from '../model/magic/chronomancy/TimeWalk'
import Chronomancer from '../model/wizards/Chronomancer'
import Wizard from '../model/wizards/Wizard'
import Elementalist from '@/model/wizards/Elementalist'
import Enchanter from '@/model/wizards/Enchanter'
import Illusionist from '@/model/wizards/Illusionist'
import Necromancer from '@/model/wizards/Necromancer'
import Sigilist from '@/model/wizards/Sigilist'
import Soothsayer from '@/model/wizards/Soothsayer'
import Summoner from '@/model/wizards/Summoner'
import Thaumaturge from '@/model/wizards/Thaumaturge'
import Witch from '@/model/wizards/Witch'
import Weapon from '@/model/items/basic/weapons/Weapon'
import HandWeapon from '@/model/items/basic/weapons/HandWeapon'
import Staff from '@/model/items/basic/weapons/Staff'
import Character from '@/model/Character'
export default Vue.extend({
  components: {
    Spells
  },
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    disabledStep(): Boolean {
      if (this.step === 1) {
        return this.wizard.name === ''
      } else if (this.step === 2) {
        return this.primarySpells.length !== 3
      } else if (this.step === 3) {
        const schools = new Set()
        this.allignedSpells.forEach(spell => {
          schools.add(spell.school)
        })
        return this.allignedSpells.length !== 3 || schools.size !== 3
      } else if (this.step === 4) {
        const schools = new Set()
        this.neutralSpells.forEach(spell => {
          schools.add(spell.school)
        })
        return this.neutralSpells.length !== 2 || schools.size !== 2
      }
      return false
    },
    primaryRestriction(): School[] {
      return [this.wizard.primarySchool]
    },
    allignedRestriction(): School[] {
      return this.wizard.allignedSchools
    },
    neutralRestriction(): School[] {
      return this.wizard.neutralSchools
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Create Wizard'
        case 2:
          return 'Select Primary Spells'
        case 3:
          return 'Select Alligned Spells'
        case 4:
          return 'Select Neutral Spells'
        default:
          return ''
      }
    }
  },
  data() {
    const wizard = new Chronomancer('Wizzy McWizzface')
    wizard.addItem(new Staff())
    return {
      step: 1,
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
      weapon: 2,
      wizard: wizard as Wizard,
      primarySpells: [] as Spell[],
      allignedSpells: [] as Spell[],
      neutralSpells: [] as Spell[]
    }
  },
  methods: {
    handleSchoolChange(school: School) {
      const wizard = this.getWizard(school, this.wizard.name)
      wizard.addItem(this.getWeapon(this.weapon))
      this.wizard.spells.forEach(spell => {
        wizard.learnSpell(spell)
      })
      this.wizard = wizard
      this.school = school
    },
    getWizard(school: School, name: string): Wizard {
      switch (school) {
        case 1:
          return new Chronomancer(name)
        case 2:
          return new Elementalist(name)
        case 3:
          return new Enchanter(name)
        case 4:
          return new Illusionist(name)
        case 5:
          return new Necromancer(name)
        case 6:
          return new Sigilist(name)
        case 7:
          return new Soothsayer(name)
        case 8:
          return new Summoner(name)
        case 9:
          return new Thaumaturge(name)
        case 10:
          return new Witch(name)
      }
      throw new Error('Unkown Wizard')
    },
    handleWeaponChange(character: Character, weapon: number) {
      const wizard = this.getWizard(this.school, this.wizard.name)
      this.wizard.spells.forEach(spell => {
        wizard.learnSpell(spell)
      })
      character.addItem(this.getWeapon(weapon))
      this.weapon = weapon
    },
    getWeapon(weapon: number): Weapon {
      switch (weapon) {
        case 1:
          return new HandWeapon()
        case 2:
          return new Staff()
      }
      throw new Error('Unkown Weapon')
    },
    handleStep(step: number) {
      this.step += 1
      switch (step) {
        case 2:
          return this.selectPrimarySpells()
        case 3:
          return this.selectAllignedSpells()
        case 4:
          this.selectNeutralSpells()
          return this.$emit('created', this.wizard)
      }
    },
    selectPrimarySpells() {
      this.primarySpells.forEach(spell => {
        this.wizard.learnSpell(spell)
      })
    },
    selectAllignedSpells() {
      this.allignedSpells.forEach(spell => {
        this.wizard.learnSpell(spell)
      })
    },
    selectNeutralSpells() {
      this.neutralSpells.forEach(spell => {
        this.wizard.learnSpell(spell)
      })
    }
  }
})
</script>
