<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import TimerCountDown from "@/components/TimerCountdown.vue";
import { useSnackbar } from "vue3-snackbar";

const snackbar = useSnackbar();

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
  mempelaiPria: string;
  mempelaiWanita: string;
  acara: Array<acaraTypes>;
}

const props = defineProps<CoverInvitationProps>();
const tanggal: Ref<string> = ref("-");
const CountDown: Ref<CountDownTypes> = ref({
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
  counterFunction: 0,
});

const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    if (e.namaAcara == "Akad Nikah") {
      tanggal.value = new Date(e.tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  });
};

const startCountDown = (): void => {
  const myInterval = setInterval(() => {
    const now = new Date().getTime();
    const countDownDate = new Date(tanggal.value).getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    if (distance > 0) {
      // Time calculations for days, hours, minutes and seconds
      CountDown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      CountDown.value.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      CountDown.value.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      CountDown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      clearInterval(myInterval);
    }
  }, 1000);
};

const handleSave = (): void => {
  window.open(
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHQwZXBiOGp1N3BvNm1wdXZxZmdoc2JicW0gdjJmazc3dmduYzgxbDkydWJsb2NmOWo5YzBAZw&tmsrc=v2fk77vgnc81l92ublocf9j9c0%40group.calendar.google.com"
  );
};

onMounted(() => {
  bindingData();
  startCountDown();
});
</script>

<template>
  <div
    class="h-1/3 md:h-1/3 flex flex-col justify-center items-center bg-white py-8 container"
  >
    <p
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      class="headline-6 text-blue-10"
    >
      Countdown
    </p>
    <TimerCountDown
      :days="CountDown.days"
      :hours="CountDown.hours"
      :minutes="CountDown.minutes"
      :seconds="CountDown.seconds"
    />
    <p class="caption-1 text-blue-10 mb-4">{{ tanggal }}</p>
    <button
      @click="handleSave"
      class="button-date bg-blue-10 border border-white py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 z-10"
    >
      <span class="body-2 text-white">Save the Date</span>
    </button>
  </div>
</template>

<style scoped>
.container {
  background-image: url("@/assets/images/bg-countdown.webp");
  background-position: center;
  background-size: cover;
}
.button-date {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
