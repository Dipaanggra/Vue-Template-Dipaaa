<script setup>
import ButtonPrimary from '@/components/Button/ButtonPrimary.vue'
import { useStockStore } from '../stores/stock.store'
const store = useStockStore()
</script>

<template>
  <div>
    <p class="pb-3">Stock Management</p>
    <div class="border rounded-lg">
      <table class="w-full table-auto">
        <!-- table Head -->
        <tr class="bg-gray-100 border-b">
          <td class="px-5 py-2 font-semibold">NAME</td>
          <td class="px-5 py-2 font-semibold">QUANTITY</td>
          <td class="px-5 py-2 font-semibold ">ACTION</td>
        </tr>
        <!-- table Data -->
        <tbody class="divide-y">
          <tr class="hover:bg-gray-100"
            v-for="(stock, index) in store.stock_list" :key="index">
            <td class="px-5 py-2">{{ stock.name }}</td>
            <td class="px-5 py-2">{{ stock.qty }}</td>
            <td class="px-5 py-2">
              <ButtonPrimary @click="store.decreaseStock(index)" class="mr-2"> - </ButtonPrimary>
              <ButtonPrimary @click="store.increaseStock(index)"> + </ButtonPrimary>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
