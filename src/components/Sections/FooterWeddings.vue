<template>
  <div
    class="flex flex-col bg-container items-center justify-end p-10 relative"
  >
    <div
      class="flex flex-col items-center"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <img class="mt-5" src="@/assets/images/logo-wedding-2.png" width="114" />
      <p class="headline-local-1">#BeMineforever</p>
      <p class="headline-local-2">Sampai bertemu di hari pernikahan!</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-container {
  background-image: url("@/assets/images/bg-thanks.webp");
  background-size: cover;
  background-position: center;
  height: 949px;
}

.headline-local-1 {
  color: #fff;
  text-align: center;
  font-family: "EB Garamond";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
}

.headline-local-2 {
  color: #fff;
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
}
</style>
