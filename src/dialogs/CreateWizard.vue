<template>
  <v-dialog v-model="open" persistent>
    <v-stepper v-model="step" vertical>
      <v-stepper-step :complete="step > 1" step="1">
        Create Wizard
      </v-stepper-step>
      <v-stepper-content step="1">
        <v-text-field label="Name" required v-model="name"></v-text-field>
        <v-select label="School" v-model="school" :items="schools"></v-select>
        <v-select label="Weapon" v-model="weapon" :items="weapons"></v-select>
        <div class="d-flex justify-space-between">
          <v-btn text>Cancel</v-btn>
          <v-btn color="primary" @click="step = 2">Continue</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="step > 2" step="2">
        Hire Apprentice
      </v-stepper-step>
      <v-stepper-content step="2">
        <v-switch v-model="apprentice" label="Hire" :value="true"></v-switch>
        <v-text-field :disabled="!apprentice" label="Name" required v-model="name"></v-text-field>
        <v-select
          :disabled="!apprentice"
          label="Weapon"
          v-model="weapon"
          :items="weapons"
        ></v-select>
        <div class="d-flex justify-space-between">
          <v-btn text>Cancel</v-btn>
          <v-btn color="primary" @click="step = 3">Continue</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="step > 3" step="3">
        Selecter Alligned Spells
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-list two-line dense>
          <template v-for="item in 8">
            <v-list-item :key="item" dense @click="() => {}">
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
                <v-list-item-subtitle>{{ item }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        <div class="d-flex justify-space-between">
          <v-btn text>Cancel</v-btn>
          <v-btn color="primary" @click="step = 4">Continue</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="step > 4" step="4">
        Select Neutral Spells
      </v-stepper-step>
      <v-stepper-content step="4">
        <div class="d-flex justify-space-between">
          <v-btn text>Cancel</v-btn>
          <v-btn color="primary" @click="step = 5">Continue</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step :complete="step > 5" step="5">
        Select Primary Spells
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <div class="d-flex justify-space-between">
          <v-btn text>Cancel</v-btn>
          <v-btn color="primary" @click="step = 6">Continue</v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-step step="6">
        All Done!
      </v-stepper-step>
      <v-stepper-content step="6">
        <v-spacer />
        <div class="d-flex justify-space-between">
          <v-btn text>Cancel</v-btn>
          <v-btn color="primary" @click="step = 1">Create!</v-btn>
        </div>
      </v-stepper-content>
    </v-stepper>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Crumble from '../model/magic/chronomancy/Crumble'
import { School } from '../model/magic/Spell'
import FastAct from '../model/magic/chronomancy/FastAct'
import FleetFeet from '../model/magic/chronomancy/FleetFeet'
import Petrify from '../model/magic/chronomancy/Petrify'
import Decay from '@/model/magic/chronomancy/Decay'
import Slow from '../model/magic/chronomancy/Slow'
import TimeStone from '../model/magic/chronomancy/TimeStone'
import TimeWalk from '../model/magic/chronomancy/TimeWalk'
export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      apprentice: false,
      step: 1,
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
      spells: {
        [School.Chronomancy]: [
          new Crumble(),
          new Decay(),
          new FastAct(),
          new FleetFeet(),
          new Petrify(),
          new Slow(),
          new TimeStone(),
          new TimeWalk()
        ],
        [School.Elementalism]: [],
        [School.Enchanting]: [],
        [School.Illusionism]: [],
        [School.Necromancy]: [],
        [School.Sigilism]: [],
        [School.Soothsaying]: [],
        [School.Summoning]: [],
        [School.Thaumaturgy]: [],
        [School.Witchcraft]: []
      },
      school: 1,
      weapons: [
        { text: 'Hand Weapon', value: 1 },
        { text: 'Staff', value: 2 }
      ],
      weapon: 2
    }
  }
})
</script>
