<template>
  <div class="flex flex-col items-center bg-[#F3F0EB] px-2 py-6 min-h-[140px]">
    <p class="caption-local text-[#8D7C6A] mt-8 mb-4">QINVI</p>
    <div class="flex flex-row mb-20 space-x-2">
      <img @click="handleClickIG" src="@/assets/icons/icon-ig.png" width="32" />
      <img @click="handleClickWA" src="@/assets/icons/icon-wa.png" width="32" />
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClickIG = (): void => {
  window.open("https://www.instagram.com/qinvi.id/");
};

const handleClickWA = (): void => {
  window.open("");
};
</script>

<style scoped>
.caption-local {
  font-family: "TAN - PEARL";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
