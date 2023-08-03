<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Ref } from "vue";
import TimerCountDown from "@/components/TimerCountdown.vue";

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

type CountDownTypes = {
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
  counterFunction: number | undefined;
};

interface CoverInvitationProps {
  acara: Array<acaraTypes>;
}

const props = defineProps<CoverInvitationProps>();
const tanggalResepsi: Ref<string> = ref("-");
const CountDownResepsi: Ref<CountDownTypes> = ref({
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
  counterFunction: 0,
});

const openAcara = (e: string = ""): void => {
  console.log(e);
};

const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    if (e.namaAcara.toLowerCase().includes("resepsi")) {
      tanggalResepsi.value = new Date(e.tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      startCountDownResepsi();
    }
  });
};

const startCountDownResepsi = (): void => {
  const myInterval = setInterval(() => {
    const now = new Date().getTime();
    const countDownDate = new Date(tanggalResepsi.value).getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    console.log({ tanggalResepsi, distance, countDownDate });

    if (distance > 0) {
      // Time calculations for days, hours, minutes and seconds
      CountDownResepsi.value.days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );
      CountDownResepsi.value.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      CountDownResepsi.value.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      CountDownResepsi.value.seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );
    } else {
      clearInterval(myInterval);
    }
  }, 1000);
};

const mempelaiPria: Ref<string> = ref("-");
const mempelaiWanita: Ref<string> = ref("-");

const route = useRoute();

const splittingUsername = (username: string): void => {
  const result = username.split("-");
  mempelaiPria.value = result[0];
  mempelaiWanita.value = result[1];
};

onMounted(() => {
  const username: string | null = route.params?.username as string;
  splittingUsername(username);
  bindingData();
});
</script>

<template>
  <div
    class="flex flex-col min-h-[500px] w-full text-center bg-container justify-end text-white py-6"
  >
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      class="flex flex-col justify-end items-center pt-10"
    >
      <TimerCountDown
        :days="CountDownResepsi.days"
        :hours="CountDownResepsi.hours"
        :minutes="CountDownResepsi.minutes"
        :seconds="CountDownResepsi.seconds"
      />
      <button
        @click="() => openAcara()"
        class="button-date bg-white px-2.5 py-2 rounded-lg flex flex-row justify-center items-center space-x-2.5 transition-all mx-6 mb-4"
      >
        <p class="title-3 text-black">Ingatkan Acara</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.bg-container {
  background-image: url("@/assets/images/p-spouses-3.webp");
  background-size: cover;
  background-position: center;
}

.bg-container-shadow {
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}

.title-3 {
  color: #6d829b;
  text-align: center;
  font-family: "Jost";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;
}
</style>
