<template>
  <div class="flex flex-row space-x-3 my-6 z-30">
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-white rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1 text-blue-10">{{ days }}</p>
      <p class="caption-1 text-blue-10">Hari</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-white rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1 text-blue-10">{{ hours }}</p>
      <p class="caption-1 text-blue-10">Jam</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-white rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1 text-blue-10">{{ minutes }}</p>
      <p class="caption-1 text-blue-10">Menit</p>
    </div>
    <div
      class="flex flex-col items-center py-2 px-3.5 bg-white rounded-lg"
      style="max-width: 54px"
    >
      <p class="body-1 text-blue-10">{{ seconds }}</p>
      <p class="caption-1 text-blue-10">Detik</p>
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
