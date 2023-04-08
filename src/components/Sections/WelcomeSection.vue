<template>
  <div class="flex flex-col bg-white relative">
    <div class="flex flex-col bg-container bg-white h-[556px]">
      <div class="flex flex-col overlay"></div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      class="absolute top-1/2 w-full text-center"
    >
      <p class="caption-5 text-blue-10">سْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ</p>
      <p class="caption-5 text-blue-10 my-4">
        Assalamualaikum warahmatullahi wabarakatuh
      </p>
      <p class="caption-5 text-blue-10">
        Dengan memohon rahmat dan ridho Allah SWT <br />
        kami bermaksud menyelanggarakan <br />
        prosesi pernikahan putra putri kami
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style>
.bg-container {
  background-image: url("@/assets/images/cover.webp");
  background-size: cover;
  opacity: 25%;
}

.bg-container .overlay {
  background-color: rgb(255, 255, 255);
  mix-blend-mode: soft-light;
  height: 556px;
}
</style>
