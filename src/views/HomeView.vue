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
import { useHead } from "unhead";

const isOpen: Ref<boolean> = ref(false);

const mempelaiPria: Ref<string> = ref("-");
const mempelaiWanita: Ref<string> = ref("-");
const fotoFooter: Ref<string> = ref("-");

const route = useRoute();

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

const fnFotoFooter = (data: any) => {
  fotoFooter.value = data;
};

const fnDataPernikahan = (data: any) => {
  dataPernikahan.value = data as dataPernikahanType;
  isOpen.value = true;

  setTimeout(() => {
    window.scrollTo({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
  }, 250);
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
    <img
      src="@/assets/images/p-flower-left.webp"
      class="absolute"
      width="262"
    />
    <div class="flex flex-col" style="max-width: 480px">
      <WelcomeSection
        id="welcomeSection"
        @handleFotoFooter="fnFotoFooter"
        @handleDataPernikahan="fnDataPernikahan"
      />
      <template v-if="isOpen">
        <IntroductionFamilies
          id="mempelaiSection"
          :tamu="dataPernikahan.tamu"
          :pengantin="dataPernikahan.pengantin"
          :acara="dataPernikahan.acara"
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
        <ElectronicWallet :rekening="dataPernikahan.rekening" />
        <!-- <HealthProtocols /> -->
        <img
          src="@/assets/images/p-spouses-4.webp"
          alt="Qinvi Wedding Photos Groom"
        />
        <GalleryPhotos id="gallerySection" :gallery="dataPernikahan.gallery" />
        <FooterWeddings />
        <FooterSections />
        <MenusFloating @fnClick="(e) => handleMenuClick(e)" />
      </template>
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

.bg-combo {
  background-image: url("@/assets/images/bg-combo.webp");
  background-size: cover;
}

.bg-combo-linear {
  background: rgba(244, 234, 225, 0.77);
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}
</style>
