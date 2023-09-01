<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

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
const route = useRoute();

const tanggal: Ref<string> = ref("-");

const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    if (e.namaAcara?.toLowerCase().includes("resepsi")) {
      tanggal.value = new Date(e.tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }
  });
};

const openMap = (e: acaraTypes): void => {
  window.open(e.urlMap);
};

const invitedPerson: string | null = route.query?.to as string | null;

const handleSave = (): void => {
  window.open(
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MW4zdjVrcmVqOWI5cW5icTBvZ2NrdmU5NjIgYWRtLnFpbnZpQG0&tmsrc=adm.qinvi%40gmail.com"
  );
};

onMounted(() => {
  bindingData();
});
</script>

<template>
  <div class="flex flex-col items-center px-4 bg-wedding bg-green-30 relative">
    <img
      src="@/assets/images/left-top-flower-event.webp"
      class="absolute top-24 left-0"
      width="100"
    />
    <img
      src="@/assets/images/right-bot-flower-gallery.webp"
      width="230"
      class="absolute right-0 bottom-0"
    />
    <img
      data-aos="fade-up"
      data-aos-duration="2500"
      src="@/assets/images/img-header.webp"
      width="300"
      alt="Qinvi Header Events"
      class="-mt-4 mb-1"
    />
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="body-2 text-white text-center"
    >
      Kepada Bapak/Ibu/Saudara/i,
    </p>
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="body-2 text-white text-center my-2"
    >
      {{ invitedPerson }}
    </p>
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="body-2 text-white text-center"
    >
      Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami memohon
      kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami:
    </p>
    <div class="flex flex-col items-center my-4">
      <img
        src="@/assets/images/img-leaf-events.webp"
        width="186"
        alt="Qinvi Image Leaf"
      />
      <p class="body-2 text-white my-2">{{ tanggal }}</p>
      <img
        src="@/assets/images/img-leaf-events.webp"
        width="186"
        alt="Qinvi Image Leaf"
      />
    </div>
    <img
      data-aos="fade-up"
      data-aos-duration="2500"
      width="85"
      height="78"
      src="@/assets/images/icon-sincan.webp"
      alt="Qinvi Wedding Icon"
      class="my-4"
    />
    <template v-for="(e, i) in props.acara" :key="i">
      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        class="flex flex-col items-center rounded-xl"
      >
        <p class="headline-6 text-white my-2">{{ e.namaAcara }}</p>
        <!-- <p class="body-2 text-white">Pukul : {{ e.waktuMulai }} WIB</p> -->
        <p class="body-2 text-white text-center" style="max-width: 300px">
          Tempat : <br />
        </p>
        <p class="body-2 text-white text-center my-2" style="max-width: 300px">
          {{ e.alamat }}
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        class="flex flex-col items-center"
      >
        <button
          @click="openMap(e)"
          class="button-date drop-shadow-md bg-yellow-20 border border-white mt-2 mb-6 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
        >
          <img
            src="@/assets/icons/icon-locations.png"
            width="18"
            height="15.5"
          />
          <p class="body-2 text-black">Lihat Peta</p>
        </button>
      </div>
    </template>
    <button
      data-aos="fade-right"
      data-aos-duration="2500"
      class="button-date w-full mt-6 mb-12 border border-white bg-yellow-20 py-1.5 px-3 rounded-2xl space-x-2.5 z-10 drop-shadow-md"
      @click="handleSave()"
    >
      <p class="body-2 text-black">Simpan Acara</p>
    </button>
  </div>
</template>

<style scoped>
.bg-wedding {
  min-height: 940px;
}
</style>
