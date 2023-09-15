<script setup lang="ts">
import ChevronLogo from "@/assets/right-chevron.svg";
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

type GalleryPhotoPropsTypes = {
  gallery: string[];
};

const imgsRef: Ref<string[]> = ref([]);
const thumbnailVerticalRef: Ref<string[]> = ref([]);
const thumbnailLandscapeRef: Ref<string[]> = ref([]);
const visibleRef: Ref<boolean> = ref(false);
const indexRef: Ref<number> = ref(0);
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
    // let midIndex = Math.ceil(imgsRef.value.length / 2);

    // imgsRef.value.forEach((e: string, i: number) => {
    imgsRef.value.forEach((e: string) => {
      thumbnailLandscapeRef.value = [...thumbnailLandscapeRef.value, e];
      //   if (i <= midIndex) {
      //     thumbnailVerticalRef.value = [...thumbnailVerticalRef.value, e];
      //   } else {
      //     thumbnailLandscapeRef.value = [...thumbnailLandscapeRef.value, e];
      //   }
      // });
    });
  }
});
</script>

<template>
  <div class="flex flex-col bg-white">
    <div class="flex flex-col items-center pt-2 pb-4 px-10">
      <div
        class="flex flex-col items-center bg-gallery-ov px-4 overflow-hidden"
      >
        <!-- Vertical Slider -->
        <div
          ref="containerImage"
          class="flex flex-row overflow-hidden relative"
        >
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
          class="flex flex-row overflow-hidden relative mt-8 rounded-xl"
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
            class="image-slide"
            :style="`transform: translateX(${slidingLandscape}px);`"
            :src="e"
            :key="i"
            @click="onShow(i)"
          />
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      class="flex flex-col mx-10"
    >
      <button
        @click="onShow(0)"
        class="bg-[#F8F4EA] border border-white mb-6 py-1.5 px-3 rounded-lg space-x-2.5 z-10"
      >
        <span class="body-2-local text-black text-center font-semibold">
          Lihat Lainnya
        </span>
      </button>
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
.image-slide {
  transition: transform 1s;
  object-fit: contain;
}
</style>
