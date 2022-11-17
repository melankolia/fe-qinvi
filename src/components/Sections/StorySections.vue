<script setup lang="ts">
import { defineProps, computed } from "vue";

type ceritaCintaTypes = {
  createdDate: string;
  id: number;
  isiCerita: string;
  judul: string;
  tanggal: string;
  updatedDate: string;
  userId: number;
};

type ceritaCintaPropsType = {
  ceritaCinta: Array<ceritaCintaTypes>;
};
const props = defineProps<ceritaCintaPropsType>();

const dateFilter = computed(() => {
  return (params: string) => {
    return new Date(params).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
    });
  };
});
</script>

<template>
  <div class="px-4 pb-4 pt-8 bg-white">
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
        <div
          v-for="(e, i) in props.ceritaCinta"
          class="flex md:contents"
          :key="i"
        >
          <div class="col-start-2 col-end-4 mr-6 md:mx-auto relative">
            <div
              class="w-4 flex items-center justify-center"
              :class="{ 'h-full': i !== props.ceritaCinta.length - 1 }"
            >
              <div class="h-full w-1 bg-brown-90 pointer-events-none"></div>
            </div>
            <div
              class="w-4 h-4 absolute top-1 -mt-3 rounded-full bg-brown-90 shadow text-center"
            >
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="col-start-4 col-end-12 rounded-xl mb-6 mr-auto w-full">
            <p class="headline-5 text-brown-90 mb-4">
              {{ dateFilter(e.tanggal) }}
            </p>
            <p class="caption-1 text-brown-90">
              {{ e.isiCerita }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
