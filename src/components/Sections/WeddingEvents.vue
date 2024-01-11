<script setup lang="ts">
import type { Ref } from "vue";
import { defineProps, onMounted, ref } from "vue";
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
  ingatkanAcara: string;
};

type acaraPropsTypes = {
  acara: Array<acaraTypes>;
};

const acaraAkad: Ref<any> = ref({
  hari: null,
  tanggal: null,
  jamMulai: null,
  lokasi: null,
  alamat: null,
  urlMap: null,
  ingatkanAcara: null,
});

const acaraResepsi: Ref<any> = ref({
  hari: null,
  tanggal: null,
  jamMulai: null,
  lokasi: null,
  alamat: null,
  urlMap: null,
  ingatkanAcara: null,
});

const props = defineProps<acaraPropsTypes>();

const route = useRoute();

const bindingData = (): void => {
  props.acara.map((e: acaraTypes) => {
    e.tanggal = new Date(e.tanggal).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  });

  if (props.acara.length > 0) {
    acaraAkad.value = {
      waktuMulai: props.acara[0]?.waktuMulai?.split(":").splice(0, 2).join(":"),
      waktuSelesai: props.acara[0]?.waktuSelesai
        ?.split(":")
        .splice(0, 2)
        .join(":"),
      lokasi: props.acara[0].lokasi,
      alamat: props.acara[0].alamat,
      urlMap: props.acara[0].urlMap,
      ingatkanAcara: props.acara[0].ingatkanAcara,
      hari: props.acara[0].tanggal.split(",")[0],
      tanggal: props.acara[0].tanggal.split(",")[1],
    };

    acaraResepsi.value = {
      waktuMulai: props.acara[1]?.waktuMulai?.split(":").splice(0, 2).join(":"),
      waktuSelesai: props.acara[1]?.waktuSelesai
        ?.split(":")
        .splice(0, 2)
        .join(":"),
      lokasi: props.acara[1].lokasi,
      alamat: props.acara[1].alamat,
      urlMap: props.acara[1].urlMap,
      ingatkanAcara: props.acara[1].ingatkanAcara,
      hari: props.acara[1].tanggal.split(",")[0],
      tanggal: props.acara[1].tanggal.split(",")[1],
    };
  }
};

const openMap = (e: acaraTypes): void => {
  window.open(e.urlMap);
};

const openAcara = (e: any): void => {
  window.open(e.ingatkanAcara);
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
  <div class="flex flex-col items-center px-5 pt-16 pb-5 bg-wedding bg-white">
    <div class="flex flex-row w-full justify-between items-center">
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-6-local text-white"
      >
        Wedding
        <br />
        <span class="headline-7-local">Event</span>
      </p>
      <div class="w-1/2 border-t border-white"></div>
    </div>
    <p class="body-7-local text-white text-center mt-5 mx-14">
      <span class="italic">Assalamu'alaikum Wr.Wb.</span> <br />
      Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk
      hadir dihari bahagia Pernikahan kami yang akan dilaksanakan pada:
    </p>
    <div
      data-aos="fade-down"
      data-aos-duration="2500"
      class="container-event flex flex-col items-center rounded-xl mb-8 mt-10"
    >
      <p class="title-2-local text-black mb-6 mt-5">
        {{ acaraAkad.namaAcara }}
      </p>
      <div class="flex flex-row">
        <div class="flex flex-col border-r border-r-black text-black px-2">
          <p class="body-3-local">{{ getDay(acaraAkad.tanggal, "name") }}</p>
          <p class="body-4-local">{{ getDay(acaraAkad.tanggal, "number") }}</p>
          <p class="body-3-local">{{ getMonth(acaraAkad.tanggal) }}</p>
          <p class="body-3-local">{{ getYear(acaraAkad.tanggal) }}</p>
        </div>
        <div class="flex flex-col text-center px-2">
          <p class="title-3-local text-black my-2" style="max-width: 300px">
            {{ acaraAkad.lokasi }}
          </p>
          <p class="body-5-local text-[#404040;] my-2" style="max-width: 300px">
            {{ acaraAkad.alamat }}
          </p>
          <p class="body-5-local text-black my-2" style="max-width: 300px">
            {{ acaraAkad.waktuMulai }} - {{ acaraAkad.waktuSelesai }} WIB
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            class="flex flex-col"
          >
            <button
              @click="openMap(acaraAkad)"
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
  </div>
  <div class="bg-wedding-2 px-5 pb-5">
    <div
      data-aos="fade-down"
      data-aos-duration="2500"
      class="container-event flex flex-col items-center rounded-xl mb-8 mt-10"
    >
      <p class="title-2-local text-black mb-6 mt-5">
        {{ acaraResepsi.namaAcara }}
      </p>
      <div class="flex flex-row">
        <div class="flex flex-col border-r border-r-black text-black px-2">
          <p class="body-3-local">{{ getDay(acaraResepsi.tanggal, "name") }}</p>
          <p class="body-4-local">
            {{ getDay(acaraResepsi.tanggal, "number") }}
          </p>
          <p class="body-3-local">{{ getMonth(acaraResepsi.tanggal) }}</p>
          <p class="body-3-local">{{ getYear(acaraResepsi.tanggal) }}</p>
        </div>
        <div class="flex flex-col text-center px-2">
          <p class="title-3-local text-black my-2" style="max-width: 300px">
            {{ acaraResepsi.lokasi }}
          </p>
          <p class="body-5-local text-[#404040;] my-2" style="max-width: 300px">
            {{ acaraResepsi.alamat }}
          </p>
          <p class="body-5-local text-black my-2" style="max-width: 300px">
            {{ acaraResepsi.waktuMulai }} - {{ acaraResepsi.waktuSelesai }} WIB
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            class="flex flex-col"
          >
            <button
              @click="openMap(acaraResepsi)"
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
  </div>
</template>

<style scoped>
.container-event {
  border-radius: 16px 16px 0px 0px;
  background: #fffdfb;
  box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.08);
}
.bg-wedding {
  background-image: url("@/assets/images/bg-wedding.webp");
  background-size: cover;
  background-position: center;
  min-height: 800px;
}

.bg-wedding-2 {
  background-color: #ffe8e8;
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

.headline-6-local {
  color: #fff;
  font-family: "Cormorant";
  font-size: 30px;
  font-style: italic;
  font-weight: 300;
  line-height: 30px;
}

.headline-7-local {
  color: #fff;
  font-family: "Inter";
  font-size: 25.313px;
  font-style: italic;
  font-weight: 400;
  line-height: 40px;
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

.body-7-local {
  color: #fff;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;
}
</style>
