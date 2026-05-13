<script setup>
import MissionSection from '../components/MissionSection.vue'
import VisionSection from '../components/VisionSection.vue'
import HistorySection from '../components/HistorySection.vue'
import TeamShowcaseSection from '../components/TeamShowcaseSection.vue'
</script>

<template>
  <main class="bg-kintsugi-cream pt-32 pb-20">

    <!-- Encabezado de la página -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
      <span class="inline-block px-5 py-1.5 bg-white border border-kintsugi-deep/10 text-kintsugi-ink text-sm font-medium rounded-full mb-4">
        Nosotros
      </span>
      <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-kintsugi-ink leading-tight">
        Reparando vidas <span class="italic">con amor</span>
      </h1>
      <p class="text-kintsugi-ink/60 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
        Conoce quiénes somos, qué nos mueve y a quiénes hacemos posible esta misión.
      </p>
    </div>

    <MissionSection />
    <VisionSection />
    <HistorySection />
<TeamShowcaseSection />
  </main>
</template>