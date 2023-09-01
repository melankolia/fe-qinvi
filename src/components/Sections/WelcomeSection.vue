<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Ref } from "vue";

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
const tanggalAkad: Ref<string> = ref("-");
const CountDownAkad: Ref<CountDownTypes> = ref({
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
  counterFunction: 0,
});

const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    if (e.namaAcara.toLowerCase().includes("akad")) {
      tanggalAkad.value = new Date(e.tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  });
};

const startCountDownAkad = (): void => {
  const myInterval = setInterval(() => {
    const now = new Date().getTime();
    const countDownDate = new Date(tanggalAkad.value).getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    if (distance > 0) {
      // Time calculations for days, hours, minutes and seconds
      CountDownAkad.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      CountDownAkad.value.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      CountDownAkad.value.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      CountDownAkad.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
  startCountDownAkad();
});
</script>

<template>
  <div
    class="flex flex-col w-full text-center bg-container justify-between text-white"
  >
    <p data-aos="fade-up" data-aos-duration="2500" class="headline-11 mt-20">
      The Wedding Of <br />
      {{ mempelaiPria }} & {{ mempelaiWanita }}
    </p>
    <div class="flex flex-row justify-center mt-20 mb-7 caption-7">
      <div
        class="flex flex-row border-r border-white border-y px-6 py-1 space-x-6"
      >
        <div class="flex flex-col">
          <p>
            {{ CountDownAkad.days }} <br />
            Hari
          </p>
          <p>
            {{ CountDownAkad.minutes }} <br />
            Menit
          </p>
        </div>
        <div class="flex flex-col">
          <p>
            {{ CountDownAkad.hours }} <br />
            Jam
          </p>
          <p>
            {{ CountDownAkad.seconds }} <br />
            Detik
          </p>
        </div>
      </div>
      <div class="flex flex-col border-white border-y px-6 py-1 justify-center">
        Save The Dates <br />
        {{ tanggalAkad }}
      </div>
    </div>
  </div>
</template>

<style>
.bg-container {
  background-image: url("@/assets/images/bg-welcome.webp");
  background-size: cover;
  background-position: center;
  height: 600px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
