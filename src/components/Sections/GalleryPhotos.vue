<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

type GalleryPhotoPropsTypes = {
  gallery: string[];
};

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

// const onLoad = (): void => {
//   const initial: number = thumbnailRef.value.length - 1;
//   loading.value = true;

//   setTimeout(() => {
//     loading.value = false;
//     thumbnailRef.value = [
//       ...thumbnailRef.value,
//       ...props.gallery.filter(
//         (e: string, i: number) => i > initial && i <= initial + 4
//       ),
//     ];
//   }, 1500);
// };

onMounted(() => {
  if (props.gallery.length > 0) {
    imgsRef.value = [...props.gallery];
    thumbnailRef.value = [
      // ...props.gallery
      ...props.gallery.filter(
        (e: string, i: number) => ![1, 2, 3, 4, 5, 6, 7, 9, 10].includes(i)
      ),
    ];
  }
});
</script>

<template>
  <div class="flex flex-col bg-black">
    <div class="flex flex-col items-center bg-gallery-ov py-6">
      <div class="flex flex-row w-full justify-between items-center pl-4">
        <p
          data-aos="fade-right"
          data-aos-duration="2500"
          class="headline-1-local text-white"
        >
          Our
          <br />
          <span class="headline-1-local">Gallery</span>
        </p>
        <div class="w-1/2 border-t border-white"></div>
      </div>
      <div
        class="flex flex-col flex-wrap mt-10 overflow-hidden"
        style="max-height: 100vh"
      >
        <div
          class="flex flex-col px-2"
          v-for="(e, i) in imgsRef"
          :key="i"
          style="max-width: 50%"
        >
          <img
            data-aos-duration="2500"
            :src="e"
            @click="onShow(1 + 1)"
            class="mb-4 rounded-lg"
          />
        </div>

        <!-- <div class="grid grid-cols-2">
          <img
            :data-aos="handleAnimation(i)"
            data-aos-duration="2500"
            v-for="(e, i) in thumbnailRef"
            :key="i"
            @click="onShow(i + 1)"
            :src="e"
            class="p-1"
          />
        </div> -->
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
        <!-- <button
          class="button-date bg-linear-btn px-8 py-3 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all mt-4 mx-6"
          @click="onLoad()"
        >
          <p class="body-6 text-white">More Of Us</p>
        </button> -->
      </div>
      <p class="headline-2-local self-start ml-8 mt-2">
        Every Love Story Is Beautiful, But <br />
        Ours Is My Favorite
      </p>
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
.bg-gallery-ov {
  background: linear-gradient(143deg, rgba(0, 0, 0, 0.76) 0%, #ab738c 100%);
}
.bg-gallery {
  background-image: url("@/assets/images/bg-gallery.webp");
  background-size: cover;
}
.bg-linear-btn {
  background: linear-gradient(282.22deg, #000000 0%, #a98466 100%);
}

.headline-1-local {
  color: #fff;

  font-family: "Vidaloka";
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}

.headline-2-local {
  color: #fff;
  font-family: "Vidaloka";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
