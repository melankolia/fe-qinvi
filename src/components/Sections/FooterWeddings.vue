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
  <div class="bg-footer relative flex flex-col bg-brown-10 items-center p-5">
    <img
      src="@/assets/images/ava-couple.png"
      width="124"
      height="124"
      class="my-6"
    />
    <p class="caption-9 text-black text-center px-4">
      Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
      <br />
      Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restunya untuk
      keberkahan pernikahan kami.
      <br />
      Atas do’a dan restunya, kami ucapkan terima kasih.
    </p>
    <div class="flex flex-row items-center space-x-3 my-14">
      <p class="caption-5 text-black">{{ props.mempelaiPria }}</p>
      <p class="caption-5 text-black">&</p>
      <p class="caption-5 text-black">{{ props.mempelaiWanita }}</p>
    </div>
  </div>
</template>

<style scoped>
.bg-footer {
  background-image: url("@/assets/images/background-footer.png");
  background-position: top;
  background-size: cover;
}
</style>
