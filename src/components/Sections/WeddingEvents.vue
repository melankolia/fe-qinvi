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
  <div class="flex flex-col bg-brown-90 px-4 py-6">
    <p class="headline-3 text-green-10 mb-9 text-center">ACARA</p>
    <template v-for="(e, i) in props.acara" :key="i">
      <div class="flex flex-col bg-brown-10 items-center rounded-xl p-4 mb-3">
        <p class="headline-4 text-brown-70 mb-3">{{ e.namaAcara }}</p>
        <p class="caption-1 text-brown-70 mb-3">{{ e.tanggal }}</p>
        <p class="caption-1 text-brown-70 mb-3" style="font-weight: 300">
          Pukul : {{ e.waktuMulai }} WIB
        </p>
        <p
          class="caption-1 text-brown-70 text-center"
          style="font-weight: 300; max-width: 300px"
        >
          Tempat : {{ e.tanggal }}
        </p>
      </div>
      <div class="flex flex-col items-center">
        <button
          class="button-date bg-brown-70 mb-6 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
        >
          <img
            src="@/assets/icons/icon-location.png"
            class="brightness-0 invert"
            height="18"
            width="18"
          />
          <p class="body-2 text-white">Lihat Peta</p>
        </button>
      </div>
    </template>
  </div>
</template>
