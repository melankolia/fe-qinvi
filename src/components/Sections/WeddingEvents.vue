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
      jamMulai: props.acara[0]?.waktuMulai?.split(":").splice(0, 2).join(":"),
      lokasi: props.acara[0].lokasi,
      alamat: props.acara[0].alamat,
      urlMap: props.acara[0].urlMap,
      ingatkanAcara: props.acara[0].ingatkanAcara,
      hari: props.acara[0].tanggal.split(",")[0],
      tanggal: props.acara[0].tanggal.split(",")[1],
    };

    acaraResepsi.value = {
      jamMulai: props.acara[1]?.waktuMulai?.split(":").splice(0, 2).join(":"),
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

onMounted(() => {
  bindingData();
});
</script>

<template>
  <div
    class="flex flex-col items-center px-4 pt-16 pb-5 bg-wedding bg-blue-10 text-white"
  >
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      class="flex flex-col py-20 bg-container-shadow rounded-tema-jawa mb-10"
    >
      <p class="headline-local">Acara Pernikahan</p>
      <!-- Akad Nikah -->
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="flex flex-col items-center rounded-xl bg-akad pt-14 mx-1"
      >
        <p class="title-1 mt-2 uppercase">Akad Nikah</p>
        <p class="subtitle-1 my-2">
          {{ acaraAkad.hari }}, {{ acaraAkad.tanggal }}
        </p>
        <p class="subtitle-1 my-2">{{ acaraAkad.jamMulai }} WIB</p>
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          src="@/assets/images/img-building.png"
          width="256"
          alt="Qinvi Header Events"
          class="mb-7"
        />
      </div>

      <!-- Resepsi -->
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="flex flex-col mt-2.5 items-center rounded-xl bg-resepsi mx-1"
      >
        <p class="title-1 mt-2 uppercase">Resepsi Pernikahan</p>
        <p class="subtitle-1 text-center mt-7 mb-2.5">
          Kami memohon kehadiran Bapak/Ibu/Saudara/i dalam pelaksanaan Resepsi
          Pernikahan yang akan dilaksanakan pada:
        </p>
        <p class="subtitle-1 my-2">
          {{ acaraResepsi.hari }}, {{ acaraResepsi.tanggal }}
        </p>
        <p class="subtitle-1 my-2">{{ acaraResepsi.jamMulai }} WIB</p>
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          src="@/assets/images/img-building.png"
          width="256"
          alt="Qinvi Header Events"
          class="mb-7"
        />
        <p class="subtitle-1 text-center mt-2" style="max-width: 300px">
          {{ acaraResepsi.lokasi }}
        </p>
        <p class="subtitle-1 text-center mt-2 mb-4" style="max-width: 300px">
          {{ acaraResepsi.alamat }}
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="flex flex-col items-center"
        >
          <button
            @click="() => openMap(acaraResepsi)"
            class="button-date bg-white px-2.5 py-2 rounded-lg flex flex-row justify-center items-center space-x-2.5 transition-all mx-6 mb-4"
          >
            <p class="title-3 text-blue-10">Lihat Peta</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headline-local {
  color: #e8eced;
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.2px; /* 123.429% */
}

.title-1 {
  color: #e8eced;
  text-align: center;
  font-family: "EB Garamond";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-transform: uppercase;
}

.title-3 {
  color: #6d829b;
  text-align: center;
  font-family: "Jost";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;
}

.subtitle-1 {
  color: #e8eced;
  font-family: "EB Garamond";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
  text-transform: uppercase;
}
/* .bg-wedding {
  background-image: url("@/assets/images/bg-wedding.webp");
  background-size: cover;
} */

/* .bg-akad {
  background-image: url("@/assets/images/bg-akad.webp");
  background-size: cover;
} */

/* .bg-resepsi {
  background-image: url("@/assets/images/bg-resepsi.webp");
  background-size: cover;
} */

.bg-container-shadow {
  background: #ffffff1a;
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}

.bg-linear-btn {
  background: linear-gradient(282.22deg, #000000 0%, #a98466 100%);
}
</style>
