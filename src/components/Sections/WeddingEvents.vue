<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

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
const route = useRoute();

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

const handleSave = (): void => {
  window.open(
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MW4zdjVrcmVqOWI5cW5icTBvZ2NrdmU5NjIgYWRtLnFpbnZpQG0&tmsrc=adm.qinvi%40gmail.com"
  );
};

const getDay = (e: string, type: string): string | null => {
  if (!e) return null;

  if (type == "name") {
    return new Date(e).toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  return new Date(e).toLocaleDateString("en-US", {
    day: "numeric",
  });
};

const getMonth = (e: string): string | null => {
  if (!e) return null;

  return new Date(e).toLocaleDateString("en-US", {
    month: "long",
  });
};

const getYear = (e: string): string | null => {
  if (!e) return null;

  return new Date(e).toLocaleDateString("en-US", {
    year: "numeric",
  });
};

onMounted(() => {
  bindingData();
});
</script>

<template>
  <div
    class="flex flex-col items-center px-4 bg-wedding relative w-max-[331px]"
  >
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="title-1-local text-black text-center my-6"
    >
      The Wedding Day
    </p>
    <p
      data-aos="fade-up"
      data-aos-duration="2500"
      class="body-2-local text-black text-center mx-12 mb-12"
    >
      Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia
      Tuhan, kami hendak menyampaikan kabar bahagia pernikahan kami
    </p>
    <template v-for="(e, i) in props.acara" :key="i">
      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        class="container-event flex flex-col items-center rounded-xl mb-8"
      >
        <p class="title-2-local text-black mb-6 mt-5">{{ e.namaAcara }}</p>
        <div class="flex flex-row">
          <div class="flex flex-col border-r border-r-black text-black px-2">
            <p class="body-3-local">{{ getDay(e.tanggal, "name") }}</p>
            <p class="body-4-local">{{ getDay(e.tanggal, "number") }}</p>
            <p class="body-3-local">{{ getMonth(e.tanggal) }}</p>
            <p class="body-3-local">{{ getYear(e.tanggal) }}</p>
          </div>
          <div class="flex flex-col text-center px-2">
            <p class="title-3-local text-black my-2" style="max-width: 300px">
              {{ e.lokasi }}
            </p>
            <p
              class="body-5-local text-[#404040;] my-2"
              style="max-width: 300px"
            >
              {{ e.alamat }}
            </p>
            <p class="body-5-local text-black my-2" style="max-width: 300px">
              {{ e.waktuMulai }} - {{ e.waktuSelesai }} WIB
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              class="flex flex-col"
            >
              <button
                @click="openMap(e)"
                class="bg-[#F8F4EA] border border-white mb-6 py-1.5 px-3 rounded-lg space-x-2.5 z-10"
              >
                <span class="body-2-local text-black text-center">
                  View Maps
                </span>
              </button>
            </div>
          </div>
        </div>
        <img src="@/assets/images/p-wedding-events.webp" />
      </div>
    </template>
    <p class="body-6-local mt-2">
      Di dalam Hidup kami, cinta bukan hanya sekadar perasaan. Ia penuh dengan
      tindakan nyata, seperti pilihan-pilihan indah yang kami hadirkan dan kami
      abadikan dalam sebuah Galeri sederhana.
    </p>
  </div>
</template>

<style scoped>
.container-event {
  border-radius: 16px 16px 0px 0px;
  background: #fffdfb;
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
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.26px;
}

.title-3-local {
  text-align: center;
  font-family: "Poppins";
  font-size: 21.55px;
  font-style: normal;
  font-weight: 300;
  line-height: 30.17px;
}

.body-2-local {
  text-align: center;
  font-family: "EB Garamond";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.57px;
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
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 21.77px;
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
</style>
