<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from "vue";
import type { Ref } from "vue";

type acaraTypes = {
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
};

type acaraPropsTypes = {
  acara: Array<acaraTypes>;
};
const props = defineProps<acaraPropsTypes>();

const tanggal: Ref<string> = ref("-");

const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    e.waktuMulai = `${e.waktuMulai.split(":")[0]}:${
      e.waktuMulai.split(":")[1]
    }`;

    e.waktuSelesai = `${e.waktuSelesai.split(":")[0]}:${
      e.waktuSelesai.split(":")[1]
    }`;
    if (e.namaAcara?.toLowerCase().includes("resepsi")) {
      tanggal.value = new Date(e.tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }
  });
};

const openMap = (e: acaraTypes): void => {
  window.open(e.urlMap);
};





onMounted(() => {
  bindingData();
});

watch(
  () => props.acara,
  () => bindingData()
);
</script>

<template>
  <div
    class="flex flex-col items-center px-4 bg-wedding relative w-max-[331px] bg-[#603F8B]"
  >
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="title-1-local text-white text-center my-6 z-10"
    >
      The Wedding Day
    </p>
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="body-2-local text-white text-center mb-12 z-10"
    >
      Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia
      Tuhan, kami hendak menyampaikan kabar bahagia pernikahan kami
    </p>
    <template v-for="(e, i) in props.acara" :key="i">
      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        class="container-event flex flex-col items-center rounded-xl mb-8 z-10"
      >
        <p class="title-2-local text-white mb-5 mt-10">{{ e.namaAcara }}</p>
        <div class="flex flex-col items-center text-center px-2">
          <p class="title-3-local text-black my-2" style="max-width: 300px">
            {{ e.lokasi }}
          </p>
          <p class="body-5-local text-[#404040] my-2" style="max-width: 300px">
            {{ e.alamat }}
          </p>
          <p class="body-5-local text-black my-2" style="max-width: 300px">
            {{ e.waktuMulai }} - {{ e.waktuSelesai }} WIB
          </p>
        </div>
        <button
          data-aos="fade-up"
          data-aos-duration="2500"
          @click="openMap(e)"
          class="bg-[#F8F4EA] border border-white mt-5 mb-6 py-1.5 px-3 rounded-lg space-x-2.5 z-10 w-3/4"
        >
          <span class="body-7-local text-black text-center"> View Maps </span>
        </button>
      </div>
    </template>
    <img
      src="@/assets/images/bg-events.webp"
      class="absolute top-0 bottom-0 my-auto"
    />
  </div>
</template>

<style scoped>
.container-event {
  border-radius: 16px 16px 0px 0px;
  background: rgba(255, 253, 251, 0.6);
  box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.08);
}
.bg-wedding {
  min-height: 940px;
}

.title-1-local {
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 33.9px;
  font-style: normal;
  font-weight: 400;
  line-height: 53px;
}

.title-2-local {
  color: #000;
  text-align: center;
  font-family: Pinyon Script;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.26px; /* 120.167% */
}

.title-3-local {
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 21.55px;
  font-style: normal;
  font-weight: 300;
  line-height: 30.17px; /* 140% */
}
.body-2-local {
  text-align: center;
  font-family: EB Garamond;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.57px; /* 117% */
}

.body-3-local {
  font-family: "Poppins";
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 24.57px;
}

.body-4-local {
  text-align: center;
  font-family: "Poppins";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
}

.body-5-local {
  color: #404040;
  text-align: center;
  font-family: "Poppins";
  font-size: 15.55px;
  font-style: normal;
  font-weight: 300;
  line-height: 21.77px; /* 140% */
}

.body-6-local {
  color: #000;
  text-align: center;
  font-family: "Bona Nova";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
}

.body-7-local {
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 13.55px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
