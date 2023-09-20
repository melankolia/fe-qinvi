<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Ref } from "vue";

import WelcomeSection from "@/components/Sections/WelcomeSection.vue";
// import CountdownSection from "@/components/Sections/CountdownSection.vue";
import IntroductionFamilies from "@/components/Sections/IntroductionFamilies.vue";
import WeddingEvents from "@/components/Sections/WeddingEvents.vue";
import PresenceForm from "@/components/Sections/PresenceForm.vue";
import ElectronicWallet from "@/components/Sections/ElectronicWallet.vue";
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
  mempelaiPria.value = result[1];
  mempelaiWanita.value = result[0];

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
  <div
    class="flex flex-col mx-auto bg-[lightgray 50% ]"
    style="max-width: 480px"
  >
    <div
      v-if="!isOpen"
      class="container flex flex-col items-center justify-between h-screen px-8 pt-14 pb-8"
    >
      <!-- data-aos="zoom-in-up"
      data-aos-duration="2000" -->
      <div class="flex flex-col items-center mb-2.5">
        <p class="title-1">The Wedding Of</p>
        <p class="title-2 mt-4 text-center text-white">
          {{ mempelaiPria }} & {{ mempelaiWanita }}
        </p>
        <img src="@/assets/images/logo-wedding-2.webp" width="114" />
      </div>
      <div class="flex flex-col">
        <!-- data-aos="zoom-in-up"
          data-aos-duration="2000" -->
        <button
          @click="handleClick"
          class="button-date bg-white px-4 py-3 rounded-sm flex flex-row justify-center items-center space-x-2.5 transition-all mx-6 mb-4"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 h-3 w-3 text-black"
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
          <p class="title-3 text-black uppercase">Buka Undangan</p>
        </button>
        <p class="caption-local text-[#8D7C6A] mt-10">
          Created with Love by Qinvi
        </p>
        <p class="caption-local text-[#8D7C6A]">
          © 2023 Aulia & Ilham. All Rights Reserved
        </p>
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
        :acara="dataPernikahan.acara"
      />
      <GalleryPhotos id="gallerySection" :gallery="dataPernikahan.gallery" />
      <!-- <CountdownSection
        :mempelaiPria="mempelaiPria"
        :mempelaiWanita="mempelaiWanita"
        :acara="dataPernikahan.acara"
        id="homeSection"
      /> -->
      <WeddingEvents id="acaraSection" :acara="dataPernikahan.acara" />
      <PresenceForm />
      <PrayerWishes />
      <WishesList :wishes="dataPernikahan.ucapan" />
      <ElectronicWallet :rekening="dataPernikahan.rekening" />
      <!-- <HealthProtocols /> -->
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

.title-1 {
  color: #8d7c6a;
  text-align: center;
  font-family: "Jost";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px; /* 150% */
  text-transform: uppercase;
}

.title-2 {
  color: #8d7c6a;
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px; /* 150% */
}

.title-3 {
  font-family: "Jost";
  font-size: 15px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
}

.caption-local {
  font-family: "Jost";
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 1px;
  text-align: center;
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

.border-outline {
  background-image: url("@/assets/images/border-outline.webp");
  background-size: 97% 98%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
