<template>
  <div class="w-[90%] h-[90%] mx-auto flex gap-20">
    <el-button @click="router.push('/')">Назад</el-button>
    <div class="flex flex-col gap-5 w-[700px] p-10 h-fit bg-gray-100 rounded">
      <img :src="currentSight?.image" class="image"/>
      <p>{{ currentSight?.name }}</p>
      <p>
        {{ currentSight?.description }}
      </p>
    </div>
    <TheMap></TheMap>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import sight from '@/assets/sight.json';
import TheMap from '../components/TheMap.vue';
import router from '@/router';

const { params } = useRoute();
const currentSight = sight.find((el) => el.id == params.id);
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
</style>
