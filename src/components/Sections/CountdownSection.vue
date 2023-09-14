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
  <div class="h-1/3 md:h-1/3 flex flex-col py-8">
    <div class="flex flex-row w-full justify-between pl-4">
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-6-local text-black"
      >
        Save The
        <br />
        Date
      </p>
      <div class="flex flex-col min-w-[60%] justify-center">
        <div class="flex flex-row border-t border-t-black"></div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center border-b border-b-black w-full mt-6 mb-10"
    >
      <TimerCountDown
        :days="CountDown.days"
        :hours="CountDown.hours"
        :minutes="CountDown.minutes"
        :seconds="CountDown.seconds"
      />
    </div>
    <button
      @click="handleSave"
      class="bg-[#F8F4EA] border border-white py-1.5 px-3 mx-10 rounded-lg space-x-2.5 z-10"
    >
      <span class="body-2-local text-black text-center">Save The Date</span>
    </button>
  </div>
</template>

<style scoped>
/* .container { */
/* background-image: url("@/assets/images/bg-countdown.webp");
  background-position: center;
  background-size: cover; */
/* } */
/* .button-date {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
} */

.headline-6-local {
  text-align: right;
  font-family: "Poppins";
  font-size: 29.9px;
  font-style: normal;
  font-weight: 400;
  line-height: 48.86px;
}

.body-2-local {
  text-align: center;
  font-family: "Poppins";
  font-size: 17.55px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
