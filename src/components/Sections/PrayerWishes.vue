<template>
  <div class="flex flex-col bg-brown-80 px-4 py-6">
    <p class="headline-3 text-green-10 mb-5 text-center">DOA DAN UCAPAN</p>
    <div class="flex flex-col">
      <p class="caption-1 text-white mb-1.5">Nama Kamu</p>
      <input type="text" id="fname" name="fname" class="rounded-sm mb-5" />
      <p class="caption-1 text-white mb-1.5">Doa dan Ucapan</p>
      <textarea
        class="rounded-sm"
        id="prayer"
        name="prayer"
        rows="4"
        cols="50"
      />
    </div>
    <div class="flex flex-col items-center pt-5">
      <button
        class="button-date bg-brown-10 py-1.5 px-3 rounded-2xl flex flex-row items-center space-x-2.5"
      >
        <img src="@/assets/icons/icon-email.png" height="18" width="18" />
        <p class="body-2 text-brown-70">Kirim Ucapan</p>
      </button>
    </div>
  </div>
</template>
