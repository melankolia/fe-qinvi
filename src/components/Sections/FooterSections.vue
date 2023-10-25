<template>
  <div
    class="footer-container relative flex flex-col items-center justify-between bg-black px-10 py-6 min-h-[980px] overlay"
  >
    <div class="absolute top-0 left-0 bg-black opacity-60 h-full w-full" />
    <div class="flex flex-col mt-16 z-10">
      <p class="title-1-local">The Wedding Day</p>
      <p class="title-2-local mt-10">
        Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia
        Tuhan, kami hendak menyampaikan kabar bahagia pernikahan kami
      </p>
    </div>
    <img src="@/assets/images/p-footer-fairy.webp" class="z-10" />
    <div class="flex flex-col items-center z-10">
      <p class="caption-local text-white mt-8 mb-6">QINVI</p>
      <div class="flex flex-row space-x-2 mb-20">
        <img src="@/assets/icons/icon-ig.png" width="32" />
        <img src="@/assets/icons/icon-wa.png" width="32" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background-image: url("@/assets/images/bg-footer.webp");
  background-size: cover;
}
.caption-local {
  font-family: "TAN - PEARL";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title-1-local {
  color: #fff;
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 33.9px;
  font-style: normal;
  font-weight: 400;
  line-height: 53px; /* 156.342% */
}

.title-2-local {
  color: #fff;
  text-align: center;
  font-family: "EB Garamond";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.57px; /* 117% */
}
</style>
