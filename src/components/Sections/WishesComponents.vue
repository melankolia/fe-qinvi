<script setup lang="ts">
import { defineProps } from "vue";

interface WishProps {
  username: string;
  date: string;
  wish?: string;
}

const props = defineProps<WishProps>();
</script>

<template>
  <div class="flex flex-col">
    <p class="caption-2 text-brown-70">{{ props.username }}</p>
    <p class="caption-3 text-grey-10 my-1">{{ props.date }}</p>
    <p class="caption-4 text-brown-70">
      {{ props.wish }}
    </p>
    <hr class="my-2" />
  </div>
</template>
