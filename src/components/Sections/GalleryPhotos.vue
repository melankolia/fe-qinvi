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

const handleAnimation = (i: number): string => {
  if (i % 2 == 0) return "fade-down";
  return "fade-right";
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
  <div class="flex flex-col bg-green-30">
    <div class="flex flex-col items-center py-6 relative bg-green-30 px-10">
      <img
        src="@/assets/images/left-flower-gallery.webp"
        width="135"
        class="absolute left-0 top-5"
      />
      <img
        src="@/assets/images/right-bot-flower-gallery.webp"
        width="230"
        class="absolute right-0 bottom-0"
      />
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-14 text-white mb-8"
      >
        GALLERY
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="2500"
        class="caption-9 text-white text-center mb-6"
      >
        A successful marriage requires falling in love many times, always with
        the same person
      </p>
      <div class="grid grid-cols-1 gap-2 mb-1 mx-1">
        <img
          data-aos="fade-down p-1"
          data-aos-duration="2500"
          :src="imgsRef[0]"
          @click="onShow(0 + 1)"
        />
      </div>
      <div class="grid grid-cols-2">
        <img
          :data-aos="handleAnimation(i)"
          data-aos-duration="2500"
          v-for="(e, i) in thumbnailRef"
          :key="i"
          @click="onShow(i + 1)"
          :src="e"
          class="p-1"
        />
      </div>
      <div v-if="loading" class="flex flex-col items-center">
        <svg
          class="animate-spin mb-4 mt-6 h-8 w-8 text-white"
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
      <button
        class="button-date w-full mt-6 border border-white bg-yellow-20 py-1.5 px-3 rounded-2xl space-x-2.5 z-10 drop-shadow-md"
        @click="onLoad()"
      >
        <p class="body-2 text-black">Lihat Potret Kami</p>
      </button>

      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-14 text-white mt-10 mb-8"
      >
        PREWEDDING
      </p>
      <iframe
        data-aos="fade-up"
        data-aos-duration="2500"
        width="100%"
        height="217"
        src="https://www.youtube.com/embed/ncF2W8ooUg0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="rounded-lg mb-4"
      />
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>
