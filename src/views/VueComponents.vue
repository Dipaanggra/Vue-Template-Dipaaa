<script setup>
import { ref, shallowRef } from 'vue'
import TabNavigation from '../components/Tab/TabNavigation.vue'
import ConditionalRendering from '../components/Component/ConditionalRendering.vue'
import ListRendering from '../components/Component/ListRendering.vue'

const active_tab = shallowRef({
  name: 'Conditional Rendering',
  component: ConditionalRendering
})
const tab_list = ref([
  {
    name: 'Conditional Rendering',
    component: ConditionalRendering
  },
  {
    name: 'List Rendering',
    component: ListRendering
  }
])
</script>

<template>
  <div class="flex flex-col h-full">
    <p class="mb-3">Vue Rendering</p>
    <!-- navigation -->
    <TabNavigation :tab-list="tab_list" v-model="active_tab" />
    <!-- content -->
    <div class="p-5 w-full h-full bg-white border rounded-xl">
      <KeepAlive>
        <component :is="active_tab.component"></component>
      </KeepAlive>
    </div>
  </div>
</template>
