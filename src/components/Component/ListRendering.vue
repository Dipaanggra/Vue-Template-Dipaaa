<script setup>
import { ref } from 'vue'
import ButtonPrimary from '../Button/ButtonPrimary.vue'
const todo_list = ref([
  {
    name: 'Todo 1',
    is_finish: false
  },
  {
    name: 'Todo 2',
    is_finish: false
  },
  {
    name: 'Todo 3',
    is_finish: false
  },
  {
    name: 'Todo 4',
    is_finish: false
  },
  {
    name: 'Todo 5',
    is_finish: false
  }
])
</script>

<template>
  <div>
    <ul>
      <li
        class="flex gap-2 items-center mb-2 bg-white border hover:bg-gray-100 px-4 py-2 rounded-lg"
        v-for="(todo, index) in todo_list"
        :key="index"
      >
        <input
        class="rounded"
          type="checkbox"
          :name="`todo-${index}`"
          :id="`todo-${index}`"
          v-model="todo_list[index].is_finish"
        />
        <label
          :for="`todo-${index}`"
          class="text-sm flex-grow"
          :class="{ 'text-gray-400': todo.is_finish }"
        >
          {{ todo.name }}
        </label>
        <ButtonPrimary @click="todo_list.splice(index, 1)">Delete</ButtonPrimary>
      </li>
    </ul>
  </div>
</template>
