<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

type GalleryPhotoPropsTypes = {
  gallery: string[];
};

const firstPhotos: Ref<string> = ref("/src/assets/images/Hug.png");
const imgsRef: Ref<string[]> = ref([]);
const thumbnailRef: Ref<string[]> = ref([]);
const visibleRef: Ref<boolean> = ref(false);
const indexRef: Ref<number> = ref(0);
const loading: Ref<boolean> = ref(false);
const props = defineProps<GalleryPhotoPropsTypes>();

const onShow = (index: number = 0): void => {
  visibleRef.value = true;
  indexRef.value = index;
};

const onHide = (): void => {
  visibleRef.value = false;
};

const onLoad = (): void => {
  const initial: number = thumbnailRef.value.length;
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    thumbnailRef.value = [
      ...thumbnailRef.value,
      ...props.gallery.filter(
        (e: string, i: number) => i != 0 && i > initial && i <= initial + 4
      ),
    ];
  }, 1500);
};

onMounted(() => {
  if (props.gallery.length > 0) {
    imgsRef.value = [...props.gallery];
    thumbnailRef.value = [
      ...props.gallery.filter((e: string, i: number) => i != 0 && i <= 4),
    ];
    firstPhotos.value = imgsRef.value[0];
  }
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center py-6 relative bg-[#EEF1F3]">
      <p class="headline-6 text-blue-10 mb-9">Gallery</p>
      <img @click="onShow(0)" :src="firstPhotos" class="z-30" />
      <div class="grid grid-cols-2">
        <img
          v-for="(e, i) in thumbnailRef"
          loading="lazy"
          :key="i"
          @click="onShow(i + 1)"
          :src="e"
        />
      </div>
      <div v-if="loading" class="flex flex-col items-center">
        <svg
          class="animate-spin mb-4 mt-6 h-8 w-8 text-blue-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col items-center mt-6">
        <button
          class="button-date border border-white bg-blue-10 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 z-10"
          @click="onLoad()"
        >
          <p class="body-2 text-white">Lihat Potret Kami</p>
        </button>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>
