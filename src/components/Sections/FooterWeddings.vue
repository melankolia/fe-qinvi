<script setup lang="ts">
import { defineProps } from "vue";

interface FooterWeddingsProps {
  mempelaiPria: string;
  mempelaiWanita: string;
  foto: string;
}

const props = defineProps<FooterWeddingsProps>();
</script>

<template>
  <div class="relative flex flex-col bg-brown-10 items-center">
    <img :src="foto" class="z-30 py-9 px-14" />
    <img src="@/assets/images/Flower4.png" class="absolute w-full" />
    <p class="caption-1 text-brown-70 text-center px-4">
      Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan
      hadir dalam hari bahagia kami. Terima kasih atas segala ucapan, doa, dan
      perhatian yang diberikan. Kami mengharap pengertian Anda atas semua
      pemberlakuan protokol kesehatan di hari pernikahan. Sampai jumpa di hari
      bahagia kami!
    </p>
    <div class="flex flex-row items-center space-x-3 my-14">
      <p class="headline-1 text-brown-70">{{ props.mempelaiPria }}</p>
      <p class="headline-2 text-brown-70">and</p>
      <p class="headline-1 text-brown-70">{{ props.mempelaiWanita }}</p>
    </div>
  </div>
</template>
