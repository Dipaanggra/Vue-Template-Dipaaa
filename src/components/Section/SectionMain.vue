<script setup>
import SectionSidebar from './SectionSidebar.vue'
</script>

<template>
  <div class="flex gap-5 w-full h-full">
    <SectionSidebar />
    <div class="rounded-xl p-5 w-full h-full bg-white border overflow-auto">
      <slot />
    </div>
  </div>
</template>
