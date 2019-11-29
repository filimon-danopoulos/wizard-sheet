<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel v-for="(school, i) in schools" :key="i">
        <v-expansion-panel-header>
          <v-icon class="mr-4" style="flex: 0 0 auto">
            {{ school.icon }}
          </v-icon>
          {{ school.name }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list three-line>
            <v-list-item
              v-for="spell in school.spells"
              :key="spell.type"
              @click="activeSpell = spell"
            >
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-space-between">
                  <span> {{ spell.name }} </span>
                  <span> {{ spell.difficulty }}+ </span>
                </v-list-item-title>
                <v-list-item-subtitle class="text--primary ">
                  {{ getSpellCategory(spell) }}
                </v-list-item-subtitle>
                <v-list-item-subtitle> {{ spell.description }}+ </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <DetailsDialog
      @close="activeSpell = null"
      :open="activeSpell !== null"
      :header="activeSpell ? activeSpell.name : ''"
      :message="activeSpell ? activeSpell.description : ''"
    />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '@/model/items/Item'
import Spell, { School, Category } from '@/model/magic/Spell'
import * as utils from '@/utils'
import DetailsDialog from '@/dialogs/Details.vue'

interface ISchool {
  name: string
  spells: Spell[]
}
const spells = utils.allSpells()

export default Vue.extend({
  components: {
    DetailsDialog
  },
  data() {
    return {
      activeSpell: null as Spell | null
    }
  },
  computed: {
    schools(): ISchool[] {
      return Object.values(School)
        .filter(school => +school === school)
        .map(school => ({
          name: this.getSchoolName(school as School),
          spells: spells.filter(spell => spell.school === (school as School)),
          icon: this.getSchoolIcon(school as School)
        }))
    }
  },
  methods: {
    getSpellCategory(spell: Spell): string {
      switch (spell.category) {
        case Category.OutOfGame:
          return 'Out of Game'
        case Category.SelfOnly:
          return 'Self Only'
        case Category.LineOfSight:
          return 'Line of Sight'
        case Category.AreaEffect:
          return 'Area Effect'
        case Category.Touch:
          return 'Touch'
      }
    },
    getSchoolName(school: School): string {
      return School[school]
    },
    getSchoolIcon(school: School): string {
      switch (school) {
        case School.Chronomancy:
          return 'mdi-timer-sand'
        case School.Elementalism:
          return 'mdi-fire'
        case School.Enchanting:
          return 'mdi-tools'
        case School.Illusionism:
          return 'mdi-help'
        case School.Necromancy:
          return 'mdi-skull-outline'
        case School.Sigilism:
          return 'mdi-feather'
        case School.Soothsaying:
          return 'mdi-eye-outline'
        case School.Summoning:
          return 'mdi-paw'
        case School.Thaumaturgy:
          return 'mdi-shield-cross-outline'
        case School.Witchcraft:
          return 'mdi-flask-empty-outline'
        case School.All:
          return 'mdi-auto-fix'
        default:
          return ''
      }
    }
  }
})
</script>
