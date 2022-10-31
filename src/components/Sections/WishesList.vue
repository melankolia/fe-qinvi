<template>
  <div
    id="wishes-container"
    class="flex flex-col max-h-96 py-4 px-6 overflow-scroll"
  >
    <WishesComponents
      :username="e.username"
      :date="e.date"
      :wish="e.wish"
      v-for="(e, i) in wishes"
      :key="`wishes-${i}`"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import WishesComponents from "@/components/Sections/WishesComponents.vue";

interface WishesTypes {
  username: string;
  date: string;
  wish?: string;
}

const wishes: Ref<Array<WishesTypes>> = ref([
  {
    username: "Anggun",
    date: "2 hour ago",
    wish: `Happy wedding 💐 Semoga keluarga kecil kalian senantiasa diberahi kebahagiaan, kecukupan, dan kesehatan✨ Selamat beribadah bersama sampai jannah ya🙏🏻`,
  },
  {
    username: "Anggun",
    date: "2 hour ago",
    wish: `Happy wedding 💐 Semoga keluarga kecil kalian senantiasa diberahi kebahagiaan, kecukupan, dan kesehatan✨ Selamat beribadah bersama sampai jannah ya🙏🏻`,
  },
  {
    username: "Anggun",
    date: "2 hour ago",
    wish: `Happy wedding 💐 Semoga keluarga kecil kalian senantiasa diberahi kebahagiaan, kecukupan, dan kesehatan✨ Selamat beribadah bersama sampai jannah ya🙏🏻`,
  },
  {
    username: "Anggun",
    date: "2 hour ago",
    wish: `Happy wedding 💐 Semoga keluarga kecil kalian senantiasa diberahi kebahagiaan, kecukupan, dan kesehatan✨ Selamat beribadah bersama sampai jannah ya🙏🏻`,
  },
  {
    username: "Anggun",
    date: "2 hour ago",
    wish: `Happy wedding 💐 Semoga keluarga kecil kalian senantiasa diberahi kebahagiaan, kecukupan, dan kesehatan✨ Selamat beribadah bersama sampai jannah ya🙏🏻`,
  },
  {
    username: "Anggun",
    date: "2 hour ago",
    wish: `Happy wedding 💐 Semoga keluarga kecil kalian senantiasa diberahi kebahagiaan, kecukupan, dan kesehatan✨ Selamat beribadah bersama sampai jannah ya🙏🏻`,
  },
]);

const scroll = (wishesContainer: HTMLInputElement): void => {
  const height = (
    wishesContainer.scrollTop + wishesContainer.clientHeight
  ).toFixed(0);
  const offset = wishesContainer.scrollHeight;
  const bottomOfWindow = Number(height) === offset;
  if (bottomOfWindow) {
    wishes.value = [
      ...wishes.value,
      {
        username: "Anggun Baru",
        date: "2 hour ago",
        wish: `Happy wedding 💐 Semoga keluarga kecil kalian senantiasa diberahi kebahagiaan, kecukupan, dan kesehatan✨ Selamat beribadah bersama sampai jannah ya🙏🏻`,
      },
    ];
  }
};

onMounted(() => {
  const wishesContainer: HTMLInputElement = document.getElementById(
    "wishes-container"
  ) as HTMLInputElement;

  console.log(wishesContainer);
  wishesContainer.onscroll = () => scroll(wishesContainer as HTMLInputElement);
  wishesContainer.ontouchmove = () =>
    scroll(wishesContainer as HTMLInputElement);
});
</script>
