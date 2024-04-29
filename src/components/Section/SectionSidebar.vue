<script setup>
import SidebarLink from '../Button/SidebarLink.vue'
</script>

<template>
  <div class="flex-none rounded-xl p-5 h-full w-1/4 bg-white border">
    <p>Menu</p>
    <div class="grid content-start py-3">
      <SidebarLink
        v-for="(route, index) in $router.options.routes"
        :to="route.path"
        :name="route.name"
        :key="index"
      />

    </div>
  </div>
</template>
