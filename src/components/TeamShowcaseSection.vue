<script setup>
import { ArrowRight } from 'lucide-vue-next'

// 👉 Miembro destacado (ej: fundador o presidente)
const featuredMember = {
  image: null,
  name: 'Nombre del fundador',
  role: 'Fundador & Presidente',
  description: 'Lorem ipsum dolor sit amet consectetur. Molestie eu sed velit nisl amet pretium vulputate porttitor. Dis eu nulla pellentesque at sollicitudin volutpat massa felis sed. Faucibus eget montes augue venenatis massa odio faucibus.',
  link: '#'
}

// 👉 Otros miembros - cuando lleguen los datos reales solo edita esto
const otherMembers = [
  { id: 1, image: null, name: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet consectetur. Eget dictumst leo sed ac et in. A elementum vel in rhoncus neque.' },
  { id: 2, image: null, name: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet consectetur. Eget dictumst leo sed ac et in. A elementum vel in rhoncus neque.' },
  { id: 3, image: null, name: 'Lorem ipsum dolor sit', description: 'Lorem ipsum dolor sit amet consectetur. Eget dictumst leo sed ac et in. A elementum vel in rhoncus neque.' },
]
</script>

<template>
  <section class="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">

      <!-- Pill "Equipo" -->
      <div class="mb-10">
        <span class="inline-block px-5 py-1.5 bg-white border border-kintsugi-deep/10 text-kintsugi-ink text-sm font-medium rounded-full">
          Equipo
        </span>
      </div>

      <!-- BLOQUE DESTACADO: miembro principal -->
      <article class="bg-white rounded-3xl shadow-card overflow-hidden mb-10">
        <div class="grid md:grid-cols-2 gap-0">
          
          <!-- Foto izquierda -->
          <div class="aspect-[4/3] md:aspect-auto bg-kintsugi-deep/10 flex items-center justify-center">
            <img 
              v-if="featuredMember.image" 
              :src="featuredMember.image" 
              :alt="featuredMember.name"
              class="w-full h-full object-cover grayscale"
            />
            <span v-else class="text-kintsugi-ink/30 text-sm font-medium tracking-wider uppercase">
              foto
            </span>
          </div>

          <!-- Texto derecha -->
          <div class="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <p class="text-kintsugi-ink/70 text-sm sm:text-base leading-relaxed mb-6">
              {{ featuredMember.description }}
            </p>
            <a 
              :href="featuredMember.link"
              class="inline-flex items-center gap-2 self-start bg-kintsugi-deep text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-kintsugi-ink transition-colors hover:scale-[1.02]"
            >
              Leer más
              <ArrowRight :size="16" />
            </a>
          </div>
        </div>
      </article>

      <!-- GALERÍA: otros miembros -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <article 
          v-for="member in otherMembers" 
          :key="member.id"
          class="group"
        >
          <!-- Foto -->
          <div class="aspect-[4/3] bg-kintsugi-deep/10 rounded-3xl overflow-hidden mb-4 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
            <img 
              v-if="member.image" 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-full object-cover grayscale"
            />
            <span v-else class="text-kintsugi-ink/30 text-sm font-medium tracking-wider uppercase">
              foto
            </span>
          </div>
          
          <!-- Info -->
          <div class="px-2">
            <h4 class="font-display text-base text-kintsugi-ink mb-2">
              {{ member.name }}
            </h4>
            <p class="text-kintsugi-ink/60 text-xs sm:text-sm leading-relaxed">
              {{ member.description }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>