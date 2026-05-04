<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import MissionSection from './components/MissionSection.vue'
import VolunteerSection from './components/VolunteerSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <main>
      <HeroSection />
      <MissionSection />
      <VolunteerSection />
    </main>
    <TheFooter />
  </div>
</template>