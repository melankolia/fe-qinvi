<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import images from "@/assets/images/cover.png";
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
const CoverImage: Ref<string> = ref(images);
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
  snackbar.add({
    type: "success",
    title: "Success",
    text: "Berhasil menyimpan tanggal acara",
    group: "5862a88b",
    count: 1,
  });
};

onMounted(() => {
  bindingData();
  startCountDown();
});
</script>

<template>
  <div
    class="bg-cover flex flex-col bg-green-30 justify-center items-center"
    style="height: 590px"
  >
    <p class="caption-7 text-black">The Wedding Of</p>
    <img src="@/assets/images/Cover.png" width="135" height="157" />
    <p class="caption-5 text-black mt-2">
      {{ props.mempelaiPria }} & {{ props.mempelaiWanita }}
    </p>
    <p class="caption-5 text-black my-4">We invite you to join our wedding</p>
    <p class="caption-6 text-gold-10">{{ tanggal }}</p>
    <!-- <img src="@/assets/images/Flower1.png" class="absolute w-full h-full" /> -->
    <TimerCountDown
      :days="CountDown.days"
      :hours="CountDown.hours"
      :minutes="CountDown.minutes"
      :seconds="CountDown.seconds"
    />
  </div>
</template>

<style scoped>
.bg-cover {
  background-image: url("@/assets/images/background-cover.jpg");
}
.button-date {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
