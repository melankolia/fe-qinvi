<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import type { Ref } from "vue";

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

const bindingData = (): void => {
  props.pengantin.map((e: pengantinTypes) => {
    if (e.gender?.toUpperCase() == "M") {
      pengantinPria.value = { ...e };
    } else if (e.gender?.toUpperCase() == "F") {
      pengantinWanita.value = { ...e };
    }
  });
};

onMounted(() => {
  bindingData();
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center p-8 bg-quotes bg-green-30 relative">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        class="flex flex-col bg-quotes-linear items-center rounded-tema-jawa pt-10 px-3 text-justify"
      >
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          width="85"
          height="78"
          src="@/assets/images/icon-sincan.png"
          alt="Qinvi Wedding Icon"
          class="mb-4 mt-10"
        />
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-8 text-brown-10"
        >
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-8 text-brown-10 pt-4"
        >
          - QS. Ar-Rum 21 -
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="mx-10 mb-10 mt-5 rounded-full"
        >
          <img
            class="rounded-full"
            src="https://ik.imagekit.io/qinvi/AhmadHusna/SEC%202.jpg?updatedAt=1692603425291"
            alt="Qinvi Spouses"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col px-8 pt-7 pb-9 bg-events">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        class="flex flex-col bg-quotes-linear opacity-90 pb-10 pt-24 rounded-tema-jawa"
      >
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2500"
          class="flex flex-col items-center px-10 mb-10"
        >
          <p class="headline-18 text-brown-10 mb-5">KEDUA MEMPELAI</p>
          <img
            :src="pengantinWanita.urlPath"
            alt="Qinvi Wedding Photos Groom"
            class="mb-6 rounded-full"
          />
          <p class="headline-17 text-brown-10">
            {{ pengantinWanita.namaPanggilan }}
          </p>
          <p
            style="font-style: normal"
            class="caption-11 font-bold text-brown-10 mt-4 mb-8 text-center"
          >
            {{ pengantinWanita.namaLengkap }}
          </p>
          <p class="caption-10 text-brown-10">Putri Tunggal dari :</p>
          <p class="caption-10 text-brown-10">
            Bapak {{ pengantinWanita.namaAyah }}
          </p>
          <p class="caption-10 text-brown-10">
            Ibu {{ pengantinWanita.namaIbu }}
          </p>
          <!-- <img
            src="@/assets/images/p-ig.webp"
            alt="Qinvi Wedding Photos Groom"
            width="50"
            class="mt-7"
          /> -->
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2500"
          class="flex flex-col items-center px-10"
        >
          <div class="flex flex-col items-center px-1">
            <img
              :src="pengantinPria.urlPath"
              alt="Qinvi Wedding Photos Groom"
              class="mb-6 rounded-full"
            />
          </div>
          <p class="headline-17 text-brown-10">
            {{ pengantinPria.namaPanggilan }}
          </p>
          <p
            style="font-style: normal"
            class="caption-11 font-bold text-brown-10 mt-4 mb-8 text-center"
          >
            {{ pengantinPria.namaLengkap }}
          </p>
          <p class="caption-10 text-brown-10">Putra Kedua dari :</p>
          <p class="caption-10 text-brown-10">
            Bapak {{ pengantinPria.namaAyah }}
          </p>
          <p class="caption-10 text-brown-10">
            Ibu {{ pengantinPria.namaIbu }}
          </p>
          <!-- <div class="flex flex-col items-center px-1">
            <img
              src="@/assets/images/p-ig.webp"
              alt="Qinvi Wedding Photos Groom"
              width="50"
              class="mt-7"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
