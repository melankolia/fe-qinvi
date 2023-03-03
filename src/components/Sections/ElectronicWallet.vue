<script setup lang="ts">
import { useSnackbar } from "vue3-snackbar";

const snackbar = useSnackbar();

type RekeningTypes = {
  createdAt: string;
  id: number;
  namaBank: string;
  namaPemilik: string;
  noRekening: string;
  updatedAt: string;
  userId: number;
};

type RekeningPropsTypes = {
  rekening: Array<RekeningTypes>;
};

const props = defineProps<RekeningPropsTypes>();

const handleCopy = (i: number): void => {
  let codeToCopy = document.getElementById(
    `#copy-rekening-${i}`
  ) as HTMLInputElement;
  codeToCopy?.setAttribute("type", "text");
  codeToCopy?.select();
  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    snackbar.add({
      type: "success",
      title: "Success",
      text: `Copy to clipboard ${msg}`,
      group: "5862a88b",
      count: 1,
    });
  } catch (err) {
    snackbar.add({
      type: "error",
      title: "Error",
      text: `Oops, unable to copy!`,
      group: "5862a88b",
      count: 1,
    });
  }
  codeToCopy?.setAttribute("type", "hidden");
  window?.getSelection()?.removeAllRanges();
};
</script>

<template>
  <div class="flex flex-col bg-[#67ABC1] px-4 py-6">
    <p class="headline-6 text-blue-10 mb-9 text-center">Dompet Digital</p>
    <div
      v-for="(e, i) in props.rekening"
      :key="i"
      class="flex flex-col bg-[#EEF1F3] items-center rounded-xl p-4 mb-3"
    >
      <input type="hidden" :id="`#copy-rekening-${i}`" :value="e.noRekening" />
      <img
        src="@/assets/images/BCA_logo.png"
        width="60"
        height="19"
        class="mb-3"
      />
      <p class="caption-1 text-blue-10 mb-3">
        No. Rekening : {{ e.noRekening }}
      </p>
      <p class="caption-1 text-blue-10 mb-3">A/n {{ e.namaPemilik }}</p>
      <div class="flex flex-col items-center">
        <button
          @click="() => handleCopy(i)"
          class="button-date border border-white bg-blue-10 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
        >
          <img
            src="@/assets/icons/icon-copy.png"
            class="brightness-0 invert"
            height="18"
            width="18"
          />
          <p class="body-2 text-white">Copy Text</p>
        </button>
      </div>
    </div>
  </div>
</template>
