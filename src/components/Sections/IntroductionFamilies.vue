<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const invitedPerson: string | null = route.query?.to as string | null;

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
  <div class="flex flex-col items-end bg-blue-05">
    <img class="mt-7 mr-4" src="@/assets/images/logo-wedo.webp" width="108" />
    <div
      class="flex flex-col items-center p-8 -mt-14 bg-quotes text-blue-10 relative"
    >
      <div data-aos="zoom-in-up" data-aos-duration="2000" class="flex flex-col">
        <p class="title-1">
          Kepada Bapak/Ibu/ <br />
          Saudara/i,
        </p>
        <p class="title-2">{{ invitedPerson }}</p>
        <p class="title-3 uppercase mt-8 mb-2.5">
          Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami
          memohon kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami:
        </p>
        <p class="title-4 uppercase">{{ pengantinPria.namaLengkap }}</p>
        <p class="title-5 my-2">dan</p>
        <p class="title-4 uppercase mb-2.5">
          {{ pengantinWanita.namaLengkap }}
        </p>
      </div>
      <p data-aos="zoom-in-up" data-aos-duration="2000" class="caption-8">
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>

      <p data-aos="zoom-in-up" data-aos-duration="2000" class="caption-8 pt-4">
        [QS. Ar-Rum 21]
      </p>
    </div>

    <!-- EVENT SECTION'S -->
    <div class="flex flex-col pt-7 pb-9 bg-events">
      <div class="flex flex-col justify-center bg-blue-10 min-h-[166px]">
        <p class="headline-local text-blue-05 mb-10">Kedua Mempelai</p>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2500"
        class="flex flex-col items-center mb-24 px-10 -mt-14"
      >
        <img
          :src="pengantinWanita.urlPath"
          alt="Qinvi Wedding Photos Groom"
          class="mb-6 rounded-md"
        />
        <p
          style="font-style: normal"
          class="headline-local-2 font-bold mt-5 text-center"
        >
          {{ pengantinWanita.namaPanggilan }}
        </p>
        <div class="flex flex-col border border-blue-10 w-1/4 mb-4"></div>
        <p
          style="font-style: normal"
          class="caption-local text-blue-10 text-center mb-4"
        >
          {{ pengantinWanita.namaLengkap }}
        </p>
        <p class="caption-local-2">Putri dari :</p>
        <p class="caption-local-2">Bapak {{ pengantinWanita.namaAyah }}</p>
        <p class="caption-local-2 mb-7">Ibu {{ pengantinWanita.namaIbu }}</p>
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
            class="mb-6 rounded-md"
          />
        </div>
        <p
          style="font-style: normal"
          class="headline-local-2 font-bold mt-5 text-center"
        >
          {{ pengantinPria.namaPanggilan }}
        </p>
        <div class="flex flex-col border border-blue-10 w-1/4 mb-4"></div>
        <p
          style="font-style: normal"
          class="caption-local text-blue-10 text-center mb-4"
        >
          {{ pengantinPria.namaLengkap }}
        </p>
        <p class="caption-local-2">Putri dari :</p>
        <p class="caption-local-2">Bapak {{ pengantinPria.namaAyah }}</p>
        <p class="caption-local-2 mb-7">Ibu {{ pengantinPria.namaIbu }}</p>
        <div class="flex flex-col items-center px-1 mt-7" />
      </div>
      <p class="headline-local-3 text-blue-10 mb-10">
        Love is more than a feeling. <br />
        It is full of action.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* .bg-quotes {
  background-image: url("@/assets/images/bg-quotes.webp");
  background-size: cover;
  background-position: center;
} */

.bg-quotes-linear {
  background: rgba(244, 234, 225, 0.77);
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}

/* .bg-events {
  background-image: url("@/assets/images/bg-events.webp");
  background-size: cover;
  min-height: 1050px;
} */

.title-1 {
  font-family: "EB Garamond";
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}

.title-2 {
  font-family: "EB Garamond";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}

.title-3 {
  font-family: "EB Garamond";
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
}

.title-4 {
  font-family: "EB Garamond";
  font-size: 19px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
}

.title-5 {
  font-family: "Fleur De Leah";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
}

.headline-local {
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px; /* 123.077% */
}

.headline-local-2 {
  color: #5c7089;
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 120% */
}

.headline-local-3 {
  text-align: center;
  font-family: "Fleur De Leah";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.2px; /* 123.429% */
}
.caption-local {
  text-align: center;
  font-family: "EB Garamond";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 158.824% */
}

.caption-local-2 {
  color: #6d829b;
  text-align: center;
  font-family: "EB Garamond";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 161.538% */
}
</style>
