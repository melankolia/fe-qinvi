<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Ref } from "vue";

import WelcomeSection from "@/components/Sections/WelcomeSection.vue";
// import CountdownSection from "@/components/Sections/CountdownSection.vue";
import IntroductionFamilies from "@/components/Sections/IntroductionFamilies.vue";
import WeddingEvents from "@/components/Sections/WeddingEvents.vue";
import PresenceForm from "@/components/Sections/PresenceForm.vue";
// import ElectronicWallet from "@/components/Sections/ElectronicWallet.vue";
import GalleryPhotos from "@/components/Sections/GalleryPhotos.vue";
import PrayerWishes from "@/components/Sections/PrayerWishes.vue";
import FooterSections from "@/components/Sections/FooterSections.vue";
import FooterWeddings from "@/components/Sections/FooterWeddings.vue";
import MenusFloating from "@/components/MenusFloating.vue";
import WishesList from "@/components/Sections/WishesList.vue";
import { useRoute } from "vue-router";
import { useSnackbar } from "vue3-snackbar";
import { useHead } from "unhead";

import HomeService from "@/services/resources/home.service";

const isOpen: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const mempelaiPria: Ref<string> = ref("-");
const mempelaiWanita: Ref<string> = ref("-");
const fotoFooter: Ref<string> = ref("-");

const route = useRoute();
const snackbar = useSnackbar();

const invitedPerson: string | null = route.query?.to as string | null;
const isInvited = computed(() => {
  return invitedPerson !== null;
});

interface dataPernikahanType {
  // homeView: {
  //   background: "/image.webp",
  //   type: "image"
  // };
  // welcomeSection: {
  //   background: "/image.webp",
  //   type: "image"
  // },
  // galleryPhotos: {
  //   background: "#768C6E",
  //   type: "color"
  // },
  // IntroductionFamilies: {
  //   background: "/image.webp",
  //   type: "image"
  // },
  // weddingEvents: {
  //   background: "/image.webp",
  //   type: "image"
  // },
  // presenceForm: {
  //   background: "#768C6E",
  //   type: "color"
  // },
  // prayerWishes: {
  //   background: "#FAFFD8",
  //   type: "color"
  // }
  // wishesList: {
  //   background: "#FAFFD8",
  //   type: "color"
  // },
  // electronicWallet: {
  //   background: "#768C6E",
  //   type: "color"
  // },
  // footerWeddings: {
  //   background: "/images/bg-thanks.webp",
  //   type: "image"
  // }
  acara: Array<{
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
    ingatkanAcara: string;
  }>;
  ceritaCinta: Array<{
    createdDate: string;
    id: number;
    isiCerita: string;
    judul: string;
    tanggal: string;
    updatedDate: string;
    userId: number;
  }>;
  gallery: string[];
  pengantin: Array<{
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
  }>;
  rekening: Array<{
    createdAt: string;
    id: number;
    namaBank: string;
    namaPemilik: string;
    noRekening: string;
    updatedAt: string;
    userId: number;
  }>;
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
  ucapan: Array<{
    createdAt: string;
    id: number;
    nama: string;
    ucapan: string;
    updatedAt: string;
    userId: number;
  }>;
}

const dataPernikahan: Ref<dataPernikahanType> = ref({
  acara: [],
  ceritaCinta: [],
  gallery: [],
  pengantin: [],
  rekening: [],
  tamu: {
    createdAt: "",
    domainUndangan: "",
    id: 0,
    namaTamu: "",
    noHandphone: "",
    secureId: "",
    statusUndangan: 0,
    tglKirimUndangan: "",
    updatedAt: "",
    userId: 0,
  },
  ucapan: [],
});

