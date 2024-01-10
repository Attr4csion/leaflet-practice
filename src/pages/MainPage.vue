<template>
  <!-- <div class="flex flex-col h-screen max-h-screen">
    <div class="flex justify-between relative px-4 pt-8 pb-32"></div>

    <div class="w-full max-w-screen-sm">
      <h1 class="text-center text-3xl pb-4">ID address tracker</h1>
      <div class="flex">
        <input
          class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
          type="text"
          placeholder="Search for IP"
        />
      </div>
    </div>
  </div> -->
  <div>
    <TheMap></TheMap>
  </div>
</template>

<script setup lang="ts">
import TheMap from '../components/TheMap.vue'
</script>

<style scoped></style>
