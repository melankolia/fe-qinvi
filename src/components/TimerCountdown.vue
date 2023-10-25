<template>
  <div class="flex flex-row justify-center space-x-6 z-30">
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1-local text-white mb-1">{{ days }}</p>
      <p class="caption-1-local text-white">Days</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1-local text-white mb-1">{{ hours }}</p>
      <p class="caption-1-local text-white">Hours</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1-local text-white mb-1">{{ minutes }}</p>
      <p class="caption-1-local text-white">Minutes</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1-local text-white mb-1">{{ seconds }}</p>
      <p class="caption-1-local text-white">Seconds</p>
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

const props = defineProps<CountDownTypes>();
</script>

<style scoped>
.body-1-local {
  text-align: center;
  font-family: "Inter";
  font-size: 30.9px;
  font-style: normal;
  font-weight: 400;
  line-height: 30.9px;
}

.caption-1-local-local {
  text-align: center;
  font-family: "Poppins";
  font-size: 13.55px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
