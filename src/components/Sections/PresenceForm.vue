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
  hadir: number;
};

const loading: Ref<boolean> = ref(false);

const form: Ref<FormKehadiranType> = ref({
  nama: "",
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
  <div class="flex flex-col justify-end bg-presence px-5 pb-10 pt-40">
    <div class="flex flex-col px-6 py-6 bg-[#AB738C] rounded-xl">
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="headline-1-local text-white text-center font-extralight mb-5"
      >
        RSVP
      </p>
      <p class="body-1-local mx-8">
        Konfirmasi kehadiran Anda dengan mengisi form berikut
      </p>
      <form action="#">
        <div class="flex flex-col">
          <p class="headline-12 text-white mb-1.5">Nama</p>
          <input
            placeholder="Nama"
            v-model="form.nama"
            type="text"
            id="fname"
            name="fname"
            class="rounded-sm mb-5 p-2 text-white"
            required
          />
        </div>
        <div class="flex flex-col">
          <p class="headline-12 text-white mb-1.5">Kehadiran</p>
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
              <label class="text-white caption-1" for="ya">Ya</label>
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
              <label class="text-white caption-1" for="tidak">Tidak</label>
            </div>
          </div>
        </div>
      </form>
      <div class="flex flex-col pt-5">
        <button
          class="button-date border border-[#AB738C] bg-white py-1.5 px-3 mt-4 rounded-2xl flex flex-row justify-center items-center space-x-2.5"
          @click="handleConfirm"
          :disabled="loading"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 h-5 w-5 text-[#AB738C]"
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
          <p class="body-2 text-[#AB738C]">Submit</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-presence {
  background-image: url("@/assets/images/bg-presence.webp");
  background-size: cover;
  background-position: center;
}
.headline-1-local {
  color: #fff;
  text-align: center;
  font-family: "Vidaloka";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 31.5px; /* 90% */
  text-transform: uppercase;
}

.body-1-local {
  color: #fff;
  text-align: center;
  font-family: "Varela Round";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 200% */
}
</style>