const handleClick = (): void => {
  const id: string | string[] = route.params?.secureId;
  loading.value = true;

  HomeService.getHome(id)
    .then((result): void => {
      const { data, status } = result;
      if (status == 200) {
        if (data.data?.gallery?.length > 0) {
          fotoFooter.value = data.data?.gallery[data.data?.gallery.length - 1];
        }

        dataPernikahan.value = { ...data?.data } as dataPernikahanType;

        isOpen.value = true;
      } else {
        console.error(data?.data?.message);
        snackbar.add({
          type: "error",
          title: "Error",
          text: "Gagal memuat data!",
          group: "5862a88b",
          count: 1,
        });
      }
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => (loading.value = false));
};

const splittingUsername = (username: string): string => {
  const result = username.split("-");
  mempelaiPria.value = result[0];
  mempelaiWanita.value = result[1];

  return `The Wedding of ${result[0]} and ${result[1]}`;
};

const handleMenuClick = (e: string): void => {
  const $element = document.getElementById(e);
  if ($element) {
    $element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
};

onMounted(() => {
  const username: string | null = route.params?.username as string;
  splittingUsername(username);
});

useHead({
  title: splittingUsername(route.params?.username as string),
});
</script>

<template>
  <div class="flex flex-col mx-auto" style="max-width: 480px">
    <div
      v-if="!isOpen"
      class="container flex flex-col h-screen justify-center px-8"
    >
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        class="flex flex-col items-center text-black background-linear rounded-full py-[71px]"
      >
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-9 text-brown-10"
        >
          PERNIKAHAN
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="flex flex-col items-center mt-8 mb-2.5"
        >
          <p class="headline-2 text-center text-brown-10 uppercase">
            {{ mempelaiPria }}
          </p>
          <p class="headline-2 text-center text-brown-10 uppercase">&</p>
          <p class="headline-2 text-center text-brown-10 uppercase">
            {{ mempelaiWanita }}
          </p>
        </div>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-6 text-brown-10 mb-11 mt-10"
        >
          25 • 07 • 2023
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-9 text-brown-10"
        >
          KEPADA :
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-11 text-brown-10 mb-7 mt-2.5"
        >
          {{ invitedPerson }}
        </p>
        <button
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          @click="handleClick"
          class="button-date bg-linear-btn px-8 py-3.5 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all mx-6"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 h-3 w-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p class="body-4 text-white">Buka Undangan</p>
        </button>
      </div>
    </div>
    <div
      class="flex flex-col mx-none md:mx-auto"
      v-else
      style="max-width: 480px"
    >
      <WelcomeSection :acara="dataPernikahan.acara" id="welcomeSection" />
      <IntroductionFamilies
        id="mempelaiSection"
        :tamu="dataPernikahan.tamu"
        :pengantin="dataPernikahan.pengantin"
      />
      <img
        src="@/assets/images/p-spouses-3.webp"
        alt="Qinvi Wedding Photos Groom"
      />
      <!-- <CountdownSection
        :mempelaiPria="mempelaiPria"
        :mempelaiWanita="mempelaiWanita"
        :acara="dataPernikahan.acara"
        id="homeSection"
      /> -->
      <WeddingEvents id="acaraSection" :acara="dataPernikahan.acara" />
      <div class="flex flex-col bg-combo px-8 pt-9">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          class="flex flex-col pt-20 bg-combo-linear rounded-tema-jawa mb-10"
        >
          <PresenceForm />
          <PrayerWishes />
          <WishesList :wishes="dataPernikahan.ucapan" />
        </div>
      </div>
      <!-- <ElectronicWallet :rekening="dataPernikahan.rekening" /> -->
      <!-- <HealthProtocols /> -->
      <img
        src="@/assets/images/p-spouses-4.webp"
        alt="Qinvi Wedding Photos Groom"
      />
      <GalleryPhotos id="gallerySection" :gallery="dataPernikahan.gallery" />
      <FooterWeddings />
      <FooterSections />
      <MenusFloating @fnClick="(e) => handleMenuClick(e)" />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url("@/assets/images/bg-cover.webp");
  background-position: center;
  background-size: cover;
}

.background-linear {
  background: linear-gradient(
    0deg,
    rgba(255, 247, 239, 0.47) 100%,
    rgba(244, 234, 225, 0.37) 100%
  );
}

.bg-linear-btn {
  background: linear-gradient(282.22deg, #000000 0%, #a98466 100%);
}

.bg-combo {
  background-image: url("@/assets/images/bg-combo.webp");
  background-size: cover;
}

.bg-combo-linear {
  background: rgba(244, 234, 225, 0.77);
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}
</style>
