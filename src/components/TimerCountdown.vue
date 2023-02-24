<template>
  <div class="flex flex-row space-x-3 my-6 z-30">
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-black rounded-2xl"
      style="width: 54px"
    >
      <p class="body-1 text-white mb-2">{{ days }}</p>
      <p class="caption-1 text-white">Days</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-black rounded-2xl"
      style="width: 54px"
    >
      <p class="body-1 text-white mb-2">{{ hours }}</p>
      <p class="caption-1 text-white">Hours</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-black rounded-2xl"
      style="width: 54px"
    >
      <p class="body-1 text-white mb-2">{{ minutes }}</p>
      <p class="caption-1 text-white">Minutes</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-black rounded-2xl"
      style="width: 54px"
    >
      <p class="body-1 text-white mb-2">{{ seconds }}</p>
      <p class="caption-1 text-white">Seconds</p>
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
