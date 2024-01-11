<template>
  <!-- <div class="flex gap-5 m-10 ">
    <input
      v-model="filterOfName"
      placeholder="Введите название"
      class="w-[200px] outline-none border-black border-2 border-solid rounded p-2"
    />
    <el-button @click="handleFilterSights" size="large">Найти</el-button>
  </div> -->
  <div class="flex gap-10 m-auto w-[1400px]">
    <el-scrollbar height="900px">
      <div class="flex flex-wrap gap-10 w-90">
        <el-card
          v-for="s in items"
          :key="s.id"
          class="w-[250px] h-[300px]"
          @click="setCoords(s)"
        >
          <img
            :src="s.image"
            class="image"
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

const items = ref(sight);

const setCoords = (s) => {
  let c = JSON.stringify(s.coords);
  localStorage.setItem('coords', c);
  store.coords = s.coords;
  router.push(`/sights/${s.id}`);
};
const store = useSightsStore();
// const filterOfName = ref('');

// const handleFilterSights = () => {
//   return items.value = items.value.filter((el) => el.name.includes(filterOfName));
// };
</script>

<style scoped>
.image {
  width: 100%;
  height: 138px;
  display: block;
}
</style>
