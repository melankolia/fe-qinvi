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
      class="flex flex-col justify-center py-14 relative bg-events bg-[#603F8B]"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="2500"
        class="flex flex-col items-center relative mb-16"
      >
        <div class="flex flex-col items-center px-6">
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            class="caption-1-local text-[#FFE5E5] text-center"
          >
            Kepada Bapak/Ibu/
            <br />
            Saudara/i,
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            class="caption-1-local text-[#FFE5E5] text-center mt-2 mb-5"
          >
            {{ invitedPerson }}
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2500"
            class="caption-2-local text-[#FFE5E5] mb-4"
          >
            Dengan memohon rahmat dan ridho Allah SWT, kami memohon kehadiran
            Bapak/Ibu/Saudara/i pada acara pernikahan kami:
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            class="caption-6-local text-[#FFE5E5]"
          >
            {{ pengantinPria.namaLengkap }}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            class="caption-dan-local text-[#FFE5E5] my-1"
          >
            dan
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            class="caption-6-local text-[#FFE5E5]"
          >
            {{ pengantinWanita.namaLengkap }}
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="2500"
            class="caption-4-local text-[#FFE5E5] mt-5 mb-8"
          >
            {{ tanggalResepsi }}
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2500"
            class="caption-5-local text-[#FFE5E5]"
          >
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2500"
            class="caption-5-local text-[#FFE5E5] pt-4"
          >
            - QS. Ar-Rum 21 -
          </p>
        </div>
        <div class="castle-container flex flex-col items-center relative w-full">
          <img
            src="@/assets/images/p-spouse-1.webp"
            width="512"
            class="mt-16 z-10"
            style="border-radius: 50%"
          />
          <!-- <img
            src="@/assets/images/bg-introductions.webp"
            class="absolute top-0 left-0 right-0"
            height="100"
          /> -->
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            class="caption-3-local text-white my-5"
          >
            {{ pengantinPria.namaLengkap }}
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="2500"
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
            &
          </p>
          <img
            src="@/assets/images/p-spouse-2.webp"
            width="512"
            class="mt-7 z-10"
            style="border-radius: 50%"
          />
          <p
            data-aos="fade-down"
            data-aos-duration="2500"
            class="caption-3-local text-white my-5"
          >
            {{ pengantinWanita.namaLengkap }}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="5500"
            class="caption-4-local text-white mb-10"
          >
            Putri dari Bapak {{ pengantinWanita.namaAyah }} dan <br />
            Ibu {{ pengantinWanita.namaIbu }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-events {
  min-height: 681px;
}

.castle-container {
  background-image: url('@/assets/images/bg-introductions.webp');
  background-size: cover;
  background-position: center center;
  min-height: 1000px;
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

.body-1-local {
  color: #fff;
  font-family: "Bonbon";
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.24px;
}
</style>
