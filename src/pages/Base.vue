<template>
  <div class="pb-3">
    <BaseList v-if="!warband.base" @select="setBase" />
    <BaseComponent v-else :base="warband.base" :gold="warband.gold" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import BaseList from '@/components/base/BaseList.vue'
import BaseComponent from '@/components/base/Base.vue'
import Wizard from '@/model/wizards/Wizard'
import { PropValidator } from 'vue/types/options'
import Base from '@/model/bases/Base'
import Warband from '../model/Warband'

export default Vue.extend({
  props: {
    warband: {
      type: Warband as new () => Warband,
      required: true
    }
  },
  components: {
    BaseList,
    BaseComponent
  },
  methods: {
    setBase(base: Base) {
      this.warband.base = base
    }
  }
})
</script>
