<template>
  <div
    data-aos="zoom-in-up"
    data-aos-duration="1000"
    class="flex flex-col bg-[#5c2947] absolute right-4 bottom-24 rounded-full p-2 border border-white"
  >
    <button
      class="flex flex-col items-center"
      @click="
        () => {
          changeStatePlay();
        }
      "
    >
      <img
        v-if="isPlay"
        src="@/assets/icons/icon-pause.svg"
        width="18"
        height="18"
      />
      <img v-else src="@/assets/icons/icon-play.svg" width="18" height="18" />

      <audio id="myAudio" preload="auto" loop>
        <source :src="usedAudio" type="audio/mpeg" />
      </audio>
    </button>
  </div>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { ref, onMounted } from "vue";

const isPlay: Ref<boolean> = ref(false);
const usedAudio: Ref<string> = ref(
  "https://dashboard.qinvi.my.id/storage/Baby%20Shark.mp3"
);

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
