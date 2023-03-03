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

onMounted(() => {
  bindingData();
});
</script>

<template>
  <div class="flex flex-col px-4 pt-6 pb-36 bg-wedding">
    <template v-for="(e, i) in props.acara" :key="i">
      <div class="flex flex-col items-center rounded-xl p-4">
        <p class="headline-6 text-blue-10 mt-5 mb-10">{{ e.namaAcara }}</p>
        <p class="body-2 text-blue-10">{{ e.tanggal }}</p>
        <p class="body-2 text-blue-10">Pukul : {{ e.waktuMulai }} WIB</p>
        <p class="body-2 text-blue-10 text-center" style="max-width: 300px">
          Tempat : {{ e.alamat }}
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="border-l border-blue-10 h-[70px] mb-6"></div>
        <button
          class="button-date bg-blue-10 border border-white mb-6 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
        >
          <p class="body-2 text-white">Lihat Lokasi</p>
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.bg-wedding {
  background-image: url("@/assets/images/bg-wedding.webp");
  background-position: center;
  background-size: cover;
}
</style>
