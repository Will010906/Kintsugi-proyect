<script setup>
import { Eye } from 'lucide-vue-next'
</script>

<template>
  <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">

      <div class="bg-kintsugi-cyan/40 rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden"
           style="border-radius: 2.5rem 0.5rem 2.5rem 0.5rem;">
        
        <!-- Decoración: ícono de ojo grande de fondo -->
        <Eye :size="180" class="absolute -top-8 -right-8 text-kintsugi-deep/5" stroke-width="1" />

        <div class="relative">
          <span class="inline-block px-4 py-1 bg-kintsugi-deep/10 text-kintsugi-deep text-xs uppercase tracking-widest rounded-full mb-4">
            Visión
          </span>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl text-kintsugi-ink leading-tight mb-4">
            Hacia dónde nos dirigimos
          </h2>
          <p class="text-kintsugi-ink/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            Ser una organización referente en México que transforme la vida de miles de niños y adolescentes, construyendo una sociedad más justa, amorosa y llena de oportunidades para todos.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>