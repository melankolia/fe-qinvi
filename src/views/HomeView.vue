<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

import CoverInvitation from "@/components/Sections/CoverInvitation.vue";
import IntroductionFamilies from "@/components/Sections/IntroductionFamilies.vue";
import WeddingEvents from "@/components/Sections/WeddingEvents.vue";
import HealthProtocols from "@/components/Sections/HealthProtocols.vue";
import PresenceForm from "@/components/Sections/PresenceForm.vue";
import ElectronicWallet from "@/components/Sections/ElectronicWallet.vue";
import GalleryPhotos from "@/components/Sections/GalleryPhotos.vue";
import PrayerWishes from "@/components/Sections/PrayerWishes.vue";
import FooterWeddings from "@/components/Sections/FooterWeddings.vue";
import FooterSections from "@/components/Sections/FooterSections.vue";
import MenusFloating from "@/components/MenusFloating.vue";
import WishesList from "@/components/Sections/WishesList.vue";
import StorySections from "@/components/Sections/StorySections.vue";
import { useRoute } from "vue-router";
import { useSnackbar } from "vue3-snackbar";

import HomeService from "@/services/resources/home.service";

const isOpen: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const mempelaiPria: Ref<string> = ref("-");
const mempelaiWanita: Ref<string> = ref("-");
const fotoFooter: Ref<string | null> = ref(null);

const route = useRoute();
const snackbar = useSnackbar();

interface dataPernikahanType {
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
  tamu: Array<{
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
  }>;
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
  tamu: [],
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
          console.log(data.data?.gallery[data.data?.gallery.length - 1]);
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

const splittingUsername = (username: string): void => {
  const result = username.split("-");
  mempelaiPria.value = result[0];
  mempelaiWanita.value = result[1];
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
</script>

<template>
  <div class="flex flex-col">
    <div
      v-if="!isOpen"
      class="bg-brown-10 flex flex-col items-center justify-center h-screen"
    >
      <p class="caption-1 text-brown-70">We invite you to join our wedding</p>
      <div class="flex flex-row items-center space-x-3 mb-5">
        <p class="headline-1 text-brown-70">{{ mempelaiWanita }}</p>
        <p class="headline-2 text-brown-70">and</p>
        <p class="headline-1 text-brown-70">{{ mempelaiPria }}</p>
      </div>
      <button
        @click="handleClick"
        class="button-date bg-brown-70 py-1.5 px-3 rounded-md flex flex-row items-center space-x-2.5 transition-all"
      >
        <svg
          v-if="loading"
          class="animate-spin -ml-1 h-5 w-5 text-white"
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
        <img
          v-else
          src="@/assets/icons/icon-email.png"
          class="brightness-0 invert"
          height="16"
          width="16"
        />
        <p class="body-2 text-white">Buka Undangan</p>
      </button>
    </div>
    <template v-else>
      <CoverInvitation
        :mempelaiPria="mempelaiPria"
        :mempelaiWanita="mempelaiWanita"
        :acara="dataPernikahan.acara"
        id="homeSection"
      />
      <IntroductionFamilies
        id="mempelaiSection"
        :pengantin="dataPernikahan.pengantin"
      />
      <WeddingEvents id="acaraSection" :acara="dataPernikahan.acara" />
      <HealthProtocols />
      <PresenceForm />
      <ElectronicWallet :rekening="dataPernikahan.rekening" />
      <GalleryPhotos id="gallerySection" :gallery="dataPernikahan.gallery" />
      <img src="@/assets/images/Rings.png" />
      <StorySections :ceritaCinta="dataPernikahan.ceritaCinta" />
      <PrayerWishes />
      <WishesList :wishes="dataPernikahan.ucapan" />
      <FooterWeddings
        :mempelaiPria="mempelaiPria"
        :mempelaiWanita="mempelaiWanita"
        :foto="fotoFooter"
      />
      <FooterSections />
      <MenusFloating @fnClick="(e) => handleMenuClick(e)" />
    </template>
  </div>
</template>
