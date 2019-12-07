<template>
  <v-dialog v-model="open" max-width="600px" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Hire Mercenary</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-select label="Mercenary" v-model="mercenary" :items="mercenaries"></v-select>
          </v-row>
          <v-row>
            <v-text-field label="Name" v-model="name"></v-text-field>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')">Close</v-btn>
        <v-btn color="blue darken-1" text @click="$emit('hire', createMercenary())">Save</v-btn>
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
import Wizard from '@/model/wizards/Wizard'
import { PropValidator } from 'vue/types/options'
import WarHound from '@/model/soldiers/WarHound'
import Character, { IMercenary } from '@/model/Character'
import Crossbowman from '@/model/soldiers/Crossbowman'
import Infantryman from '@/model/soldiers/Infantryman'
import Tracker from '@/model/soldiers/Tracker'
import ManAtArms from '@/model/soldiers/ManAtArms'
import TreassureHunter from '@/model/soldiers/TreassureHunter'
import Apothecary from '@/model/soldiers/Apothecary'
import Barbarian from '@/model/soldiers/Barbarian'
import Marksman from '@/model/soldiers/Marksman'
import Knight from '@/model/soldiers/Knight'
import Templar from '@/model/soldiers/Templar'
import Ranger from '@/model/soldiers/Ranger'
import Weapon from '@/model/items/basic/weapons/Weapon'
import Soldier from '@/model/soldiers/Soldier'
import Chronomancer from '@/model/wizards/Chronomancer'
import Warband from '../model/Warband'
import Captain, { CaptainStatIncrease } from '../model/captain/Captain'
import { allSoldiers } from '../utils'

const weapons = [
  { text: 'Hand Weapon', value: new HandWeapon() },
  { text: 'Staff', value: new Staff() }
]

const mercenaries = () => [new Apprentice('', new Chronomancer(''))]

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true
    },
    warband: {
      type: Warband as new () => Warband,
      required: true
    }
  },
  data() {
    const soldiers = allSoldiers()
    const addCaptain = this.warband.captain === null
    if (addCaptain) {
      soldiers.unshift(new Captain(CaptainStatIncrease.Move))
    }
    const addApprentice = this.warband.wizard.apprentice === null
    if (addApprentice) {
      soldiers.unshift(new Apprentice('', new Chronomancer('')))
    }

    const mercs = soldiers
      .filter(t => t.cost <= this.warband.gold)
      .map(m => ({
        text: m.description,
        value: m
      }))

    return {
      name: '',
      mercenaries: mercs,
      mercenary: mercs[0].value,
      weapons: weapons,
      weapon: weapons[0].value,
      captainStat: CaptainStatIncrease.Move
    }
  },
  methods: {
    createMercenary(): IMercenary {
      if (this.mercenary instanceof Apprentice) {
        return new Apprentice(this.name || 'Junior', this.warband.wizard)
      } else {
        this.mercenary.name = this.name
      }
      return this.mercenary
    }
  }
})
</script>
