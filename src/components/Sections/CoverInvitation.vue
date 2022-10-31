<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import images from "@/assets/images/cover.png";
import TimerCountDown from "@/components/TimerCountdown.vue";

const CoverImage: Ref<string> = ref(images);
</script>

<template>
  <div class="flex flex-col h-screen">
    <div
      class="w-full h-2/3 md:h-2/3 bg-center bg-cover"
      :style="`background-image: url(${CoverImage})`"
    />
    <div
      class="relative h-1/3 md:h-1/3 flex flex-col justify-center items-center bg-brown-10"
    >
      <p class="caption-1 text-brown-70">We invite you to join our wedding</p>
      <div class="flex flex-row items-center space-x-3">
        <p class="headline-1 text-brown-70">EMMA</p>
        <p class="headline-2 text-brown-70">and</p>
        <p class="headline-1 text-brown-70">JAMES</p>
      </div>
      <p class="caption-1 text-brown-70">Sunday, 11 December 2022</p>
      <img src="@/assets/images/Flower1.png" class="absolute w-full h-full" />
      <TimerCountDown />
      <button
        class="button-date bg-brown-70 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
      >
        <img
          src="@/assets/icons/icon-calendar.png"
          class="brightness-0 invert"
          height="18"
          width="18"
        />
        <p class="body-2 text-white">Save the Date</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.button-date {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
