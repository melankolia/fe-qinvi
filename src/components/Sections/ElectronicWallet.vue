<script setup lang="ts">
import { useSnackbar } from "vue3-snackbar";
import BNI_Logo from "@/assets/images/BNI_logo.svg";
import BCA_Logo from "@/assets/images/BCA_logo.png";
import Mandiri_Logo from "@/assets/images/Mandiri_logo.webp";

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
  <div class="flex flex-col bg-white relative">
    <div class="flex flex-col px-5 py-6">
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-6-local text-black mt-6 mb-9 text-center"
      >
        Kirim Hadiah
      </p>
      <p class="caption-1-local text-black mb-7">
        Berikan ucapan dan cinta kepada Arif & Yuliana melalui hadiah istimewa.
        Kami mengundang Anda untuk berbagi kebahagiaan dalam momen spesial
        mereka. Silakan pilih hadiah dan kirimkan dengan cinta melalui transfer
        bank.
      </p>
      <div
        @click="() => handleCopy(i)"
        v-for="(e, i) in props.rekening"
        :key="i"
        class="flex flex-col bg-white items-center rounded-xl p-4 mb-3 z-10"
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
        <p class="caption-2-local text-black mb-3">
          No. Rekening : {{ e.noRekening }}
        </p>
        <p class="caption-2-local text-black mb-3">A/n {{ e.namaPemilik }}</p>
        <!-- <div class="flex flex-col items-center">
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
        </div> -->
      </div>
      <p class="caption-1-local text-black mb-5">
        Terima kasih atas perhatian dan <br />
        doa terbaik Anda ❤
      </p>
    </div>
  </div>
</template>

<style scoped>
.headline-6-local {
  font-family: "Bonheur Royale";
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.365px;
}

.caption-1-local {
  text-align: center;
  font-family: "Poppins";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.35px;
}

.caption-2-local {
  text-align: center;
  font-family: "EB Garamond";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
