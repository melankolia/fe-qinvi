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
  <div class="flex flex-col bg-brown-80 px-4 py-6">
    <p class="headline-3 text-green-10 mb-5 text-center">DOA DAN UCAPAN</p>
    <div class="flex flex-col">
      <p class="caption-1 text-white mb-1.5">Nama Kamu</p>
      <input
        v-model="form.from"
        type="text"
        id="fname"
        name="fname"
        class="rounded-sm mb-5"
      />
      <p class="caption-1 text-white mb-1.5">Doa dan Ucapan</p>
      <textarea
        v-model="form.message"
        class="rounded-sm"
        id="prayer"
        name="prayer"
        rows="4"
        cols="50"
      />
    </div>
    <div class="flex flex-col items-center pt-5">
      <button
        class="button-date bg-brown-10 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
        @click="handleSubmit"
      >
        <svg
          v-if="loading"
          class="animate-spin -ml-1 h-5 w-5 text-brown-70"
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
        <img
          v-else
          src="@/assets/icons/icon-email.png"
          height="18"
          width="18"
        />
        <p class="body-2 text-brown-70">Kirim Ucapan</p>
      </button>
    </div>
  </div>
</template>
