<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import type { Ref } from "vue";
import TimerCountDown from "../TimerCountdown.vue";

type pengantinTypes = {
  createdAt: string;
  gender: string;
  id: number;
  namaAyah: string;
  namaIbu: string;
  namaLengkap: string;
  namaPanggilan: string;
  updatedAt: string;
  urlPath: string;
  userId: string;
};

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

type introductionFamiliesType = {
  pengantin: Array<pengantinTypes>;
  tamu: {
    createdAt: string;
    domainUndangan: string;
    id: number;
    namaTamu: string;
    noHandphone: string;
    secureId: string;
    statusUndangan: number;
    tglKirimUndangan: string;
    updatedAt: string;
    userId: number;
  };
  acara: Array<acaraTypes>;
};

type CountDownTypes = {
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
  counterFunction: number | undefined;
};

const props = defineProps<introductionFamiliesType>();

const pengantinPria: Ref<pengantinTypes> = ref({
  createdAt: "-",
  gender: "-",
  id: 0,
  namaAyah: "-",
  namaIbu: "-",
  namaLengkap: "-",
  namaPanggilan: "-",
  updatedAt: "-",
  urlPath: "-",
  userId: "-",
});

const pengantinWanita: Ref<pengantinTypes> = ref({
  createdAt: "-",
  gender: "-",
  id: 0,
  namaAyah: "-",
  namaIbu: "-",
  namaLengkap: "-",
  namaPanggilan: "-",
  updatedAt: "-",
  urlPath: "-",
  userId: "-",
});

const tanggalResepsi: Ref<string> = ref("-");
const CountDownResepsi: Ref<CountDownTypes> = ref({
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
  counterFunction: 0,
});

const startCountDownResepsi = (): void => {
  const myInterval = setInterval(() => {
    const now = new Date().getTime();
    const countDownDate = new Date(tanggalResepsi.value).getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

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

const bindingData = (): void => {
  props.pengantin.map((e: pengantinTypes) => {
    if (e.gender?.toUpperCase() == "M") {
      pengantinPria.value = { ...e };
    } else if (e.gender?.toUpperCase() == "F") {
      pengantinWanita.value = { ...e };
    }
  });

  props.acara.map((e: acaraTypes) => {
    if (e.namaAcara.toLowerCase().includes("resepsi")) {
      tanggalResepsi.value = e.tanggal;
    }
  });
};

onMounted(() => {
  bindingData();
  startCountDownResepsi();
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center p-8 bg-quotes relative">
      <img
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        src="@/assets/images/bg-top-bird.webp"
        alt="Qinvi Wedding Icon"
      />
      <p class="initial-font text-white mt-16">N & A</p>
      <div class="w-5/6 border-t border-white my-5" />
      <TimerCountDown
        :days="CountDownResepsi.days"
        :hours="CountDownResepsi.hours"
        :minutes="CountDownResepsi.minutes"
        :seconds="CountDownResepsi.seconds"
      />
      <!-- <img class="mb-5 mt-7" src="@/assets/images/div.elementor-element.png" /> -->
      <button
        class="bg-white text-btn-add flex flex-row py-2.5 px-4 mb-5 mt-7 justify-center items-center rounded-full"
      >
        <img src="@/assets/icons/icon-date.png" class="mr-2" /> Add to Calender
      </button>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="caption-8 text-white"
      >
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="caption-8 text-white pt-4 italic"
      >
        ( Ar-Rum 21 )
      </p>
      <!-- <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="mx-10 mb-10 mt-5 rounded-full"
      >
        <img
          class="rounded-full"
          src="@/assets/images/p-spouses-2.webp"
          alt="Qinvi Spouses"
        />
      </div> -->
    </div>
    <div class="flex flex-col px-8 pt-20 pb-9 bg-events">
      <p class="text-black greet-fonts mb-5">Assalamualaikum Wr. Wb.</p>
      <p class="text-black dengan-fonts mb-8">
        Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
        Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri kami:
      </p>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2500"
        class="flex flex-col items-center px-10 mb-10"
      >
        <!-- :src="pengantinWanita.urlPath" -->
        <img
          src="@/assets/images/p-bride.webp"
          alt="Qinvi Wedding Photos Groom"
        />
        <p
          style="font-style: normal"
          class="caption-11 font-bold text-brown-10 my-4 text-center"
        >
          {{ pengantinWanita.namaLengkap }}
        </p>
        <p class="caption-10 text-brown-10">Putri Pertama dari :</p>
        <p class="caption-10 text-brown-10">
          Bapak {{ pengantinWanita.namaAyah }}
          <span>Dan Ibu {{ pengantinWanita.namaIbu }}</span>
        </p>
        <div class="flex flex-col items-center px-1">
          <img
            src="@/assets/images/p-instagram.png"
            alt="Qinvi Wedding Photos Groom"
            width="27"
            class="mt-2"
          />
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2500"
        class="flex flex-col items-center px-10"
      >
        <div class="flex flex-col items-center px-1">
          <!-- :src="pengantinPria.urlPath" -->
          <img
            src="@/assets/images/p-groom.webp"
            alt="Qinvi Wedding Photos Groom"
          />
        </div>
        <p
          style="font-style: normal"
          class="caption-11 font-bold text-brown-10 my-4 text-center"
        >
          {{ pengantinPria.namaLengkap }}
        </p>
        <p class="caption-10 text-brown-10">Putra Pertama dari :</p>
        <p class="caption-10 text-brown-10">
          Bapak {{ pengantinPria.namaAyah }}
          <span>Dan Ibu {{ pengantinPria.namaIbu }}</span>
        </p>
        <div class="flex flex-col items-center px-1">
          <img
            src="@/assets/images/p-instagram.png"
            alt="Qinvi Wedding Photos Groom"
            width="27"
            class="mt-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-btn-add {
  color: #ab738c;
  text-align: center;
  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
}
.greet-fonts {
  text-align: center;
  font-family: "Inter";
  font-size: 14.219px;
  font-style: normal;
  font-weight: 600;
  line-height: 10px;
}

.dengan-fonts {
  text-align: center;
  font-family: "Varela Round";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.initial-font {
  text-align: center;
  font-family: "Italiana";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
}
.bg-quotes {
  background-image: url("@/assets/images/bg-quotes.webp");
  background-size: cover;
  background-position: center;
}

.bg-quotes-linear {
  background: rgba(244, 234, 225, 0.77);
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}
.bg-events {
  background-image: url("@/assets/images/bg-events.webp");
  background-size: cover;
  min-height: 1050px;
}
</style>
