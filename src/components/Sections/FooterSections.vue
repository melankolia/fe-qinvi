<script setup lang="ts">
type pengantinTypes = {
  createdAt: string;
  gender: string;
  id: number;
  namaAyah: string;
  namaIbu: string;
  namaLengkap: string;
  namaPanggilan: string;
  updatedAt: string;
  urlPath: string;
  userId: string;
};

type footerType = {
  pengantin: Array<pengantinTypes>;
};

const props = defineProps<footerType>();

const handleWA = (): void => {
  window.open(
    "https://wa.me/62895358390756?text=Kak%20mau%20tanya-tanya%20dong%20undangan%20online%20nya"
  );
};

const handleIG = (): void => {
  window.open("https://www.instagram.com/qinvi.id");
};
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col items-center bg-blue-10 px-4 pb-12 pt-16 min-h-[140px]"
    >
      <p class="caption-local-1 text-white">Created with Love by,</p>
      <p class="qinvi-font mt-4">QINVI</p>
      <div class="flex flex-row my-5 space-x-1">
        <img
          src="@/assets/icons/icon-ig-qinvi.png"
          alt="Qinvi Wedding Instagram"
          width="32"
          @click="handleIG"
        />
        <img
          src="@/assets/icons/icon-wa-qinvi.png"
          alt="Qinvi Wedding Whatsapp"
          width="32"
          @click="handleWA"
        />
      </div>
      <div class="border border-white w-2/3 rounded-xl mb-4"></div>
      <p class="caption-local-2">
        © 2023
        <span v-for="(e, i) in props.pengantin" :key="i">
          <span v-if="i == props.pengantin.length - 1"> &</span>
          {{ e.namaPanggilan }} </span
        >. All Right Reserved
      </p>
      <p class="caption-local-2">Song by SIVIA - ARE YOU MY VALENTINE?</p>
    </div>
    <div class="flex flex-col bg-blue-05 min-h-[90px]"></div>
  </div>
</template>

<style scoped>
.caption-local-1 {
  color: #fff;
  text-align: center;
  font-family: "Pinyon Script";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
}

.caption-local-2 {
  color: #fff;
  text-align: center;
  font-family: "Jost";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
}

.qinvi-font {
  color: #fff;
  font-family: "TAN - PEARL";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
