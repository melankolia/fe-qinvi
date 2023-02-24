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
  <div
    style="min-height: 752px"
    class="flex flex-col px-4 justify-center items-center relative pb-9 bg-green-30 bg-mempelai"
  >
    <p class="headline-6 text-black mt-4 mb-9">Assalamu’alaikum Wr. Wb.</p>
    <p class="caption-8 text-black text-center mb-7 mx-6">
      Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah
      kami akan menyelenggarakan acara pernikahan :
    </p>
    <div class="flex flex-col items-center">
      <img
        src="@/assets/images/ava-female.png"
        width="145"
        height="145"
        class="mb-4"
      />
      <p class="caption-8 text-black mb-2">
        {{ pengantinWanita.namaPanggilan }}
      </p>
      <p class="caption-8 text-black text-center">
        Putri dari Bapak {{ pengantinWanita.namaAyah }}
        <br />
        dan Ibu {{ pengantinWanita.namaIbu }}
      </p>
      <p class="caption-8 text-black my-6">&</p>
      <img
        src="@/assets/images/ava-male.png"
        width="145"
        height="145"
        class="mb-4"
      />
      <p class="caption-8 text-black mb-2">
        {{ pengantinPria.namaPanggilan }}
      </p>
      <p class="caption-8 text-black text-center">
        Putra dari Bapak {{ pengantinPria.namaAyah }}
        <br />
        dan Ibu {{ pengantinPria.namaIbu }}
      </p>
    </div>
  </div>
</template>

<style>
.bg-mempelai {
  background-image: url("@/assets/images/background-mempelai.jpg");
  background-position: top;
  background-size: cover;
}
</style>
