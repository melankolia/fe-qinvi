<script setup lang="ts">
import type { Ref } from "vue";
import { ref, onMounted } from "vue";

const isPlay: Ref<boolean> = ref(false);
const usedAudio: Ref<string> = ref(
  "https://dashboard.qinvi.my.id/storage/Yovie%20&%20Nuno%20-%20Janji%20Suci.mp3"
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
<template>
  <div
    class="flex flex-row fixed bottom-2 bg-white menus-shadow z-50 justify-around py-2.5 rounded-full sm:right-1/3 sm:left-1/3 right-2 left-2"
  >
    <button
      class="flex flex-col items-center px-1"
      @click="() => emit('fnClick', 'welcomeSection')"
    >
      <img
        src="@/assets/icons/icon-home.png"
        width="18"
        height="15.5"
        class="pb-2"
      />
      <p class="caption-1 text-blue-10">Home</p>
    </button>
    <button
      class="flex flex-col items-center px-1"
      @click="() => emit('fnClick', 'mempelaiSection')"
    >
      <img
        src="@/assets/icons/icon-mempelai.png"
        width="18"
        height="18"
        class="pb-2"
      />
      <p class="caption-1 text-blue-10">Mempelai</p>
    </button>
    <button
      class="flex flex-col items-center px-1"
      @click="() => emit('fnClick', 'acaraSection')"
    >
      <img
        src="@/assets/icons/icon-calendar.png"
        width="18"
        height="18"
        class="pb-2"
      />
      <p class="caption-1 text-blue-10">Acara</p>
    </button>
    <button
      class="flex flex-col items-center px-1"
      @click="() => emit('fnClick', 'gallerySection')"
    >
      <img
        src="@/assets/icons/icon-gallery.png"
        width="18"
        height="18"
        class="pb-2"
      />
      <p class="caption-1 text-blue-10">Gallery</p>
    </button>
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

      <p class="caption-1 text-blue-10">{{ isPlay ? "Pause" : "Play" }}</p>
      <audio id="myAudio" preload="auto">
        <source :src="usedAudio" type="audio/mpeg" />
      </audio>
    </button>
  </div>
</template>

<style scoped>
.menus-shadow {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 2px 20px rgba(0, 0, 0, 0.05);
}
</style>
