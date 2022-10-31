<template>
  <div
    class="flex flex-row fixed bottom-2 right-4 left-4 bg-white menus-shadow z-40 justify-between py-2.5 rounded-full"
  >
    <button class="flex flex-col items-center px-6">
      <img
        src="@/assets/icons/icon-home.png"
        width="18"
        height="15.5"
        class="pb-2"
      />
      <p class="caption-1 text-brown-70">Home</p>
    </button>
    <button class="flex flex-col items-center px-6">
      <img
        src="@/assets/icons/icon-mempelai.png"
        width="18"
        height="18"
        class="pb-2"
      />
      <p class="caption-1 text-brown-70">Mempelai</p>
    </button>
    <button class="flex flex-col items-center px-6">
      <img
        src="@/assets/icons/icon-calendar.png"
        width="18"
        height="18"
        class="pb-2"
      />
      <p class="caption-1 text-brown-70">Acara</p>
    </button>
    <button class="flex flex-col items-center px-6">
      <img
        src="@/assets/icons/icon-gallery.png"
        width="18"
        height="18"
        class="pb-2"
      />
      <p class="caption-1 text-brown-70">Gallery</p>
    </button>
  </div>
</template>

<style scoped>
.menus-shadow {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 2px 20px rgba(0, 0, 0, 0.05);
}
</style>
