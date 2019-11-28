<template>
  <div class="pb-3">
    <BaseList v-if="!wizard.base" @select="setBase" />
    <BaseComponent v-else :base="wizard.base" :gold="wizard.gold" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import BaseList from '@/components/base/BaseList.vue'
import BaseComponent from '@/components/base/Base.vue'
import Wizard from '@/model/wizards/Wizard'
import { PropValidator } from 'vue/types/options'
import Base from '@/model/bases/Base'

export default Vue.extend({
  props: {
    wizard: ({
      type: Wizard,
      required: true
    } as unknown) as PropValidator<Wizard>
  },
  components: {
    BaseList,
    BaseComponent
  },
  methods: {
    setBase(base: Base) {
      this.wizard.base = base
    }
  }
})
</script>
