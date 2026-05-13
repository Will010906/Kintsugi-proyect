<script setup>
// 👉 Datos del equipo - cuando lleguen las fotos reales solo edita esto
const introText = "Conoce al equipo detrás de Kinsugi Love House, comprometido con transformar vidas a través del amor y la educación."

const teamMembers = [
  { id: 1, name: 'Antonio Roberto', role: 'Founder Practice',  photo: null },
  { id: 2, name: 'Patricia Angely', role: 'Product Manager',   photo: null },
  { id: 3, name: 'Sonia Ambarsina', role: 'Lead Marketing',    photo: null },
  { id: 4, name: 'Yasmine Tano',    role: 'Creative Designer', photo: null },
]
</script>

<template>
  <section class="bg-kintsugi-cream py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">

      <!-- Texto introductorio -->
      <div class="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
        <p class="text-kintsugi-ink/70 text-sm sm:text-base leading-relaxed">
          {{ introText }}
        </p>
      </div>

      <!-- Grid de miembros -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        <article 
          v-for="member in teamMembers" 
          :key="member.id"
          class="group"
        >
          <!-- Foto -->
          <div class="aspect-[3/4] bg-kintsugi-deep/10 rounded-2xl overflow-hidden mb-4 group-hover:-translate-y-1 transition-transform">
            <img 
              v-if="member.photo" 
              :src="member.photo" 
              :alt="member.name"
              class="w-full h-full object-cover grayscale"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-kintsugi-ink/30 text-xs uppercase tracking-wider">
              foto
            </div>
          </div>
          
          <!-- Info -->
          <div class="text-center sm:text-left px-1">
            <h4 class="font-display text-base sm:text-lg text-kintsugi-ink mb-0.5">
              {{ member.name }}
            </h4>
            <p class="text-xs sm:text-sm text-kintsugi-ink/60">
              {{ member.role }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>