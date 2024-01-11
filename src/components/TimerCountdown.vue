<template>
  <div class="flex flex-row space-x-1.5 z-30">
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="width: 66px"
    >
      <p class="body-5 text-white mb-1">{{ days }}</p>
      <p class="caption-12 text-white">Hari</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="width: 66px"
    >
      <p class="body-5 text-white mb-1">{{ hours }}</p>
      <p class="caption-12 text-white">Jam</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="width: 66px"
    >
      <p class="body-5 text-white mb-1">{{ minutes }}</p>
      <p class="caption-12 text-white">Menit</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="width: 66px"
    >
      <p class="body-5 text-white mb-1">{{ seconds }}</p>
      <p class="caption-12 text-white">Detik</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface CountDownTypes {
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
}

defineProps<CountDownTypes>();
</script>

<style scoped>
.bg-linear {
  background: rgba(255, 255, 255, 0.58);
}
</style>
