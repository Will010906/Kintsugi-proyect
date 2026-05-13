<script setup>
import { Check } from 'lucide-vue-next'

const milestones = [
  { title: 'Comienzos humildes', description: 'Donde todo empezó con una idea simple: amar.' },
  { title: 'Hitos y logros', description: 'Cada vida transformada es un paso adelante.' },
  { title: 'Construyendo confianza', description: 'Trabajamos con transparencia y compromiso.' },
  { title: 'Mirando al futuro', description: 'Con raíces en el presente, vista en el mañana.' },
]
</script>

<template>
  <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">

      <div class="bg-white rounded-3xl shadow-card overflow-hidden">
        <div class="grid md:grid-cols-2 gap-0">
          
          <!-- Imagen izquierda (placeholder hasta tener la real) -->
          <div class="aspect-square md:aspect-auto bg-kintsugi-plum/20 flex items-center justify-center min-h-[300px]">
            <span class="text-kintsugi-ink/30 text-sm font-medium tracking-wider uppercase">
              imagen historia
            </span>
          </div>

          <!-- Contenido derecha -->
          <div class="p-8 sm:p-10 lg:p-12">
            <span class="inline-block px-4 py-1 bg-kintsugi-peach/40 text-kintsugi-ink text-xs uppercase tracking-widest rounded-full mb-4">
              Historia
            </span>
            <h2 class="font-display text-3xl sm:text-4xl text-kintsugi-ink leading-tight mb-3">
              Nuestra Historia
            </h2>
            <p class="text-kintsugi-ink/70 text-sm sm:text-base leading-relaxed mb-6">
              Fundada con un compromiso de calidad e innovación, Kinsugi nació de un pequeño sueño hace tiempo. Desde entonces, hemos crecido como un faro de confianza para quienes buscan transformar vidas.
            </p>

            <!-- Bullets de logros -->
            <ul class="space-y-3">
              <li v-for="(item, i) in milestones" :key="i" class="flex items-start gap-3">
                <div class="shrink-0 w-5 h-5 rounded-full bg-kintsugi-deep flex items-center justify-center mt-0.5">
                  <Check :size="12" class="text-white" />
                </div>
                <div>
                  <p class="font-medium text-kintsugi-ink text-sm">{{ item.title }}</p>
                  <p class="text-kintsugi-ink/60 text-xs mt-0.5">{{ item.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>