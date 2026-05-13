<script setup>
import { Mail, Phone, MapPin, Heart, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-vue-next'
import logoKintsugi from '../assets/logo_kintsugi.png'

const contact = {
  phone: '+52 442 123 4567',
  email: 'contacto@kinsugi.org',
  location: 'Querétaro, México',
}

const socials = [
  { name: 'Instagram', url: '#' },
  { name: 'Facebook',  url: '#' },
  { name: 'LinkedIn',  url: '#' },
  { name: 'TikTok',    url: '#' },
]
</script>

<template>
  <footer id="contacto" class="bg-kintsugi-cream py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">

      <!-- BENTO FOOTER: mismo concepto que el Hero, diferentes colores -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">

        <!-- TARJETA HERO (ocupa 2/3 en desktop) -->
        <div class="md:col-span-2 bg-kintsugi-deep text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden"
             style="border-radius: 2.5rem 0.5rem 2.5rem 2.5rem;">
          
          <!-- Glow rosado -->
          <div class="absolute -bottom-20 -left-20 w-72 h-72 bg-kintsugi-plum/40 rounded-full blur-3xl pointer-events-none"></div>
          <!-- Glow azul claro -->
          <div class="absolute -top-20 -right-20 w-72 h-72 bg-kintsugi-deepGlow/60 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative">
            <p class="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
              ¿Hablamos?
            </p>
            <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              Conectemos y<br/>
              construyamos <span class="italic">juntos</span>
            </h2>
            <p class="text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
              Nos emociona escuchar tu visión y explorar cómo podemos dar vida a algo extraordinario en conjunto.
            </p>

            <!-- Mini decoración: corazón flotante -->
            <div class="absolute top-0 right-0 w-12 h-12 bg-kintsugi-rose/30 rounded-full flex items-center justify-center">
              <Heart :size="18" class="text-kintsugi-peach" />
            </div>
          </div>
        </div>

        <!-- TARJETA REDES (durazno) -->
        <div class="bg-kintsugi-peach p-6 sm:p-8 text-kintsugi-ink relative overflow-hidden"
             style="border-radius: 0.5rem 2.5rem 2.5rem 2.5rem;">
          
          <p class="text-kintsugi-ink/60 text-xs uppercase tracking-[0.25em] mb-4">
            Síguenos
          </p>
          
          <div class="flex flex-wrap gap-2">
            <a 
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 bg-white/60 hover:bg-kintsugi-deep hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
            >
              {{ social.name }}
              <ArrowUpRight :size="12" />
            </a>
          </div>

          <!-- Decoración corazón abajo -->
          <Heart :size="60" class="absolute -bottom-4 -right-4 text-kintsugi-rose/20 fill-current" />
        </div>

      </div>

      <!-- SEGUNDA FILA: Contacto + Logo+Legal -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">

        <!-- TARJETA CONTACTO (cyan) -->
        <div class="bg-kintsugi-cyan p-6 sm:p-8 text-kintsugi-deep"
             style="border-radius: 2.5rem 2.5rem 0.5rem 2.5rem;">
          
          <p class="text-kintsugi-deep/60 text-xs uppercase tracking-[0.25em] mb-4">
            Contacto
          </p>
          
          <div class="space-y-3">
            <a 
              :href="`tel:${contact.phone.replace(/\s/g, '')}`"
              class="flex items-center gap-3 text-kintsugi-deep hover:text-kintsugi-ink transition-colors group"
            >
              <Phone :size="16" class="shrink-0" />
              <span class="text-sm font-medium">{{ contact.phone }}</span>
            </a>

            <a 
              :href="`mailto:${contact.email}`"
              class="flex items-center gap-3 text-kintsugi-deep hover:text-kintsugi-ink transition-colors group"
            >
              <Mail :size="16" class="shrink-0" />
              <span class="text-sm font-medium break-all">{{ contact.email }}</span>
            </a>

            <div class="flex items-center gap-3 text-kintsugi-deep/80">
              <MapPin :size="16" class="shrink-0" />
              <span class="text-sm">{{ contact.location }}</span>
            </div>
          </div>
        </div>

        <!-- TARJETA LOGO + COPYRIGHT (lavanda, ocupa 2/3 en desktop) -->
        <div class="md:col-span-2 bg-kintsugi-indigo text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6"
             style="border-radius: 2.5rem 2.5rem 2.5rem 0.5rem;">
          
          <!-- Logo grande -->
          <img 
            :src="logoKintsugi" 
            alt="Kinsugi Love House"
            class="h-20 sm:h-24 w-auto object-contain opacity-95"
          />

          <!-- Links + copyright -->
          <div class="text-center sm:text-right">
            <div class="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 text-white/80 text-xs mb-2">
              <a href="#" class="hover:text-white transition-colors">Términos</a>
              <a href="#" class="hover:text-white transition-colors">Privacidad</a>
              <a href="#" class="hover:text-white transition-colors">Cookies</a>
            </div>
            <p class="text-white/60 text-xs">
              © 2026 Kinsugi Love House
            </p>
            <p class="text-white/40 text-[10px] mt-1">
              Hecho con cariño en México
            </p>
          </div>
        </div>

      </div>

    </div>
  </footer>
</template>