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
  <div class="flex flex-col bg-[#8EABB4] px-4 py-6">
    <p
      data-aos="fade-right"
      data-aos-duration="2500"
      class="headline-6 text-blue-10 mb-5 text-center"
    >
      Konfirmasi Kehadiran
    </p>
    <form action="#">
      <div class="flex flex-col">
        <input
          placeholder="Nama"
          v-model="form.nama"
          type="text"
          id="fname"
          name="fname"
          class="rounded-sm mb-5 p-2"
          required
        />
        <input
          v-model="form.nomor_handphone"
          placeholder="No Handphone"
          type="text"
          id="phone"
          name="phone"
          class="rounded-sm mb-5 p-2"
          required
        />
      </div>
      <div class="flex flex-col">
        <p class="caption-1 text-blue-10 mb-2">Kehadiran</p>

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
    <div class="flex flex-col items-center pt-5">
      <button
        class="button-date border border-white bg-blue-10 py-1.5 px-3 mt-4 rounded-2xl flex flex-row justify-center items-center space-x-2.5"
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
        <p class="body-2 text-white">Kirim Konfirmasi</p>
      </button>
    </div>
  </div>
</template>
