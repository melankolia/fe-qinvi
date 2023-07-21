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
    class="flex flex-col w-full text-center bg-container justify-center text-white py-6"
  >
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      class="flex flex-col bg-brown-10 bg-opacity-90 mx-9 pb-10 pt-24 bg-container-shadow rounded-tema-jawa px-7"
    >
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="headline-16 mb-4"
      >
        The Wedding Of
      </p>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="headline-11 mb-10"
      >
        {{ mempelaiPria }} & {{ mempelaiWanita }}
      </p>
      <img
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        src="@/assets/images/p-spouses.webp"
        alt="Qinvi Spouses"
      />
      <div class="flex flex-col justify-center items-center pt-10">
        <TimerCountDown
          :days="CountDownAkad.days"
          :hours="CountDownAkad.hours"
          :minutes="CountDownAkad.minutes"
          :seconds="CountDownAkad.seconds"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-container {
  background-image: url("@/assets/images/bg-welcome.webp");
  background-size: cover;
  background-position: center;
}

.bg-container-shadow {
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}
</style>
