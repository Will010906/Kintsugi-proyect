<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import imgStats   from '../assets/card-stats.png'
import imgSonrisa from '../assets/sonrisa.png'
import imgNinos   from '../assets/ninos.png'
import imgMono    from '../assets/mono.png'
import imgManos   from '../assets/manos.png'
</script>

<template>
  <section class="relative bg-kintsugi-deep text-white px-4 sm:px-6 lg:px-8 pt-28 pb-12 overflow-hidden">
    
    <!-- Glow azul sutil de fondo -->
    <div class="absolute inset-0 bg-gradient-to-b from-kintsugi-deepGlow/20 via-kintsugi-deep to-kintsugi-deep pointer-events-none"></div>
    
    <!-- Glow rosado en esquina inferior izquierda -->
    <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-kintsugi-plum/30 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto">
      
      <!-- Título -->
      <div class="text-center pb-12">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-600 leading-[1.1]">
          Se parte de nuestros
          <br/>
          Sueños
        </h1>
        <p class="mt-5 text-white/70 max-w-md mx-auto text-sm sm:text-base">
          Hagamos un mundo mejor, apoyando a nuestros pequeños
          <br/>
          ¡Seamos parte del cambio!
        </p>
        <button class="mt-7 inline-flex items-center gap-2 bg-kintsugi-deep border border-white/20 text-white px-7 py-2.5 rounded-full font-medium hover:bg-white hover:text-kintsugi-deep transition-all">
          Dona Ahora
        </button>
      </div>

     <!-- 6 columnas alineadas a la base con alturas controladas -->
<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-end">
  
  <!-- COL 1: Stats arriba + Sonrisa abajo (apiladas) -->
  <div class="flex flex-col gap-3">
    <article class="hover:-translate-y-1 transition-transform">
      <img :src="imgStats" alt="1,304,279 niños" class="w-full h-72 object-cover" />
    </article>
    <article class="hover:-translate-y-1 transition-transform">
      <img :src="imgSonrisa" alt="Regala una sonrisa" class="w-full h-24 object-cover" />
    </article>
  </div>

  <!-- COL 2: Foto niños (media-alta) -->
  <article class="hover:-translate-y-1 transition-transform">
    <img :src="imgNinos" alt="Niños abrazándose" class="w-full h-80 object-cover" />
  </article>

  <!-- COL 3: 30% (corta, abajo) -->
  <article class="bg-kintsugi-peach text-kintsugi-ink p-5 h-44 flex flex-col justify-center text-center hover:-translate-y-1 transition-transform"
           style="border-radius: 2rem 0.5rem 2rem 2rem;">
    <p class="font-display text-base leading-tight">
      Ayuda al
      <span class="text-3xl font-700 inline-block underline decoration-kintsugi-plum decoration-2 underline-offset-2">30%</span>
      <br/>
      de los niños de
      <br/>
      nuestro estado
    </p>
  </article>

  <!-- COL 4: Mono (alta) -->
  <article class="hover:-translate-y-1 transition-transform">
    <img :src="imgMono" alt="Ilustración Kintsugi" class="w-full h-80 object-cover" />
  </article>

  <article class="h-72 hover:-translate-y-1 transition-transform overflow-hidden">
  <img 
    :src="imgManos" 
    alt="Manos juntas" 
    class="w-full h-full object-contain object-bottom"
  />
</article>

  <!-- COL 6: Familia (media) -->
  <article class="bg-kintsugi-indigo p-5 h-56 flex items-end hover:-translate-y-1 transition-transform"
           style="border-radius: 0.5rem 2rem 2rem 2rem;">
    <span class="font-display text-xl text-white leading-tight">
      Se parte<br/>
      de nuestra<br/>
      Familia
    </span>
  </article>

</div>
    </div>
  </section>
</template>