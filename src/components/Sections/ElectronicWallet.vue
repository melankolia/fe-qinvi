<script setup lang="ts">
import { useSnackbar } from "vue3-snackbar";
import BNI_Logo from "@/assets/images/BNI_logo.svg";
import BCA_Logo from "@/assets/images/BCA_logo.png";
import Mandiri_Logo from "@/assets/images/Mandiri_logo.webp";
import BTN_Logo from "@/assets/images/BTN_logo.svg";
import BRI_Logo from "@/assets/images/BRI_logo.svg";

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
  else if (bank == "bri") return BRI_Logo;

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
  <div class="flex flex-col container-e-wallet relative px-5 py-4">
    <div class="flex flex-row w-full justify-between items-center px-4">
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        class="headline-1-local text-black"
      >
        Wedding
        <br />
        <span class="headline-2-local pl-14">Gift</span>
      </p>
      <div class="w-1/2 border-t border-black"></div>
    </div>
    <p class="body-1-local text-center my-5">
      Kehadiran Anda merupakan hadiah terindah. <br />
      Namun, apabila Anda hendak memberikna tanda <br />
      kasih kepada kami, dpat melalui fitur di bawah ini:
    </p>
    <div class="flex flex-col px-4 py-6">
      <div
        v-for="(e, i) in props.rekening"
        :key="i"
        class="flex flex-col bg-[#AB738C] items-center rounded-md p-4 mb-3 z-10"
      >
        <input
          type="hidden"
          :id="`#copy-rekening-${i}`"
          :value="e.noRekening"
        />
        <div class="flex flex-col items-center bg-white mb-3 p-2.5 rounded-xl">
          <img :src="handleIconBank(e.namaBank)" width="100" height="19" />
        </div>
        <p class="caption-1-local text-white mb-3">
          {{ e.noRekening }}
        </p>
        <div class="flex flex-col items-center mb-3">
          <button
            @click="() => handleCopy(i)"
            class="button-date border border-white bg-white py-0.5 px-2.5 rounded-2xl flex flex-row justify-center items-center space-x-2.5"
          >
            <img src="@/assets/icons/icon-copy.png" width="14" />
            <p class="body-2 text-[#AB738C]">Copy Text</p>
          </button>
        </div>
        <p class="caption-1 text-white">A/n {{ e.namaPemilik }}</p>
      </div>
    </div>
    <!-- <img src="@/assets/images/bg-wedding-gift.webp" class="absolute z-0" /> -->
  </div>
</template>

<style scoped>
.container-e-wallet {
  background-image: url("@/assets/images/bg-wedding-gift.webp");
  background-size: cover;
  background-position: center;
  /* background-color: #8c6c4f; */
}

.headline-1-local {
  color: #000;
  font-family: "Cormorant";
  font-size: 30px;
  font-style: italic;
  font-weight: 600;
  line-height: 30px; /* 100% */
}

.headline-2-local {
  color: #000;
  text-align: center;
  font-family: "Inter";
  font-size: 23.555px;
  font-style: italic;
  font-weight: 300;
  line-height: 30px; /* 127.363% */
}

.body-1-local {
  color: #000;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px; /* 140% */
}

.caption-1-local {
  color: #fff;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.5px; /* 150% */
  letter-spacing: 1.5px;
}
</style>
