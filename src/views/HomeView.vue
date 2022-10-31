<script setup lang="ts">
import CoverInvitation from "@/components/Sections/CoverInvitation.vue";
import IntroductionFamilies from "@/components/Sections/IntroductionFamilies.vue";
import WeddingEvents from "@/components/Sections/WeddingEvents.vue";
import HealthProtocols from "@/components/Sections/HealthProtocols.vue";
import PresenceForm from "@/components/Sections/PresenceForm.vue";
import ElectronicWallet from "@/components/Sections/ElectronicWallet.vue";
import GalleryPhotos from "@/components/Sections/GalleryPhotos.vue";
import PrayerWishes from "@/components/Sections/PrayerWishes.vue";
import FooterWeddings from "@/components/Sections/FooterWeddings.vue";
import FooterSections from "@/components/Sections/FooterSections.vue";
import MenusFloating from "@/components/MenusFloating.vue";
import WishesList from "@/components/Sections/WishesList.vue";
import StorySections from "@/components/Sections/StorySections.vue";
</script>

<template>
  <div class="flex flex-col">
    <CoverInvitation />
    <IntroductionFamilies />
    <WeddingEvents />
    <HealthProtocols />
    <PresenceForm />
    <ElectronicWallet />
    <GalleryPhotos />
    <img src="@/assets/images/Rings.png" />
    <StorySections />
    <PrayerWishes />
    <WishesList />
    <FooterWeddings />
    <FooterSections />
    <MenusFloating />
  </div>
</template>
