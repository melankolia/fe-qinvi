<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Ref } from "vue";

const mempelaiPria: Ref<string> = ref("-");
const mempelaiWanita: Ref<string> = ref("-");

const route = useRoute();

const splittingUsername = (username: string): void => {
  const result = username.split("-");
  mempelaiPria.value = result[0];
  mempelaiWanita.value = result[1];
};

onMounted(() => {
  const username: string | null = route.params?.username as string;
  console.log(username);
  splittingUsername(username);
});
</script>

<template>
  <div
    class="flex flex-col w-full text-center bg-container justify-end text-white"
  >
    <p data-aos="fade-up" data-aos-duration="2500" class="headline-11">
      The Wedding Of <br />
      {{ mempelaiPria }} & {{ mempelaiWanita }}
    </p>
    <div class="flex flex-row justify-center mt-20 mb-7 caption-7">
      <div
        class="flex flex-row border-r border-white border-y px-6 py-1 space-x-6"
      >
        <div class="flex flex-col">
          <p>
            30 <br />
            Hari
          </p>
          <p>
            15 <br />
            Menit
          </p>
        </div>
        <div class="flex flex-col">
          <p>
            30 <br />
            Hari
          </p>
          <p>
            15 <br />
            Menit
          </p>
        </div>
      </div>
      <div class="flex flex-col border-white border-y px-6 py-1 justify-center">
        Save The Dates <br />
        18.08.2023
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.bg-container {
  background-image: url("@/assets/images/bg-welcome.webp");
  background-size: cover;
  background-position: center;
  height: 600px;
}
</style>
