<template>
  <div
    class="items-center justify-center w-full h-screen overflow-hidden relative"
  >
    <video
      id="videoSection"
      loop
      preload="auto"
      controls
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="@/assets/fairy.mp4" type="video/mp4" />
    </video>
    <!-- <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/4wAbrTzIZa4?si=9gVjWeiUpMcStOg1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style="z-index: 400"
    /> -->
  </div>
</template>
