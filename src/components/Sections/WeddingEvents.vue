<script setup lang="ts">
import { defineProps, onMounted } from "vue";
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

const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    e.tanggal = new Date(e.tanggal).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
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
  <div class="flex flex-col items-center px-4 bg-wedding bg-white">
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
      class="body-2 text-black text-center"
    >
      Kepada Bapak/Ibu/Saudara/i,
    </p>
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="body-2 text-black text-center my-2"
    >
      {{ invitedPerson }}
    </p>
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="body-2 text-black text-center"
    >
      Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami memohon
      kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami:
    </p>
    <img
      data-aos="fade-up"
      data-aos-duration="2500"
      width="85"
      height="78"
      src="@/assets/images/icon-sincan-blacks.webp"
      alt="Qinvi Wedding Icon"
      class="my-4"
    />
    <template v-for="(e, i) in props.acara" :key="i">
      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        class="flex flex-col items-center rounded-xl"
      >
        <p class="headline-6 text-black my-2">{{ e.namaAcara }}</p>
        <img
          src="@/assets/images/img-leaf-events.webp"
          width="186"
          alt="Qinvi Image Leaf"
        />
        <p class="body-2 text-black my-2">{{ e.tanggal }}</p>
        <img
          src="@/assets/images/img-leaf-events.webp"
          width="186"
          alt="Qinvi Image Leaf"
        />
        <!-- <p class="body-2 text-black">Pukul : {{ e.waktuMulai }} WIB</p> -->
        <p class="body-2 text-black text-center" style="max-width: 300px">
          Tempat : <br />
        </p>
        <p class="body-2 text-black text-center my-2" style="max-width: 300px">
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
  background-image: url("@/assets/images/bg-wedding.webp");
  background-position: center;
  background-size: cover;
  min-height: 940px;
}
</style>
