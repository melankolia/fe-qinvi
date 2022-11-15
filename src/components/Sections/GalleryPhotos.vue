<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

type GalleryPhotoPropsTypes = {
  gallery: string[];
};

const firstPhotos: Ref<string> = ref("/src/assets/images/Hug.png");
const imgsRef: Ref<string[]> = ref([]);
const visibleRef: Ref<boolean> = ref(false);
const indexRef: Ref<number> = ref(0);
const props = defineProps<GalleryPhotoPropsTypes>();

const onShow = (): void => {
  imgsRef.value = [...props.gallery];
  visibleRef.value = true;
  indexRef.value = 0;
};

const onHide = (): void => {
  visibleRef.value = false;
};

onMounted(() => {
  if (props.gallery.length > 0) {
    firstPhotos.value = props.gallery[0];
  }
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center py-6 relative bg-brown-10">
      <p class="headline-3 text-green-20 mb-9">GALLERY</p>
      <img src="@/assets/images/Flower3.png" class="absolute w-full h-full" />
      <img @click="onShow" :src="firstPhotos" class="z-30 px-12" />
      <div class="flex flex-col items-center mt-6">
        <button
          class="button-date bg-brown-70 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 z-10"
          @click="onShow"
        >
          <p class="body-2 text-white">Lihat Gallery</p>
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
