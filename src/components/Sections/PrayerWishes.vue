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
  <div class="flex flex-col bg-[#EEF1F3]">
    <div
      data-aos="fade-right"
      data-aos-duration="2500"
      class="flex flex-col w-[300px] bg-[#8EABB4] -mt-24 self-end p-6 mr-4"
    >
      <p class="body-2 text-blue-10 text-shadow">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        <br />
        <br />
        Wassalamualaikum Warahmatullahi Wabarakatuh
      </p>
    </div>
    <div class="flex flex-col bg-[#EEF1F3] px-4 pb-6 pt-8">
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-6 text-blue-10 mb-5 text-center"
      >
        Kirim Ucapan
      </p>
      <div class="flex flex-col">
        <input
          placeholder="Nama"
          v-model="form.from"
          type="text"
          id="fname"
          name="fname"
          class="rounded-sm mb-5 p-2"
        />
        <textarea
          placeholder="Give Your Wish"
          v-model="form.message"
          class="rounded-sm p-2"
          id="prayer"
          name="prayer"
          rows="4"
          cols="50"
        />
      </div>
      <div class="flex flex-col pt-5">
        <button
          class="button-date border border-white bg-blue-10 py-1.5 px-3 rounded-2xl flex flex-row justify-center items-center space-x-2.5"
          @click="handleSubmit"
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
          <p class="body-2 text-white">Kirim Ucapan</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
