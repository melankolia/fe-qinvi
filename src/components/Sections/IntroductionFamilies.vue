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
    <div class="flex flex-col p-8 bg-blue-05 text-center">
      <p
        data-aos="fade-down"
        data-aos-duration="2500"
        class="caption-1 text-blue-10 italic"
      >
        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <p
        data-aos="fade-down"
        data-aos-duration="2500"
        class="caption-1 text-blue-10 italic pt-4"
      >
        - QS. Ar-Rum 21 -
      </p>
    </div>
    <div class="flex flex-col px-4 items-center relative pb-9 bg-white">
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-6 text-blue-10 mt-12 mb-14"
      >
        The Wedding Of
      </p>
      <div class="flex flex-col">
        <div
          data-aos="fade-down"
          data-aos-duration="2500"
          class="flex flex-col text-center px-14 py-5 border border-blue-10"
        >
          <p class="headline-7 text-blue-10">
            {{ pengantinWanita.namaLengkap }}
          </p>
          <p class="caption-1 italic text-blue-10">
            Putri Ketiga dari Bapak {{ pengantinWanita.namaAyah }}
            <br />
            dan Ibu {{ pengantinWanita.namaIbu }}
          </p>
        </div>
        <p class="caption-1 text-blue-10 my-6 self-center">&</p>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          class="flex flex-col text-center px-14 py-5 border border-blue-10"
        >
          <p class="headline-7 text-blue-10">
            {{ pengantinPria.namaLengkap }}
          </p>
          <p class="caption-1 italic text-blue-10">
            Putra Kedua dari Bapak {{ pengantinPria.namaAyah }}
            <br />
            dan Ibu {{ pengantinPria.namaIbu }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
