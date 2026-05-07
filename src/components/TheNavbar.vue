<script setup>
import logoKintsugi from '../assets/logo_kintsugi.png'

const links = [
  { label: 'Home',       to: '/' },
  { label: 'Nosotros',   to: '/nosotros' },
  { label: 'Donaciones', to: '/donaciones' },
]
</script>

<template>
  <nav class="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-5 bg-kintsugi-deep">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center group">
        <img 
          :src="logoKintsugi" 
          alt="Kintsugi Love House"
          class="h-16 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </RouterLink>

      <!-- Enlaces -->
      <div class="hidden md:flex items-center gap-8 lg:gap-10">
        <RouterLink 
          v-for="link in links" 
          :key="link.label"
          :to="link.to"
          class="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors"
          active-class="text-white font-semibold"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- CTA Contáctanos: scroll a la sección de contacto, NO una ruta -->
      <a 
        href="#contacto"
        class="bg-kintsugi-deep border border-white/15 text-white px-5 sm:px-7 py-2.5 rounded-full text-sm lg:text-base font-medium hover:bg-white hover:text-kintsugi-deep hover:scale-105 transition-all shadow-soft"
      >
        Contáctanos
      </a>

    </div>
  </nav>
</template>