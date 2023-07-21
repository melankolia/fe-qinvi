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
      jamMulai: props.acara[0].waktuMulai,
      lokasi: props.acara[0].lokasi,
      alamat: props.acara[0].alamat,
      urlMap: props.acara[0].urlMap,
      ingatkanAcara: props.acara[0].ingatkanAcara,
      hari: props.acara[0].tanggal.split(",")[0],
      tanggal: props.acara[0].tanggal.split(",")[1],
    };

    acaraResepsi.value = {
      jamMulai: props.acara[1].waktuMulai,
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
  <div class="flex flex-col items-center px-4 pt-16 pb-5 bg-wedding bg-white">
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      class="flex flex-col pt-20 pb-32 bg-container-shadow rounded-tema-jawa mb-10"
    >
      <div class="flex flex-col items-center">
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          src="@/assets/images/img-header.webp"
          alt="Qinvi Header Events"
          class="mb-1"
          width="211"
        />
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-20 text-black"
        >
          With Love
        </p>
        <hr class="border-black mt-6 mb-9" style="width: 40%" />
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-14 text-black text-center mx-7 mb-12"
        >
          Dengan segala kerendahan hati dan dengan ucapan syukur atas karunia
          Tuhan, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di
          acara pernikahan kami yang akan dilaksanakan pada:
        </p>
      </div>

      <!-- Akad Nikah -->
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="flex flex-col items-center rounded-xl bg-akad py-14 mx-8"
      >
        <p class="headline-21 text-gold-10 mt-2 uppercase">Akad Nikah</p>
        <hr class="border-gold-10 mt-5 mb-7" style="width: 40%" />
        <p class="body-7 text-gold-10 my-2">{{ acaraAkad.hari }}</p>
        <p class="body-7 text-gold-10 my-5">{{ acaraAkad.tanggal }}</p>
        <p class="body-7 text-gold-10 my-2">{{ acaraAkad.jamMulai }} WIB</p>
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          src="@/assets/images/img-building.png"
          width="128"
          alt="Qinvi Header Events"
          class="my-7"
        />
        <p
          class="body-7 text-gold-10 text-center mt-2 mb-6"
          style="max-width: 300px"
        >
          {{ acaraAkad.lokasi }}
        </p>
        <p
          class="body-8 text-gold-10 text-center mt-2 mb-6"
          style="max-width: 300px"
        >
          {{ acaraAkad.alamat }}
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="flex flex-col items-center"
        >
          <button
            @click="openMap(acaraAkad)"
            class="button-date bg-linear-btn px-8 py-4 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all my-4 mx-6"
          >
            <p class="body-6 text-white">Lihat Lokasi</p>
          </button>
          <button
            @click="openAcara(acaraAkad)"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            class="button-date bg-linear-btn px-8 py-4 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all my-4 mx-6"
          >
            <p class="body-6 text-white">Add to Calendar</p>
          </button>
        </div>
      </div>

      <!-- Resepsi -->
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="flex flex-col mt-2.5 items-center rounded-xl bg-resepsi py-14 mx-8"
      >
        <p class="headline-21 text-gold-10 mt-2 uppercase text-center">
          Resepsi <br />
          Pernikahan
        </p>
        <hr class="border-gold-10 mt-5 mb-7" style="width: 40%" />
        <p class="body-7 text-gold-10 my-2">{{ acaraResepsi.hari }}</p>
        <p class="body-7 text-gold-10 my-5">{{ acaraResepsi.tanggal }}</p>
        <p class="body-7 text-gold-10 my-2">{{ acaraResepsi.jamMulai }} WIB</p>
        <p class="body-9 text-gold-10 my-2 text-center" style="">
          (diawali dengan prosesi Kadga Pora)
        </p>
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          src="@/assets/images/img-building.png"
          width="128"
          alt="Qinvi Header Events"
          class="my-7"
        />
        <p
          class="body-7 text-gold-10 text-center mt-2 mb-6"
          style="max-width: 300px"
        >
          {{ acaraResepsi.lokasi }}
        </p>
        <p
          class="body-8 text-gold-10 text-center mt-2 mb-6"
          style="max-width: 300px"
        >
          {{ acaraResepsi.alamat }}
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="flex flex-col items-center"
        >
          <button
            @click="openMap(acaraResepsi)"
            class="button-date bg-linear-btn px-8 py-4 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all my-4 mx-6"
          >
            <p class="body-6 text-white">Lihat Lokasi</p>
          </button>
          <button
            @click="openAcara(acaraResepsi)"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            class="button-date bg-linear-btn px-8 py-4 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all my-4 mx-6"
          >
            <p class="body-6 text-white">Add to Calendar</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-wedding {
  background-image: url("@/assets/images/bg-wedding.webp");
  background-size: cover;
}

.bg-akad {
  background-image: url("@/assets/images/bg-akad.webp");
  background-size: cover;
}

.bg-resepsi {
  background-image: url("@/assets/images/bg-resepsi.webp");
  background-size: cover;
}

.bg-container-shadow {
  background: rgba(244, 234, 225, 0.77);
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}

.bg-linear-btn {
  background: linear-gradient(282.22deg, #000000 0%, #a98466 100%);
}
</style>
