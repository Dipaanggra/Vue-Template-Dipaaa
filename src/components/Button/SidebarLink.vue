<script setup>
defineProps(['to', 'name'])
</script>
<template>
  <router-link
    :class="$route.name == name ? 'bg-gray-900 text-white mb-2 mt-2' : 'bg-white text-black hover:bg-gray-100'"
    class="text-sm py-2 px-5 rounded-lg"
    :to="to"
  >
    {{ name }}
  </router-link>
</template>
