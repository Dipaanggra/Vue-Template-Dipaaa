<script setup>
import { RouterView } from 'vue-router'

import SectionNavbar from './components/Section/SectionNavbar.vue'
import SectionMain from './components/Section/SectionMain.vue'
import SectionFooter from './components/Section/SectionFooter.vue'
</script>

<template>
  <div class="flex flex-col gap-5 w-screen h-screen">
    <!-- navbar -->
    <SectionNavbar />
    <!-- main content -->
    <SectionMain>
      <RouterView />
    </SectionMain>
    <!-- footer -->
    <SectionFooter />
  </div>
</template>
