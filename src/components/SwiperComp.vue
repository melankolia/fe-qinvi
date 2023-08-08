<template>
  <carousel :items-to-show="1" :autoplay="3000" :pauseAutoplayOnHover="true">
    <slide v-for="(img, i) in imgRef" :key="img">
      <img loading="lazy" :key="i" @click="onShow(i)" :src="img" class="p-1" />
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  props: ["imgRef"],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    onShow(index) {
      this.$emit("onShow", index);
    },
  },
};
</script>

<style>
.carousel__slide {
  padding: 10px;
}

.carousel__icon {
  color: white;
}
</style>
