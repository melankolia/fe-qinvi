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
  <div class="flex flex-col bg-green-50 px-4 py-16">
    <div class="flex flex-col my-4">
      <p class="headline-7 text-black mb-8 text-center">Best Wishes</p>
      <p class="headline-8 text-black mb-5 text-center">
        Thanks for all the wedding wishes! <br />You made a great day even
        greater!
      </p>
    </div>
    <div class="flex flex-col">
      <input
        v-model="form.from"
        type="text"
        id="fname"
        name="fname"
        class="rounded-sm mb-8 px-2 pb-2 pt-1"
        placeholder="Nama"
      />
      <textarea
        placeholder="Give your wishes"
        v-model="form.message"
        class="rounded-sm px-2 pt-1"
        id="prayer"
        name="prayer"
        rows="4"
        cols="50"
      />
    </div>
    <button
      class="button-date bg-blue-10 py-1.5 px-3 mt-4 rounded-2xl flex flex-row justify-center items-center space-x-2.5"
      @click="handleSubmit"
      style="max-width: 120px"
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
      <p class="body-2 text-white">Kirim Ucapan</p>
    </button>
  </div>
</template>
