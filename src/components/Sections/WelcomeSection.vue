<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useSnackbar } from "vue3-snackbar";
import type { Ref } from "vue";

import HomeService from "@/services/resources/home.service";

const emit = defineEmits<{
  (e: "handleFotoFoter", value: any): void;
  (e: "handleDataPernikahan", value: any): void;
}>();

const route = useRoute();
const snackbar = useSnackbar();

const splittingUsername = (username: string): void => {
  const result = username.split("-");
  mempelaiPria.value = result[0];
  mempelaiWanita.value = result[1];
};

onMounted(() => {
  const username: string | null = route.params?.username as string;
  splittingUsername(username);
});

const invitedPerson: string | null = route.query?.to as string | null;

const loading: Ref<boolean> = ref(false);

const mempelaiPria: Ref<string> = ref("-");
const mempelaiWanita: Ref<string> = ref("-");

const handleClick = (): void => {
  const id: string | string[] = route.params?.secureId;
  loading.value = true;

  HomeService.getHome(id)
    .then((result): void => {
      const { data, status } = result;
      if (status == 200) {
        if (data.data?.gallery?.length > 0) {
          emit(
            "handleFotoFoter",
            data.data?.gallery[data.data?.gallery.length - 1]
          );
        }

        emit("handleDataPernikahan", data?.data);
        // dataPernikahan.value = { ...data?.data } as dataPernikahanType;
      } else {
        console.error(data?.data?.message);
        snackbar.add({
          type: "error",
          title: "Error",
          text: "Gagal memuat data!",
          group: "5862a88b",
          count: 1,
        });
      }
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => (loading.value = false));
};
</script>

<template>
  <div class="flex flex-col" style="max-width: 480px">
    <div class="container flex flex-col h-screen justify-center">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        class="flex flex-col justify-center items-center text-black rounded-full py-[71px]"
      >
        <img src="@/assets/images/p-bride-and-groom.webp" width="250" />
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-9 text-brown-10 mt-5"
        >
          THE WEDDING OF
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="flex flex-row items-center my-4"
        >
          <p class="headline-2 text-center text-brown-10 uppercase">
            {{ mempelaiPria }}
          </p>
          <p class="headline-2 text-center text-brown-10 uppercase mx-2">&</p>
          <p class="headline-2 text-center text-brown-10 uppercase">
            {{ mempelaiWanita }}
          </p>
        </div>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-9 text-brown-10 mb-11"
        >
          08 . 08 . 2023
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-9 text-brown-10"
        >
          KEPADA :
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-11 text-brown-10 mb-7 mt-2.5"
        >
          {{ invitedPerson }}
        </p>
        <button
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          @click="handleClick"
          class="border border-[#AB738C] px-8 py-3 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all mx-6"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 h-3 w-3 text-[#AB738C]"
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
          <p class="body-4 text-[#AB738C]">Buka Undangan</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url("@/assets/images/bg-cover.webp");
  background-position: center;
  background-size: cover;
}
.bg-container {
  background-image: url("@/assets/images/bg-welcome.webp");
  background-size: cover;
  background-position: center;
}

.bg-container-shadow {
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}
</style>
