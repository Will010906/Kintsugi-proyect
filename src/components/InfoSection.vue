<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="bg-kintsugi-cream py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">

      <div class="relative bg-white rounded-3xl shadow-card p-8 sm:p-12 lg:p-16 overflow-hidden">
        
        <!-- Cajas decorativas izquierdas -->
        <div class="hidden md:block absolute top-8 left-8 w-16 h-16 lg:w-20 lg:h-20 bg-kintsugi-cream rounded-2xl"></div>
        <div class="hidden md:block absolute bottom-12 left-16 w-12 h-12 lg:w-16 lg:h-16 bg-kintsugi-peach/40 rounded-2xl"></div>
        
        <!-- Cajas decorativas derechas -->
        <div class="hidden md:block absolute top-12 right-12 w-14 h-14 lg:w-20 lg:h-20 bg-kintsugi-cream rounded-2xl"></div>
        <div class="hidden md:block absolute bottom-16 right-8 w-12 h-12 lg:w-16 lg:h-16 bg-kintsugi-lavLight/60 rounded-2xl"></div>

        <!-- Contenido central -->
        <div class="relative z-10 max-w-2xl mx-auto text-center">
          
          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl text-kintsugi-ink mb-5 leading-tight">
            Construyendo un futuro mejor juntos
          </h2>

          <p class="text-kintsugi-ink/70 text-sm sm:text-base mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Vitae ut pellentesque ullamcorper dui eget. Morbi orci nunc ut lacus.
          </p>

          <button class="inline-flex items-center gap-2 bg-kintsugi-deep text-white px-7 py-3 rounded-full font-medium hover:bg-kintsugi-ink hover:scale-[1.02] transition-all">
            Forma parte de la comunidad
            <ArrowRight :size="16" />
          </button>

        </div>

      </div>

    </div>
  </section>
</template>