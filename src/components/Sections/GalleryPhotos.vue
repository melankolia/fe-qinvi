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
      <div
        class="flex flex-col items-center bg-gallery-ov p-4 overflow-hidden my-8"
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
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>
