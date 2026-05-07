<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import logoKintsugi from '../assets/logo_kintsugi.png'

const links = [
  { label: 'Home',       to: '/' },
  { label: 'Nosotros',   to: '/nosotros' },
  { label: 'Donaciones', to: '/donaciones' },
]

// Estado del menú móvil
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-5 bg-kintsugi-deep">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center group" @click="closeMenu">
        <img 
          :src="logoKintsugi" 
          alt="Kintsugi Love House"
          class="h-12 sm:h-16 lg:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </RouterLink>

      <!-- Enlaces DESKTOP (centro) -->
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

      <!-- CTA Contáctanos DESKTOP (oculto en móvil) -->
      <a 
        href="#contacto"
        class="hidden md:inline-flex bg-kintsugi-deep border border-white/15 text-white px-5 sm:px-7 py-2.5 rounded-full text-sm lg:text-base font-medium hover:bg-white hover:text-kintsugi-deep hover:scale-105 transition-all"
      >
        Contáctanos
      </a>

      <!-- BOTÓN HAMBURGUESA (solo móvil) -->
      <button 
        @click="toggleMenu"
        class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
      >
        <X v-if="isMenuOpen" :size="28" />
        <Menu v-else :size="28" />
      </button>

    </div>

    <!-- MENÚ MÓVIL DESPLEGABLE -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-kintsugi-deep border-t border-white/10 shadow-2xl"
      >
        <div class="px-6 py-6 space-y-1">
          <RouterLink 
            v-for="link in links" 
            :key="link.label"
            :to="link.to"
            @click="closeMenu"
            class="block py-3 px-4 rounded-xl text-white/90 hover:bg-white/10 hover:text-white text-base font-medium transition-colors"
            active-class="bg-white/10 text-white font-semibold"
          >
            {{ link.label }}
          </RouterLink>
          
          <!-- Separador sutil -->
          <div class="h-px bg-white/10 my-3"></div>
          
          <!-- CTA en menú móvil -->
          <a 
            href="#contacto"
            @click="closeMenu"
            class="block py-3 px-4 rounded-xl bg-white text-kintsugi-deep text-center font-semibold hover:bg-kintsugi-cream transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </Transition>

  </nav>
</template>