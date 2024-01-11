<template>
  <div class="flex gap-10 m-auto w-[1400px]">
    <el-scrollbar height="900px">
      <div class="flex flex-wrap gap-10 w-90">
        <el-card
          v-for="s in sight"
          :key="s.id"
          class="w-[250px] h-[300px]"
          @click="setCoords(s)"
        >
          <img
            :src="s.image"
            class="h-[138px]"
          />
          <p>{{ s.name }}</p>
        </el-card>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import sight from '@/assets/sight.json';
import router from '@/router';
import { useSightsStore } from '@/sights-store';

const setCoords = (s) => {
  let c = JSON.stringify(s.coords);
  localStorage.setItem('coords', c);
  store.coords = s.coords;
  router.push(`/sights/${s.id}`);
};
const store = useSightsStore();
</script>

<style scoped>
#img {
  width: 100px;
  height: 75px;
}
</style>
