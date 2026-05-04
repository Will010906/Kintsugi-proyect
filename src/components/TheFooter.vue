<script setup>
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-kintsugi-deep text-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        
        <!-- Logo -->
        <div>
          <h3 class="font-display text-2xl font-700">Kintsugi</h3>
          <p class="text-white/60 text-sm mt-1">Reparando vidas con amor</p>
        </div>

        <!-- Enlaces rápidos -->
        <nav class="flex gap-6 text-sm text-white/80">
          <a href="#" class="hover:text-white transition-colors">Home</a>
          <a href="#" class="hover:text-white transition-colors">Nosotros</a>
          <a href="#" class="hover:text-white transition-colors">Donaciones</a>
          <a href="#" class="hover:text-white transition-colors">Contacto</a>
        </nav>

        <!-- Mensaje pequeño -->
        <p class="text-white/60 text-sm flex items-center gap-2">
          Hecho con <Heart :size="14" class="text-kintsugi-peach fill-current" /> en México
        </p>
      </div>

      <!-- Línea inferior -->
      <div class="border-t border-white/10 mt-8 pt-6 text-center text-white/40 text-xs">
        © 2026 Kintsugi. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>