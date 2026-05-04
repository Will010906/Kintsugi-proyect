<script setup>
import logoKintsugi from '../assets/logo_kintsugi.png'

const links = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Nosotros', href: '#nosotros', active: false },
  { label: 'Donaciones', href: '#donaciones', active: false },
]
</script>

<template>
  <nav class="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-5 bg-kintsugi-deep">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      
      <!-- Logo: imagen + texto + tagline -->
     <a href="#" class="flex items-center group">
  <img 
    :src="logoKintsugi" 
    alt="Kintsugi Love House"
    class="h-15 sm:h-15 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
  />
</a>

      <!-- Enlaces (centro) -->
      <div class="hidden md:flex items-center gap-8 lg:gap-10">
        <a 
          v-for="link in links" 
          :key="link.label"
          :href="link.href"
          class="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors relative"
          :class="{ 'text-white': link.active }"
        >
          {{ link.label }}
          <span 
            v-if="link.active"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
          ></span>
        </a>
      </div>

      <!-- CTA Contáctanos -->
      <a 
        href="#contacto"
        class="bg-kintsugi-deep border border-white/15 text-white px-5 sm:px-7 py-2.5 rounded-full text-sm lg:text-base font-medium hover:bg-white hover:text-kintsugi-deep hover:scale-105 transition-all shadow-soft"
      >
        Contáctanos
      </a>

    </div>
  </nav>
</template>