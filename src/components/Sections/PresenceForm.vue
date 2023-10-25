<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import HomeService from "@/services/resources/home.service";
import { useRoute } from "vue-router";
import { useSnackbar } from "vue3-snackbar";

const snackbar = useSnackbar();
const route = useRoute();

type FormKehadiranType = {
  nama: string;
  nomor_handphone: string;
  hadir: number;
};

const loading: Ref<boolean> = ref(false);

const form: Ref<FormKehadiranType> = ref({
  nama: "",
  nomor_handphone: "",
  hadir: 0,
});

const handleSubmit = async (): Promise<void> => {
  loading.value = true;
  const payload: FormKehadiranType = {
    nama: form.value?.nama,
    nomor_handphone: form.value?.nomor_handphone,
    hadir: form.value?.hadir,
  };

  const secureId: string | string[] = route.params?.secureId;

  await HomeService.postPresence(payload, secureId)
    .then(({ data: { data, message } }) => {
      if (data) {
        snackbar.add({
          type: "success",
          title: "Success",
          text: "Berhasil mengirim data kehadiran",
          group: "5862a88b",
          count: 1,
        });
      } else {
        throw new Error(message);
      }
    })
    .catch((err) => {
      console.error(err);
      snackbar.add({
        type: "error",
        title: "Error",
        text: "Gagal mengirim data kehadiran",
        group: "5862a88b",
        count: 1,
      });
    })
    .finally(() => (loading.value = false));
};

const handleConfirm = (): void => {
  if (confirm("Apakah anda yakin dengan kehadiran anda ?")) {
    handleSubmit();
  }
};
</script>

<template>
  <div class="flex flex-col bg-white p-6">
    <!-- <p class="body-6-local mt-2 mb-14">
      Di dalam Hidup kami, cinta bukan hanya sekadar perasaan. Ia penuh dengan
      tindakan nyata, seperti pilihan-pilihan indah yang kami hadirkan dan kami
      abadikan dalam sebuah Galeri sederhana.
    </p> -->
    <p class="title-1-local text-black mb-4">Ucapkan Selamat</p>
    <form action="#">
      <div class="flex flex-col">
        <label for="text" class="caption-1-local mb-1 text-black">Nama</label>
        <input
          v-model="form.nama"
          type="text"
          id="fname"
          name="fname"
          class="rounded-lg mb-5 p-2 text-black bg-[#F8F4EA]"
          required
        />
        <label for="phone" class="caption-1-local mb-18 text-black">
          No Hp
        </label>
        <input
          v-model="form.nomor_handphone"
          type="text"
          id="phone"
          name="phone"
          class="rounded-lg mb-5 p-2 bg-[#F8F4EA]"
          required
        />
      </div>
      <div class="flex flex-col">
        <p class="caption-8 text-black mb-2">Kehadiran</p>

        <div class="flex flex-row space-x-12">
          <div class="flex flex-row space-x-2">
            <input
              type="radio"
              id="ya"
              name="fav_language"
              :value="1"
              v-model="form.hadir"
              required
            />
            <label class="text-blue-10 caption-1" for="ya">Ya</label>
          </div>
          <div class="flex flex-row space-x-2">
            <input
              type="radio"
              id="tidak"
              name="fav_language"
              :value="0"
              v-model="form.hadir"
              required
            />
            <label class="text-blue-10 caption-1" for="tidak">Tidak</label>
          </div>
        </div>
      </div>
    </form>
    <div class="flex flex-col pt-5">
      <button
        class="button-date border border-white bg-yellow-20 py-1.5 px-3 mt-4 rounded-2xl flex flex-row justify-center items-center space-x-2.5"
        @click="handleConfirm"
        :disabled="loading"
      >
        <svg
          v-if="loading"
          class="animate-spin -ml-1 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <p class="body-2 text-black">Kirim Konfirmasi</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.caption-1-local {
  font-family: "Poppins";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.525px;
}
.title-1-local {
  text-align: center;
  font-family: "MonteCarlo";
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.805px;
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
