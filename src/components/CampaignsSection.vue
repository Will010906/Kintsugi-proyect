<script setup>
import { ArrowRight } from 'lucide-vue-next'

// 👉 Datos de campañas - cuando llegue la info real, solo edita esto
// Las imágenes pueden ser strings (URL/path) o null para mostrar placeholder
const featuredCampaign = {
  image: null,           // ← imagen grande del bloque destacado
  title: 'Título de la campaña principal',
  description: 'Lorem ipsum dolor sit amet consectetur. Molestie eu sed velit nisl amet pretium vulputate porttitor. Dis eu nulla pellentesque at sollicitudin volutpat massa felis sed. Faucibus eget montes augue venenatis massa odio faucibus.',
  link: '#'
}

const otherCampaigns = [
  { id: 1, image: null, title: 'Campaña 1', description: 'Descripción breve', link: '#' },
  { id: 2, image: null, title: 'Campaña 2', description: 'Descripción breve', link: '#' },
  { id: 3, image: null, title: 'Campaña 3', description: 'Descripción breve', link: '#' },
]
</script>

<template>
  <section class="bg-kintsugi-cream py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">

      <!-- Pill "Campañas" -->
      <div class="mb-10">
        <span class="inline-block px-5 py-1.5 bg-white border border-kintsugi-deep/10 text-kintsugi-ink text-sm font-medium rounded-full">
          Campañas
        </span>
      </div>

      <!-- BLOQUE DESTACADO -->
      <article class="bg-white rounded-3xl shadow-card overflow-hidden mb-12 lg:mb-16">
        <div class="grid md:grid-cols-2 gap-0">
          
          <!-- Imagen izquierda -->
          <div class="aspect-[4/3] md:aspect-auto bg-kintsugi-deep/10 flex items-center justify-center">
            <img 
              v-if="featuredCampaign.image" 
              :src="featuredCampaign.image" 
              :alt="featuredCampaign.title"
              class="w-full h-full object-cover"
            />
            <span v-else class="text-kintsugi-ink/30 text-sm font-medium tracking-wider uppercase">
              imagen
            </span>
          </div>

          <!-- Texto derecha -->
          <div class="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h3 v-if="featuredCampaign.title" class="font-display text-2xl sm:text-3xl text-kintsugi-ink mb-3 leading-tight">
              {{ featuredCampaign.title }}
            </h3>
            <p class="text-kintsugi-ink/70 text-sm sm:text-base leading-relaxed mb-6">
              {{ featuredCampaign.description }}
            </p>
            <a 
              :href="featuredCampaign.link"
              class="inline-flex items-center gap-2 self-start bg-kintsugi-deep text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-kintsugi-ink transition-colors hover:scale-[1.02]"
            >
              Leer más
              <ArrowRight :size="16" />
            </a>
          </div>
        </div>
      </article>

      <!-- GALERÍA DE 3 CAMPAÑAS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <article 
          v-for="campaign in otherCampaigns" 
          :key="campaign.id"
          class="group cursor-pointer"
        >
          <!-- Imagen -->
          <div class="aspect-square bg-kintsugi-deep/10 rounded-3xl overflow-hidden mb-4 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
            <img 
              v-if="campaign.image" 
              :src="campaign.image" 
              :alt="campaign.title"
              class="w-full h-full object-cover"
            />
            <span v-else class="text-kintsugi-ink/30 text-sm font-medium tracking-wider uppercase">
              imagen
            </span>
          </div>
          <!-- Info debajo (opcional, se puede quitar si las tarjetas solo son imágenes) -->
          <div class="px-2">
            <h4 v-if="campaign.title" class="font-display text-lg text-kintsugi-ink mb-1">
              {{ campaign.title }}
            </h4>
            <p v-if="campaign.description" class="text-kintsugi-ink/60 text-sm">
              {{ campaign.description }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>