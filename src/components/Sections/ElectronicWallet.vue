<script setup lang="ts">
import { useSnackbar } from "vue3-snackbar";
import BNI_Logo from "@/assets/images/BNI_logo.svg";
import BCA_Logo from "@/assets/images/BCA_logo.png";
import Mandiri_Logo from "@/assets/images/Mandiri_logo.webp";
import BTN_Logo from "@/assets/images/BTN_logo.svg";

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

const handleIconBank = (e: string): string => {
  if (!e) return "";

  const bank: string = e.toLowerCase();
  if (bank == "bni") return BNI_Logo;
  else if (bank == "bca") return BCA_Logo;
  else if (bank == "mandiri") return Mandiri_Logo;
  else if (bank == "btn") return BTN_Logo;

  return "";
};

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
  <div class="flex flex-col container-e-wallet relative">
    <div class="flex flex-col px-4 py-6">
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="headline-19 text-blue-10 mb-8 font-extralight text-center"
      >
        Wedding Gift
      </p>
      <div
        v-for="(e, i) in props.rekening"
        :key="i"
        class="flex flex-col bg-[#F8F7F3] items-center rounded-xl p-4 mb-3 z-10"
      >
        <input
          type="hidden"
          :id="`#copy-rekening-${i}`"
          :value="e.noRekening"
        />
        <img
          :src="handleIconBank(e.namaBank)"
          width="100"
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
            class="button-date border border-white bg-blue-10 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5 drop-shadow-md"
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
    <!-- <img src="@/assets/images/bg-wedding-gift.webp" class="absolute z-0" /> -->
  </div>
</template>

<style scoped>
.container-e-wallet {
  background-image: url("@/assets/images/bg-gift.webp");
  background-size: cover;
  background-position: center;
}
</style>
