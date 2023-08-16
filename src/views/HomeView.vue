<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import WelcomeSection from "@/components/Sections/WelcomeSection.vue";
import ButtonMusic from "@/components/ButtonMusic.vue";
import { useRoute } from "vue-router";
import { useHead } from "unhead";

const isOpen: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);

const route = useRoute();

const invitedPerson: string | null = route.query?.to as string | null;

const handleClick = (): void => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    isOpen.value = true;
  }, 2000);
};

useHead({
  title: "Mitoni Bella & Fredo",
});
</script>

<template>
  <div class="flex flex-col mx-auto relative" style="max-width: 480px">
    <div
      v-if="!isOpen"
      class="flex flex-col h-screen justify-center px-8 bg-[#5C2947] relative"
    >
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        class="flex flex-col items-center text-black background-linear rounded-full py-[71px] z-10"
      >
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-9 text-white"
        >
          UNDANGAN
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="flex flex-col items-center mt-8 mb-2.5"
        >
          <p class="headline-2 text-center text-white uppercase">
            Mitoni <br />
            7 BUlanan
          </p>
        </div>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-6 text-white mt-8"
        >
          Bella & Fredo
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-6 text-white mb-11 mt-10"
        >
          26 Agustus 2023
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="headline-9 text-white"
        >
          KEPADA :
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="caption-11 text-white mb-7 mt-2.5"
        >
          {{ invitedPerson }}
        </p>
        <button
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          @click="handleClick"
          class="button-date bg-linear-btn px-8 py-3.5 rounded-3xl flex flex-row justify-center items-center space-x-2.5 transition-all mx-6"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 h-3 w-3 text-white"
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
          <p class="body-4 text-white">Buka Undangan</p>
        </button>
      </div>
      <img
        src="@/assets/images/bg-cover.webp"
        class="absolute bottom-0 left-0"
      />
    </div>
    <div
      class="flex flex-col mx-none md:mx-auto"
      v-else
      style="max-width: 480px"
    >
      <WelcomeSection id="welcomeSection" />
      <ButtonMusic />
    </div>
  </div>
</template>

<style scoped>
.background-linear {
  background: linear-gradient(
    0deg,
    rgba(255, 247, 239, 0.47) 100%,
    rgba(244, 234, 225, 0.37) 100%
  );
}

.bg-linear-btn {
  background: linear-gradient(347deg, #5c2947 99.99%, #a98466 100%);
}

.bg-combo {
  background-image: url("@/assets/images/bg-combo.webp");
  background-size: cover;
}

.bg-combo-linear {
  background: rgba(244, 234, 225, 0.77);
  box-shadow: 0px 0px 45px 1px rgba(0, 0, 0, 0.5);
}
</style>
