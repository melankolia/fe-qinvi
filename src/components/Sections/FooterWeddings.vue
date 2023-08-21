<template>
  <div class="bg-container relative">
    <div
      class="bg-container-overlay flex flex-col items-center justify-center px-10"
    >
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="body-3 text-white font-medium mb-32"
      >
        Kehadiran Bapak/Ibu/Saudara/i di acara kami akan menjadi suatu
        kebahagiaan dan kehormatan yang tidak terlupakan bagi kami. Terima kasih
        atas restu dan dukungannya.
      </p>
      <img
        data-aos="fade-up"
        data-aos-duration="2500"
        width="85"
        height="78"
        src="@/assets/images/icon-sincan-2.png"
        alt="Qinvi Wedding Icon"
        class="absolute top-12"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-container-overlay {
  height: 640px;
  background: rgba(0, 0, 0, 0.5) !important;
}
.bg-container {
  background-image: url("https://ik.imagekit.io/qinvi/AhmadHusna/319B63A1-DDF1-45B3-8531-1E7733DCEB19.JPG?updatedAt=1692603206664");
  background-size: cover;
  background-position: center;
  height: 640px;
}
</style>
