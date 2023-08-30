<script setup lang="ts">
import ChevronLogo from "@/assets/right-chevron.svg";

import { ref, onMounted } from "vue";
import type { Ref } from "vue";
// import Swiper from "../../components/SwiperComp.vue";

type GalleryPhotoPropsTypes = {
  gallery: string[];
};

const imgsRef: Ref<string[]> = ref([]);
const thumbnailVerticalRef: Ref<string[]> = ref([]);
const thumbnailLandscapeRef: Ref<string[]> = ref([]);
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

// Vertical Slider
const image: Ref<HTMLElement | null> = ref(null);
const containerImage: Ref<HTMLElement | null> = ref(null);

const sliding: Ref<number> = ref(0);
const handleNext = (): void => {
  const containerWidth: number =
    (containerImage.value && containerImage.value.offsetWidth) || 0;

  if (
    sliding.value * -1 ==
    containerWidth * (thumbnailVerticalRef.value.length - 1)
  )
    return;

  sliding.value -= containerWidth;
};

const handlePrev = (): void => {
  if (sliding.value >= 0) return;

  const containerWidth: number =
    (containerImage.value && containerImage.value.offsetWidth) || 0;
  sliding.value += containerWidth;
};

// Landscape Slider
const containerImage2: Ref<HTMLElement | null> = ref(null);
const slidingLandscape: Ref<number> = ref(0);
const handleNextLandscape = (): void => {
  const containerWidth: number =
    (containerImage2.value && containerImage2.value.offsetWidth) || 0;

  if (
    slidingLandscape.value * -1 ==
    containerWidth * (thumbnailLandscapeRef.value.length - 1)
  )
    return;

  slidingLandscape.value -= containerWidth;
};

const handlePrevLandscape = (): void => {
  if (slidingLandscape.value >= 0) return;

  const containerWidth: number =
    (containerImage2.value && containerImage2.value.offsetWidth) || 0;
  slidingLandscape.value += containerWidth;
};

onMounted(() => {
  // setTimeout(() => {
  //   image1.value && image1.value.classList.add("translateX");
  //   image2.value && image2.value.classList.add("translateX");
  // }, 3000);
  if (props.gallery.length > 0) {
    imgsRef.value = [...props.gallery];
    let midIndex = Math.ceil(imgsRef.value.length / 2);

    imgsRef.value.forEach((e: string, i: number) => {
      if (i <= midIndex) {
        thumbnailVerticalRef.value = [...thumbnailVerticalRef.value, e];
      } else {
        thumbnailLandscapeRef.value = [...thumbnailLandscapeRef.value, e];
      }
    });
  }
});
</script>

<template>
  <div class="flex flex-col items-center bg-blue-10 px-10 py-6">
    <img class="my-11" src="@/assets/images/logo-wedding-2.png" width="114" />
    <div
      class="flex flex-col items-center bg-gallery-ov p-4 overflow-hidden my-8"
    >
      <!-- Vertical Slider -->
      <div ref="containerImage" class="flex flex-row overflow-hidden relative">
        <div
          class="flex flex-col justify-center absolute left-0 top-0 bottom-0 my-auto"
        >
          <button
            @click="handlePrev"
            class="button-date py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 z-10"
          >
            <img :src="ChevronLogo" width="24" class="rotate-180" />
          </button>
        </div>
        <div
          class="flex flex-col justify-center absolute right-0 top-0 bottom-0 my-auto"
        >
          <button
            @click="handleNext"
            class="button-date py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 z-10"
          >
            <img :src="ChevronLogo" width="24" />
          </button>
        </div>

        <img
          v-for="(e, i) in thumbnailVerticalRef"
          ref="image"
          class="image-slide rounded-xl"
          :style="`transform: translateX(${sliding}px);`"
          :src="e"
          :key="i"
          @click="onShow(i)"
        />
      </div>
      <!-- Landscape Slider -->
      <div
        ref="containerImage2"
        class="flex flex-row overflow-hidden relative mt-8"
      >
        <div
          class="flex flex-col justify-center absolute left-0 top-0 bottom-0 my-auto"
        >
          <button
            @click="handlePrevLandscape"
            class="button-date py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 z-10"
          >
            <img :src="ChevronLogo" width="24" class="rotate-180" />
          </button>
        </div>
        <div
          class="flex flex-col justify-center absolute right-0 top-0 bottom-0 my-auto"
        >
          <button
            @click="handleNextLandscape"
            class="button-date py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 z-10"
          >
            <img :src="ChevronLogo" width="24" />
          </button>
        </div>

        <img
          v-for="(e, i) in thumbnailLandscapeRef"
          ref="image"
          class="image-slide rounded-xl"
          :style="`transform: translateX(${slidingLandscape}px);`"
          :src="e"
          :key="i"
          @click="onShow(i)"
        />
      </div>
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
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<style scoped>
.caption-local {
  color: #e8eced;
  text-align: center;
  font-family: "EB Garamond";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 150% */
}

.image-slide {
  transition: transform 1s;
  object-fit: contain;
}
</style>
