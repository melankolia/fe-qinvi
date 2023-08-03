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
  <div class="flex flex-col bg-blue-05 text-white bg-combo px-8 pt-9">
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      class="flex flex-col pt-20 bg-combo-linear rounded-tema-jawa mb-10"
    >
      <div class="flex flex-col px-6 py-6">
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-local text-center font-extralight mb-5"
        >
          Konfirmasi Kehadiran
        </p>
        <p class="title-1">
          Kehadiran Bapak/Ibu/Saudara/i akan menjadi kehormatan besar bagi kami
          dan keluarga. Mohon konfirmasi kehadiran Anda melalui formulir
          reservasi di bawah:
        </p>
        <form action="#">
          <div class="flex flex-col">
            <p class="headline-12 mb-1.5">Nama</p>
            <input
              placeholder="Nama"
              v-model="form.nama"
              type="text"
              id="fname"
              name="fname"
              class="rounded-sm mb-5 p-2 text-brown-30"
              required
            />
            <p class="headline-12 mb-1.5">No Hp:</p>
            <input
              v-model="form.nomor_handphone"
              placeholder="No Handphone"
              type="text"
              id="phone"
              name="phone"
              class="rounded-sm mb-5 p-2 text-brown-30"
              required
            />
          </div>
          <div class="flex flex-col">
            <p class="headline-12 mb-1.5">Kehadiran</p>

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
                <label class="caption-1" for="ya">Ya</label>
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
                <label class="caption-1" for="tidak">Tidak</label>
              </div>
            </div>
          </div>
        </form>
        <div class="flex flex-col pt-5">
          <button
            class="button-date bg-white px-2.5 py-2 rounded-lg flex flex-row justify-center items-center space-x-2.5 transition-all mx-6 mb-4"
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
            <p class="title-3">Kirim Konfirmasi</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .bg-combo {
} */

.headline-local {
  color: #e8eced;
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 108.571% */
}

.title-1 {
  color: #e8eced;
  text-align: center;
  font-family: " EB Garamond";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

.bg-combo-linear {
  background: #6d829b;
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
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
</style>
