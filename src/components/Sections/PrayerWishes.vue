<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import HomeService from "@/services/resources/home.service";
import { useRoute } from "vue-router";
import { useSnackbar } from "vue3-snackbar";

const snackbar = useSnackbar();
const route = useRoute();

type FromTypes = {
  from: string;
  message: string;
};

const loading: Ref<boolean> = ref(false);

const form: Ref<FromTypes> = ref({
  from: "",
  message: "",
});

const handleSubmit = async (): Promise<void> => {
  const payload: FromTypes = {
    from: form.value?.from,
    message: form.value?.message,
  };

  const secureId: string | string[] = route.params?.secureId;

  loading.value = true;
  await HomeService.postWishes(payload, secureId)
    .then(({ data: { data, message } }) => {
      if (data) {
        snackbar.add({
          type: "success",
          title: "Success",
          text: "Berhasil mengirim doa dan ucapan",
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
        text: "Gagal mengirim doa dan ucapan",
        group: "5862a88b",
        count: 1,
      });
    })
    .finally(() => (loading.value = false));
};
</script>

<template>
  <div class="flex flex-col bg-white relative">
    <div class="flex flex-col bg-white px-4 pb-6 pt-8">
      <p class="body-6-local mt-2 mb-14">
        Di dalam Hidup kami, cinta bukan hanya sekadar perasaan. Ia penuh dengan
        tindakan nyata, seperti pilihan-pilihan indah yang kami hadirkan dan
        kami abadikan dalam sebuah Galeri sederhana.
      </p>
      <p class="title-1-local text-black mb-4">Ucapkan Selamat</p>
      <div class="flex flex-col z-10">
        <label for="text" class="caption-1-local mb-2 text-black">Nama</label>
        <input
          v-model="form.from"
          type="text"
          id="fname"
          name="fname"
          class="rounded-lg mb-5 p-2 text-black bg-[#F8F4EA]"
        />
        <label for="text" class="caption-1-local mb-2 text-black">
          Isi Pesan
        </label>
        <textarea
          v-model="form.message"
          class="rounded-lg p-2 text-black bg-[#F8F4EA]"
          id="prayer"
          name="prayer"
          rows="4"
          cols="50"
        />
      </div>
      <div class="flex flex-col pt-5">
        <button
          class="bg-[#F8F4EA] border border-white mb-4 mt-12 py-1.5 px-3 rounded-xl space-x-2.5 z-10 mx-16"
          @click="handleSubmit"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 h-5 w-5 text-black"
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
          <p class="body-2 text-black">Kirim</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
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
