<script setup>
import HeroSection from '../components/HeroSection.vue'
import VolunteerSection from '../components/VolunteerSection.vue'
import CampaignsSection from '../components/CampaignsSection.vue'
import InfoSection from '../components/InfoSection.vue'              // ← NUEVO   // ← NUEVO
import TeamSection from '../components/TeamSection.vue' 
</script>

<template>
  <main>
    <HeroSection />
    <CampaignsSection />
    <VolunteerSection />
    <InfoSection />          <!-- NUEVO -->
    <TeamSection />          <!-- NUEVO -->
  </main>
</template>