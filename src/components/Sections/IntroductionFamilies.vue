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
  <div class="flex flex-col bg-brown-10 items-center">
    <div
      class="flex flex-col pt-4 mx-4 px-4 bg-brown-80 text-center p-4 rounded-xl"
    >
      <p class="caption-1 text-white">
        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <p class="caption-1 text-white pt-4">- QS. Ar-Rum 21 -</p>
    </div>
    <div class="flex flex-col px-4 items-center relative pb-9">
      <img src="@/assets/images/Flower2.png" class="absolute w-full h-full" />
      <p class="headline-3 text-green-20 mt-4 mb-9">MEMPELAI</p>
      <p class="caption-1 text-brown-70 text-center mb-7">
        Kepada Bapak/Ibu/Saudara/i,
        <br />
        <br />
        Yang diundang
        <br />
        <br />
        Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami memohon
        kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami:
      </p>
      <div class="flex flex-col items-center">
        <p class="headline-2 text-brown-70">
          {{ pengantinWanita.namaPanggilan }}
        </p>
        <p class="caption-1 text-brown-70 text-center">
          Putri dari Bapak {{ pengantinWanita.namaAyah }}
          <br />
          dan Ibu {{ pengantinWanita.namaIbu }}
        </p>
        <p class="headline-2 text-brown-70 my-6">&</p>
        <p class="headline-2 text-brown-70">
          {{ pengantinPria.namaPanggilan }}
        </p>
        <p class="caption-1 text-brown-70 text-center">
          Putra dari Bapak {{ pengantinPria.namaAyah }}
          <br />
          dan Ibu {{ pengantinPria.namaIbu }}
        </p>
      </div>
    </div>
  </div>
</template>
