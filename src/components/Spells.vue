<template>
  <v-expansion-panels :value="0">
    <v-expansion-panel v-for="(school, i) in schools" :key="i" class="spell-panel">
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
            class="pl-0"
          >
            <v-list-item-avatar v-if="selectable" @click.stop class="mr-2">
              <v-checkbox
                hide-details
                :value="value.includes(spell)"
                @change="$emit('input', [...value, spell])"
              ></v-checkbox>
            </v-list-item-avatar>
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
    <DetailsDialog
      @close="activeSpell = null"
      :open="activeSpell !== null"
      :header="activeSpell ? activeSpell.name : ''"
      :message="activeSpell ? activeSpell.description : ''"
    />
  </v-expansion-panels>
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
  props: {
    restrictTo: {
      type: (Array as unknown) as () => School[],
      required: false,
      default: () => []
    },
    value: {
      type: (Array as unknown) as () => Spell[],
      required: false,
      default: () => []
    },
    selectable: {
      type: Boolean,
      required: false
    }
  },
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
        .filter(school => (this.restrictTo.length ? this.restrictTo.includes(+school) : true))
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
          return 'mdi-emoticon-devil-outline'
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

<style lang="less" scoped>
.spell-panel::before {
  box-shadow: none !important;
}
</style>
