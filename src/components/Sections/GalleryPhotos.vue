<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Ref } from "vue";
import Swiper from "../../components/SwiperComp.vue";

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

onMounted(() => {
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
      class="flex flex-col items-center bg-gallery-ov p-4 overflow-hidden mt-8"
    >
      <div style="max-width: 363px !important; overflow: hidden !important">
        <Swiper
          :imgRef="thumbnailVerticalRef"
          @onShow="(e: any) => onShow(e)"
        />
      </div>
      <div
        class="mt-8"
        style="max-width: 363px !important; overflow: hidden !important"
      >
        <Swiper
          :imgRef="thumbnailLandscapeRef"
          @onShow="(e: any) => onShow(e)"
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
</style>
