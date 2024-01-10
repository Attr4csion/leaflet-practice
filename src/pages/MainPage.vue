<template>
  <div class="flex gap-10">
    <div class="flex flex-wrap gap-10">
    <el-card v-for="s in sight" :key="s.id">
    <img :src="s.image">
    <p>{{ s.name }}</p>
  </el-card>
  </div>
  <div>
    <TheMap></TheMap>
  </div>
  </div>

</template>

<script setup lang="ts">
import TheMap from '../components/TheMap.vue'
import sight from '@/assets/sight.json'
</script>

<style scoped></style>
