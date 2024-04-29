<script setup>
defineProps(['tabList'])
const active = defineModel()
</script>
<template>
  <div class="flex w-fit rounded-lg bg-gray-100 overflow-hidden mb-2 p-1">
    <button
      v-for="menu in tabList"
      :key="menu"
      class="px-10 py-2 text-sm rounded-md font-semibold"
      @click="active = menu"
      :class="active.name == menu.name ? 'bg-white' : 'bg-transparent text-gray-500'"
    >
      {{ menu.name }}
    </button>
  </div>
</template>
