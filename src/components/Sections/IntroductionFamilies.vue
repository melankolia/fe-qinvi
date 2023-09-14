<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

type acaraTypes = {
  alamat: string;
  createdAt: string;
  id: number;
  lokasi: string;
  namaAcara: string;
  tanggal: string;
  updatedAt: string;
  urlMap: string;
  userId: number;
  waktuMulai: string;
  waktuSelesai: string;
};

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

type introductionFamiliesType = {
  pengantin: Array<pengantinTypes>;
  tamu: {
    createdAt: string;
    domainUndangan: string;
    id: number;
    namaTamu: string;
    noHandphone: string;
    secureId: string;
    statusUndangan: number;
    tglKirimUndangan: string;
    updatedAt: string;
    userId: number;
  };
  acara: Array<acaraTypes>;
};
const route = useRoute();
const props = defineProps<introductionFamiliesType>();

const invitedPerson: string | null = route.query?.to as string | null;

const tanggalResepsi: Ref<string> = ref("-");
const pengantinPria: Ref<pengantinTypes> = ref({
  createdAt: "-",
  gender: "-",
  id: 0,
  namaAyah: "-",
  namaIbu: "-",
  namaLengkap: "-",
  namaPanggilan: "-",
  updatedAt: "-",
  urlPath: "-",
  userId: "-",
});

const pengantinWanita: Ref<pengantinTypes> = ref({
  createdAt: "-",
  gender: "-",
  id: 0,
  namaAyah: "-",
  namaIbu: "-",
  namaLengkap: "-",
  namaPanggilan: "-",
  updatedAt: "-",
  urlPath: "-",
  userId: "-",
});

const bindingData = (): void => {
  props.pengantin.map((e: pengantinTypes) => {
    if (e.gender?.toUpperCase() == "M") {
      pengantinPria.value = { ...e };
    } else if (e.gender?.toUpperCase() == "F") {
      pengantinWanita.value = { ...e };
    }
  });

  props.acara.map((e: acaraTypes) => {
    if (e.namaAcara?.toLowerCase().includes("resepsi")) {
      tanggalResepsi.value = new Date(e.tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  });
};

onMounted(() => {
  bindingData();
});
</script>

<template>
  <div class="flex flex-col">
    <!-- <div class="flex flex-col items-center p-8 bg-green-30 relative">
      <img
        data-aos="fade-up"
        data-aos-duration="2500"
        width="85"
        height="78"
        src="@/assets/images/icon-sincan.webp"
        alt="Qinvi Wedding Icon"
        class="my-4"
      />

      <img
        width="100"
        class="h-[103px] absolute top-0 left-0"
        src="@/assets/images/bg-leaf-l.webp"
        alt="Qinvi Wedding Icon Leaf"
      />
      <img
        width="137"
        class="h-[147px] absolute bottom-0 right-0"
        src="@/assets/images/bg-leaf-r.webp"
        alt="Qinvi Wedding Icon Leaf"
      />
    </div> -->
    <div
      class="flex flex-col justify-center py-14 px-6 relative bg-events bg-white"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="2500"
        class="flex flex-col items-center relative mb-16"
      >
        <p
          data-aos="fade-up"
          data-aos-duration="2500"
          class="caption-1-local text-black text-center"
        >
          Kepada Bapak/Ibu/
          <br />
          Saudara/i,
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2500"
          class="caption-1-local text-black text-center mt-2 mb-5"
        >
          {{ invitedPerson }}
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="2500"
          class="caption-2-local text-black mb-4"
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami memohon kehadiran
          Bapak/Ibu/Saudara/i pada acara pernikahan kami:
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="5000"
          class="caption-6-local text-black"
        >
          {{ pengantinPria.namaLengkap }}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="5000"
          class="caption-dan-local text-black my-1"
        >
          dan
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="5000"
          class="caption-6-local text-black"
        >
          {{ pengantinWanita.namaLengkap }}
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="2500"
          class="caption-4-local text-black mt-5 mb-8"
        >
          {{ tanggalResepsi }}
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="2500"
          class="caption-5-local text-black"
        >
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="2500"
          class="caption-5-local text-black pt-4"
        >
          - QS. Ar-Rum 21 -
        </p>
        <img
          src="@/assets/images/p-spouse-1.png"
          width="128"
          class="mt-16"
          style="border-radius: 50%"
        />
        <p
          data-aos="fade-up"
          data-aos-duration="5000"
          class="caption-3-local text-black my-5"
        >
          {{ pengantinPria.namaLengkap }}
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="5500"
          class="caption-4-local text-black"
        >
          Putra dari Bapak {{ pengantinPria.namaAyah }} dan <br />
          Ibu {{ pengantinPria.namaIbu }}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2500"
          class="body-1-local text-black mt-4"
        >
          dan
        </p>
        <img
          src="@/assets/images/p-spouse-2.png"
          width="128"
          class="mt-7"
          style="border-radius: 50%"
        />
        <p
          data-aos="fade-down"
          data-aos-duration="5000"
          class="caption-3-local text-black my-5"
        >
          {{ pengantinWanita.namaLengkap }}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="5500"
          class="caption-4-local text-black"
        >
          Putri dari Bapak {{ pengantinWanita.namaAyah }} dan <br />
          Ibu {{ pengantinWanita.namaIbu }}
        </p>
      </div>
      <p class="caption-7-local mb-10">
        Love is more than a feeling. <br />
        It is full of action.
      </p>
    </div>
  </div>
</template>

<style scoped>
.bg-events {
  min-height: 681px;
}

.orientation {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.caption-1-local {
  text-align: center;
  font-family: EB Garamond;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 160% */
}

.caption-2-local {
  text-align: center;
  font-family: "EB Garamond";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  text-transform: uppercase;
}

.caption-3-local {
  font-family: "Bree Serif";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.63px;
}

.caption-4-local {
  text-align: center;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.385px;
}

.caption-5-local {
  font-family: "Jost";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */
  text-align: center;

  color: #000000;
}

.caption-dan-local {
  font-family: "Fleur De Leah";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}

.caption-6-local {
  font-family: "EB Garamond";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 30px;
  /* or 158% */
  text-align: center;
  text-transform: uppercase;
}

.caption-7-local {
  text-align: center;
  font-family: "Fleur De Leah";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.2px;
}

.body-1-local {
  text-align: center;
  font-family: "Fleur De Leah";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
}
</style>
