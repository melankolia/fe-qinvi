<template>
  <button
    class="flex flex-col items-center px-1"
    @click="
      () => {
        changeStatePlay();
        emit('fnClick', 'playMusic');
      }
    "
    style="min-width: 42px"
  >
    <img
      v-if="isPlay"
      src="@/assets/icons/icon-pause.svg"
      width="18"
      height="18"
      class="pb-2"
    />
    <img
      v-else
      src="@/assets/icons/icon-play.svg"
      width="18"
      height="18"
      class="pb-2"
    />

    <p class="caption-1 text-brown-10">{{ isPlay ? "Pause" : "Play" }}</p>
    <audio id="myAudio" preload="auto">
      <source :src="usedAudio" type="audio/mpeg" />
    </audio>
  </button>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { ref, onMounted } from "vue";

const isPlay: Ref<boolean> = ref(false);
const usedAudio: Ref<string> = ref(
  "https://dashboard.qinvi.my.id/storage/Gambang%20Semarang.mp3"
);
const emit = defineEmits<{
  (e: "fnClick", value: string): void;
}>();

onMounted(() => {
  changeStatePlay();
});

const changeStatePlay = (): void => {
  const myAudio = document.getElementById("myAudio") as HTMLVideoElement | null;
  if (myAudio) {
    isPlay.value == true ? myAudio?.pause() : myAudio?.play();
    isPlay.value = !isPlay.value;
  }
};
</script>
<style lang=""></style>
