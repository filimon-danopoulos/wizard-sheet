<template>
  <v-card class="ml-3 mr-3 mt-3">
    <v-card-title class="headline d-flex justify-space-between">
      <span>{{ base.name }}</span>
    </v-card-title>
    <v-card-subtitle class="pt-4 pl-8 pb-4 pr-8">
      {{ base.description }}
    </v-card-subtitle>
    <v-card-text class="pl-0 pr-0">
      <v-list three-line subheader>
        <template v-for="(resource, i) in resources">
          <v-divider v-if="i === 0" :key="i - 1"></v-divider>
          <v-list-item :key="resource.type" @click="activeResource = resource">
            <v-list-item-content>
              <v-list-item-title
                :class="disabled(resource) ? 'grey--text text--lighten-1' : ''"
                v-text="resource.name"
              ></v-list-item-title>
              <v-list-item-subtitle
                :class="disabled(resource) ? '' : 'text--primary'"
                v-text="resource.cost + ' gold coins'"
              ></v-list-item-subtitle>
              <v-list-item-subtitle v-text="resource.description"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn :disabled="disabled(resource)" x-large icon @click.stop="confirm = true">
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="i + 1 < resources.length" :key="i"></v-divider>
        </template>
      </v-list>
    </v-card-text>
    <ConfirmDialog
      :open="confirm"
      @no="confirm = false"
      @yes="confirm = false"
      :header="'Buy Resource'"
    />
    <DetailsDialog
      @close="activeResource = null"
      :open="activeResource !== null"
      :header="activeResource !== null ? activeResource.name : ''"
      :message="activeResource !== null ? activeResource.description : ''"
    />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options'
import Base from '@/model/bases/Base'
import ArcaneCandle from '@/model/bases/resources/ArcaneCandle'
import CarrierPidgeons from '@/model/bases/resources/CarrierPidgeons'
import CelestialTelescope from '@/model/bases/resources/CelestialTelescope'
import CrystalBall from '@/model/bases/resources/CrystalBall'
import EnchantersWorkshop from '@/model/bases/resources/EnchantersWorkshop'
import GiantCauldron from '@/model/bases/resources/GiantCauldron'
import Kennel from '@/model/bases/resources/Kennel'
import SarcophagusOfHealing from '@/model/bases/resources/SarcophagusOfHealing'
import Scriptorium from '@/model/bases/resources/Scriptorium'
import SummoningCircle from '@/model/bases/resources/SummoningCircle'
import ConfirmDialog from '@/dialogs/Confirm.vue'
import Resource from '@/model/bases/resources/Resource'
import DetailsDialog from '@/dialogs/Details.vue'

const resources = () => [
  new ArcaneCandle(),
  new CarrierPidgeons(),
  new CelestialTelescope(),
  new CrystalBall(),
  new EnchantersWorkshop(),
  new GiantCauldron(),
  new Kennel(),
  new SarcophagusOfHealing(),
  new Scriptorium(),
  new SummoningCircle()
]

export default Vue.extend({
  components: {
    ConfirmDialog,
    DetailsDialog
  },
  props: {
    base: {
      type: Base,
      required: true
    } as PropValidator<Base>,
    gold: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      resources: resources(),
      activeResource: null as Resource | null,
      confirm: false
    }
  },
  methods: {
    selectBase(base: Base) {
      this.$emit('select', base)
    },
    disabled(resource: Resource): boolean {
      return resource.cost > this.gold
    }
  }
})
</script>
