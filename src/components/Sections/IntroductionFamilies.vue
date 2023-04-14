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
    <div class="flex flex-col items-center p-8 bg-green-30 relative">
      <img
        data-aos="fade-up"
        data-aos-duration="2500"
        width="85"
        height="78"
        src="@/assets/images/icon-sincan.png"
        alt="Qinvi Wedding Icon"
        class="mb-4 mt-10"
      />
      <p
        data-aos="fade-down"
        data-aos-duration="2500"
        class="caption-8 text-white"
      >
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <p
        data-aos="fade-down"
        data-aos-duration="2500"
        class="caption-8 text-white pt-4"
      >
        - QS. Ar-Rum 21 -
      </p>
      <img
        width="100"
        class="h-[103px] absolute top-0 left-0"
        src="@/assets/images/bg-leaf-l.webp"
        alt="Qinvi Wedding Icon Leaf"
      />
      <img
        width="137"
        class="h-[147px] absolute bottom-0 right-0"
        src="@/assets/images/bg-leaf-r.webp"
        alt="Qinvi Wedding Icon Leaf"
      />
    </div>
    <div class="flex flex-col px-6 relative pt-7 pb-9 bg-events">
      <div
        data-aos="fade-right"
        data-aos-duration="2500"
        class="flex flex-col relative px-10 mb-36"
      >
        <div class="flex flex-col max-w-[200px]">
          <img
            src="@/assets/images/img-lukman.webp"
            alt="Qinvi Wedding Photos Groom"
            width="200"
          />
          <p class="headline-7 text-blue-10 my-1">
            {{ pengantinPria.namaLengkap }}
          </p>
          <p class="caption-11 text-blue-10">
            <span class="caption-10">Putra dari : </span><br />
            Bapak {{ pengantinPria.namaAyah }}
            <br />
            Ibu {{ pengantinPria.namaIbu }}
          </p>
        </div>
        <p class="headline-15 text-green-40 absolute top-0 left-0 orientation">
          THE GROOM
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        class="flex flex-col items-end relative px-10"
      >
        <div class="flex flex-col max-w-[200px]">
          <img
            src="@/assets/images/img-erryca.webp"
            alt="Qinvi Wedding Photos Groom"
            width="200"
          />
          <p class="headline-7 text-blue-10">
            {{ pengantinWanita.namaLengkap }}
          </p>
          <p class="caption-11 text-blue-10">
            <span class="caption-10">Putri dari : </span><br />
            Bapak {{ pengantinWanita.namaAyah }}
            <br />
            Ibu {{ pengantinWanita.namaIbu }}
          </p>
        </div>
        <p class="headline-15 text-green-40 absolute top-0 right-0 orientation">
          THE BRIDE
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-events {
  background-image: url("@/assets/images/bg-events.webp");
  background-size: cover;
  background-position: center;
  height: 1050px;
}

.orientation {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>
