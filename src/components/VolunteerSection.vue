<script setup>
import { Play, ArrowUpRight } from 'lucide-vue-next'

// Pills con sus colores y posiciones aproximadas
const values = [
  { label: 'entrega',  bg: 'bg-kintsugi-cyan',     text: 'text-kintsugi-deep' },
  { label: 'corazón',  bg: 'bg-kintsugi-peach',    text: 'text-kintsugi-ink' },
  { label: 'nobleza',  bg: 'bg-kintsugi-rose',     text: 'text-white' },
  { label: 'amor',     bg: 'bg-kintsugi-peach',    text: 'text-kintsugi-ink' },
  { label: 'tiempo',   bg: 'bg-kintsugi-deep',     text: 'text-white' },
  { label: 'pasión',   bg: 'bg-kintsugi-lavender', text: 'text-white' },
  { label: 'caridad',  bg: 'bg-kintsugi-plum',     text: 'text-white' },
  { label: 'servicio', bg: 'bg-kintsugi-ink',      text: 'text-white' },
  { label: 'fuerza',   bg: 'bg-kintsugi-cyan',     text: 'text-kintsugi-deep' },
]

// Texto del marquee repetido
const marqueeText = 'Ayudemos a nuestros niños'
const marqueeItems = Array(8).fill(marqueeText)
</script>

<template>
  <section class="bg-kintsugi-cream py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    
    <!-- MARQUEES DIAGONALES CRUZADOS -->
    <div class="relative h-32 sm:h-36 mb-8 sm:mb-12">
      
      <!-- Marquee 1: morado, inclinado hacia arriba-derecha -->
      <div class="absolute inset-x-0 top-2 -rotate-3 bg-kintsugi-plum py-3 sm:py-4 overflow-hidden whitespace-nowrap">
        <div class="flex animate-marquee-left">
          <span 
            v-for="(item, i) in marqueeItems" 
            :key="`m1-${i}`"
            class="font-display italic text-2xl sm:text-3xl lg:text-4xl text-white px-6"
          >
            {{ item }} <span class="text-white/60">*</span>
          </span>
          <!-- Duplicado para loop continuo -->
          <span 
            v-for="(item, i) in marqueeItems" 
            :key="`m1b-${i}`"
            class="font-display italic text-2xl sm:text-3xl lg:text-4xl text-white px-6"
          >
            {{ item }} <span class="text-white/60">*</span>
          </span>
        </div>
      </div>

      <!-- Marquee 2: cyan, inclinado hacia abajo-derecha -->
      <div class="absolute inset-x-0 top-12 sm:top-16 rotate-2 bg-kintsugi-cyan py-3 sm:py-4 overflow-hidden whitespace-nowrap">
        <div class="flex animate-marquee-right">
          <span 
            v-for="(item, i) in marqueeItems" 
            :key="`m2-${i}`"
            class="font-display italic text-2xl sm:text-3xl lg:text-4xl text-kintsugi-deep px-6"
          >
            {{ item }} <span class="text-kintsugi-deep/60">*</span>
          </span>
          <span 
            v-for="(item, i) in marqueeItems" 
            :key="`m2b-${i}`"
            class="font-display italic text-2xl sm:text-3xl lg:text-4xl text-kintsugi-deep px-6"
          >
            {{ item }} <span class="text-kintsugi-deep/60">*</span>
          </span>
        </div>
      </div>
    </div>

    <!-- TARJETA PRINCIPAL "Únete a Nosotros" -->
    <div class="max-w-5xl mx-auto">
      <div class="bg-kintsugi-peach/70 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card">
        
        <!-- Header: título + descripción + botón -->
        <div class="grid md:grid-cols-2 gap-6 lg:gap-10 mb-8">
          <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl text-kintsugi-ink leading-[1.05]">
            Unete a<br/>
            Nosotros
          </h2>
          
          <div class="flex flex-col gap-5 justify-center">
            <p class="text-kintsugi-ink/80 text-sm sm:text-base leading-relaxed">
              El tiempo es el regalo más valioso que puedes ofrecer. Una casa, manos y corazones dispuestos a ayudar. No se necesita ser un experto, tener la voluntad de compartir. Únete a nosotros, tu energía y entusiasmo son la chispa que necesitan. Hazte voluntario hoy, y sé la diferencia que anhelas ver en el mundo.
            </p>
            <button class="self-start bg-kintsugi-deep text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-kintsugi-ink hover:scale-105 transition-all">
              Regístrate aquí
            </button>
          </div>
        </div>

        <!-- Imagen + botones de video -->
        <div class="relative rounded-2xl overflow-hidden">
          <img 
            src="../assets/ninos-jugando.jpg"
            alt="Voluntarios jugando con niños"
            class="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />


          <!-- Botón Ver video con flecha (esquina superior derecha) -->
          <button class="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-md hover:scale-110 transition-transform">
            <span class="text-[9px] text-kintsugi-deep font-medium">Ver video</span>
            <ArrowUpRight :size="16" class="text-kintsugi-deep" />
          </button>
        </div>

        <!-- PILLS de valores: distribuidas orgánicamente -->
        <div class="relative mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          <span 
            v-for="(value, i) in values" 
            :key="value.label"
            :class="[value.bg, value.text]"
            class="px-5 py-2 rounded-full text-sm font-medium shadow-card hover:-translate-y-1 transition-transform cursor-default"
            :style="{ 
              transform: `translateY(${(i % 3) * 4}px) rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` 
            }"
          >
            {{ value.label }}
          </span>
        </div>

      </div>
    </div>
  </section>
</template>