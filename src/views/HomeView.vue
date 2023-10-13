<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Ref } from "vue";

// import WelcomeSection from "@/components/Sections/WelcomeSection.vue";
import CountdownSection from "@/components/Sections/CountdownSection.vue";
import IntroductionFamilies from "@/components/Sections/IntroductionFamilies.vue";
import WeddingEvents from "@/components/Sections/WeddingEvents.vue";
// import PresenceForm from "@/components/Sections/PresenceForm.vue";
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
    .then(() => {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth",
      });
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
    id="invitationSection"
    class="flex flex-col mx-auto bg-white"
    style="max-width: 480px"
  >
    <div class="container flex flex-col h-screen justify-between pt-9 pb-16">
      <div class="flex flex-col items-center text-black">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          class="title-1-cover mt-20 mb-0"
        >
          WEDDING ANNOUNCEMENT
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="3000"
          class="headline-10 mb-2.5 title-2-cover"
        >
          {{ mempelaiPria }} & {{ mempelaiWanita }}
        </p>
      </div>
      <div class="flex flex-col items-center">
        <p class="title-3-cover">Kepada Yth Bapak/Ibu/Saudara/I</p>
        <p class="title-4-cover mt-4">{{ invitedPerson }}</p>
        <img
          src="@/assets/icons/icon-chevron-down.svg"
          width="16"
          height="18"
          class="mt-16 mb-6 animate-bounce"
          @click="handleClick"
        />
        <p class="title-5-cover">Buka Undangan</p>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="flex flex-col mx-none md:mx-auto"
      style="max-width: 480px"
    >
      <!-- <WelcomeSection :acara="dataPernikahan.acara" id="welcomeSection" /> -->
      <IntroductionFamilies
        id="mempelaiSection"
        :tamu="dataPernikahan.tamu"
        :pengantin="dataPernikahan.pengantin"
        :acara="dataPernikahan.acara"
      />
      <CountdownSection
        :mempelaiPria="mempelaiPria"
        :mempelaiWanita="mempelaiWanita"
        :acara="dataPernikahan.acara"
        id="homeSection"
      />
      <WeddingEvents id="acaraSection" :acara="dataPernikahan.acara" />
      <GalleryPhotos id="gallerySection" :gallery="dataPernikahan.gallery" />

      <!-- <PresenceForm /> -->
      <PrayerWishes />
      <WishesList :wishes="dataPernikahan.ucapan" />
      <ElectronicWallet :rekening="dataPernikahan.rekening" />
      <!-- <HealthProtocols /> -->
      <FooterWeddings />
      <FooterSections />
      <Transition name="fade">
        <MenusFloating v-if="isOpen" @fnClick="(e) => handleMenuClick(e)" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url("@/assets/images/bg-cover.webp");
  background-position: center;
  background-size: cover;
}

.title-1-cover {
  color: #f4f4f5;
  font-family: "Averia Serif Libre";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.47px;
}

.title-2-cover {
  color: #f4f4f5;
  font-family: "Scheherazade New";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 6.65px;
}

.title-3-cover {
  color: #f4f4f5;
  text-align: center;
  font-family: "Seaweed Script";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.47px;
}

.title-4-cover {
  color: #f4f4f5;
  text-align: center;
  font-family: "Seaweed Script";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.47px;
}

.title-5-cover {
  color: #f4f4f5;
  font-family: "Scheherazade New";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
