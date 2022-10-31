<template>
  <div class="flex flex-col bg-brown-80 px-4 py-6">
    <p class="headline-3 text-green-10 mb-5 text-center">Kehadiran</p>
    <div class="flex flex-col">
      <p class="caption-1 text-white mb-1.5">Nama</p>
      <input type="text" id="fname" name="fname" class="rounded-sm mb-5" />
      <p class="caption-1 text-white mb-1.5">No HP</p>
      <input type="text" id="phone" name="phone" class="rounded-sm mb-5" />
    </div>
    <div class="flex flex-col">
      <p class="caption-1 text-white mb-2">Apakah kamu akan hadir?</p>
      <div class="flex flex-row space-x-12">
        <div class="flex flex-row space-x-2">
          <input type="radio" id="ya" name="fav_language" value="Ya" />
          <label class="text-white caption-1" for="ya">Ya</label>
        </div>
        <div class="flex flex-row space-x-2">
          <input type="radio" id="tidak" name="fav_language" value="Tidak" />
          <label class="text-white caption-1" for="tidak">Tidak</label>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center pt-5">
      <button
        class="button-date bg-brown-10 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
      >
        <img src="@/assets/icons/icon-email.png" height="18" width="18" />
        <p class="body-2 text-brown-70">Kirim Konfirmasi</p>
      </button>
    </div>
  </div>
</template>
