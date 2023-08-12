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
    <div class="flex flex-col items-center p-8 bg-green-30 relative">
      <img
        data-aos="fade-up"
        data-aos-duration="2500"
        width="85"
        height="78"
        src="@/assets/images/icon-sincan.webp"
        alt="Qinvi Wedding Icon"
        class="my-4"
      />
      <p
        data-aos="fade-down"
        data-aos-duration="2500"
        class="caption-8 text-white"
      >
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <p
        data-aos="fade-down"
        data-aos-duration="2500"
        class="caption-8 text-white pt-4"
      >
        - QS. Ar-Rum 21 -
      </p>
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
    </div>
    <div class="flex flex-col justify-center px-6 relative bg-events">
      <div
        data-aos="fade-right"
        data-aos-duration="2500"
        class="flex flex-col relative mb-28"
      >
        <p
          data-aos="fade-up"
          data-aos-duration="2500"
          class="caption-1-local text-white text-center"
        >
          Kepada Bapak/Ibu/Saudara/i,
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2500"
          class="caption-1-local text-white text-center mt-2 mb-10"
        >
          {{ invitedPerson }}
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="2500"
          class="caption-2-local text-white"
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami memohon kehadiran
          Bapak/Ibu/Saudara/i pada acara pernikahan kami:
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="5000"
          class="caption-3-local text-white my-5"
        >
          {{ pengantinPria.namaLengkap }}
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="5500"
          class="caption-4-local text-white"
        >
          Putra dari Bapak {{ pengantinPria.namaAyah }} dan <br />
          Ibu {{ pengantinPria.namaIbu }}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2500"
          class="body-1-local text-white mt-4"
        >
          dan
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="5000"
          class="caption-3-local text-white my-5"
        >
          {{ pengantinWanita.namaLengkap }}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="5500"
          class="caption-4-local text-white"
        >
          Putri dari Bapak {{ pengantinWanita.namaAyah }} dan <br />
          Ibu {{ pengantinWanita.namaIbu }}
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="2500"
          class="caption-4-local text-white mt-10"
        >
          {{ tanggalResepsi }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-events {
  background-image: url("@/assets/images/bg-events.webp");
  background-size: cover;
  background-position: center;
  min-height: 681px;
}

.orientation {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.caption-1-local {
  color: #fff;
  text-align: center;
  font-family: EB Garamond;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 160% */
}

.caption-2-local {
  color: #fff;
  text-align: center;
  font-family: "EB Garamond";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  text-transform: uppercase;
}

.caption-3-local {
  color: #fff;
  font-family: "EB Garamond";
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  text-transform: uppercase;
}

.caption-4-local {
  color: #fff;
  text-align: center;
  font-family: "Monesta";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.body-1-local {
  color: #fff;
  text-align: center;
  font-family: "Fleur De Leah";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
}
</style>
