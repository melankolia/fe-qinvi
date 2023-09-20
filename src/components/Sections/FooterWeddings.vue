<template>
  <div
    class="flex flex-col bg-container items-center justify-center px-5 relative"
  >
    <img
      data-aos="fade-up"
      data-aos-duration="2500"
      width="85"
      height="78"
      src="@/assets/images/logo-wedding-2.webp"
      alt="Qinvi Wedding Icon"
      class="mb-12"
    />
    <p
      data-aos="fade-down"
      data-aos-duration="2500"
      class="body-3 text-[#8D7C6A] font-medium mb-32"
    >
      Kehadiran Bapak/Ibu/Saudara/i di acara kami akan menjadi suatu kebahagiaan
      dan kehormatan yang tidak terlupakan bagi kami. Terima kasih atas restu
      dan dukungannya.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-container {
  background-image: url("@/assets/images/bg-thanks.webp");
  background-size: cover;
  background-position: center;
  height: 580px;
}
</style>
