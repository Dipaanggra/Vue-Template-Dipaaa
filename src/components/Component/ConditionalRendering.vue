<script setup>
import { ref } from 'vue'
import ButtonPrimary from '../Button/ButtonPrimary.vue'
const show_data = ref(false)
</script>

<template>
  <div>
    <ButtonPrimary @click="show_data = !show_data">
      {{ show_data ? 'hide' : 'show' }}
    </ButtonPrimary>
    <p v-if="show_data">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus voluptas aliquam
      ut illo porro sequi dolores provident quam cupiditate magni at ratione id facere sint
      voluptates, perferendis nulla voluptatibus!
    </p>
  </div>
</template>
