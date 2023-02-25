<script setup lang="ts">
import { defineProps, onMounted } from "vue";

type acaraTypes = {
  alamat: string;
  createdAt: string;
  id: number;
  lokasi: string;
  namaAcara: string;
  tanggal: string;
  updatedAt: string;
  urlMap: string;
  userId: number;
  waktuMulai: string;
  waktuSelesai: string;
};

type acaraPropsTypes = {
  acara: Array<acaraTypes>;
};
const props = defineProps<acaraPropsTypes>();
const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    e.tanggal = new Date(e.tanggal).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
    });
  });
};

const handleOpenMap = (e: any): void => {
  window.open(e.urlMap);
};

onMounted(() => {
  bindingData();
});
</script>

<template>
  <div class="flex flex-col px-4 py-28 relative bg-weddings">
    <img
      class="absolute top-0 right-0"
      src="@/assets/images/leaf-up.png"
      height="219"
      width="114"
    />
    <p class="headline-7 text-black mb-9 text-center">Wedding Event</p>
    <p class="caption-10 text-black text-center px-4">
      Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara (i) untuk
      dapat hadir pada acara Resepsi Pernikahan putra dan putri kami yang insya
      Allah akan diaksanakan pada:
    </p>
    <template v-for="(e, i) in props.acara" :key="i">
      <div class="flex flex-col items-center rounded-xl p-4 mb-3">
        <p class="headline-10 text-black">{{ e.namaAcara }}</p>
        <p class="caption-6 text-black">{{ e.tanggal }}</p>
        <p class="caption-11 text-black mb-3">Pukul : {{ e.waktuMulai }} WIB</p>
        <p
          class="caption-1 text-black text-center"
          style="font-weight: 300; max-width: 300px"
        >
          Tempat : {{ e.lokasi }}
        </p>
      </div>
      <div class="flex flex-col items-center">
        <button
          @click="handleOpenMap(e)"
          class="button-date bg-blue-10 mb-6 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
        >
          <p class="body-2 text-white">Lihat Maps</p>
        </button>
      </div>
    </template>
    <img
      class="absolute bottom-0 left-0"
      src="@/assets/images/leaf-down.png"
      height="219"
      width="114"
    />
  </div>
</template>

<style scoped>
.bg-weddings {
  background-image: url("@/assets/images/background-weedings.png");
  background-position: top;
  background-size: cover;
}
</style>
