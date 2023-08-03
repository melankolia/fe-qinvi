<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Ref } from "vue";

type GalleryPhotoPropsTypes = {
  gallery: string[];
};

const firstPhotos: Ref<string> = ref("/src/assets/images/Hug.png");
const lastPhotos: Ref<string> = ref("/src/assets/images/Hug.png");
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
        (e: string, i: number) => i > initial && i <= initial + 4
      ),
    ];
  }, 1500);
};

onMounted(() => {
  if (props.gallery.length > 0) {
    imgsRef.value = [...props.gallery];
    thumbnailRef.value = [
      ...props.gallery.filter(
        (e: string, i: number) => i != 0 && i != lastIndex.value && i <= 5
      ),
    ];
    firstPhotos.value = imgsRef.value[0];
    lastPhotos.value = imgsRef.value[lastIndex.value];
  }
});

const lastIndex = computed(() => {
  return imgsRef.value.length - 1;
});
</script>

<template>
  <div class="flex flex-col items-center bg-blue-10 px-10 py-6">
    <img class="my-11" src="@/assets/images/logo-wedding-2.png" width="114" />
    <p
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      class="caption-local text-white text-center mb-8"
    >
      “And I knew exactly how old Walt Disney’s Cinderella felt when she found
      her prince.” <br />
      —Elizabeth Young
    </p>
    <div class="flex flex-col items-center bg-gallery-ov p-4">
      <!-- <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-19 text-white mb-8 font-extralight"
        >
          GALLERY
        </p> -->
      <img
        data-aos="fade-down"
        data-aos-duration="2500"
        @click="onShow(0)"
        :src="firstPhotos"
        class="z-30 my-4"
      />
      <div class="grid grid-cols-2">
        <img
          :data-aos="handleAnimation(i)"
          data-aos-duration="2500"
          v-for="(e, i) in thumbnailRef"
          loading="lazy"
          :key="i"
          @click="onShow(i + 1)"
          :src="e"
          class="p-1"
        />
      </div>
      <img
        data-aos="fade-down"
        data-aos-duration="2500"
        @click="onShow(lastIndex)"
        :src="lastPhotos"
        class="z-30 my-4"
      />
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
