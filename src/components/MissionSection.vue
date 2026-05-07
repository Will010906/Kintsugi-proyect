<script setup>
// Asegúrate de tener estas imágenes en tu carpeta src/assets/
import imgNinoMision from '../assets/mision-nino.png';
import imgCorazonMision from '../assets/mision-corazon.png';
import imgManosMision from '../assets/mision-manos.png';
</script>

<template>
  <section class="bg-[#F2F2F2] py-24 px-6">
    <div class="max-w-6xl mx-auto bg-white rounded-[2rem] p-12 md:p-24 shadow-sm relative overflow-hidden">
      
      <span class="absolute top-8 left-10 text-gray-400 font-sans text-sm tracking-wide">Misión</span>

      <div class="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-blue-50/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div class="relative z-10 text-center">
        <p class="text-xl md:text-3xl lg:text-4xl font-medium text-[#1A2B48] leading-[1.8] max-w-5xl mx-auto">
          Lograr el desarrollo integral de niños 
          
          <span class="inline-block relative align-middle mx-1 md:mx-2">
            <img :src="imgNinoMision" class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-sm" />
            <span class="absolute -top-3 -right-2 text-xl md:text-2xl drop-shadow-sm">👑</span>
          </span>

          y adolescentes en México, mediante un hogar 
          
          <span class="inline-block align-middle mx-1 md:mx-2">
            <img :src="imgCorazonMision" class="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-sm" />
          </span>

          que les brinde amor, educación, liderazgo, valores familiares, apoyo psicológico y médico, alimentación y herramientas 
          
          <span class="inline-block relative align-middle mx-1 md:mx-2">
            <img :src="imgManosMision" class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-sm" />
            <span class="absolute -top-1 -right-2 text-xl md:text-2xl drop-shadow-sm">🌸</span>
          </span>

          que les permita desarrollarse en la sociedad
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fuente similar a la de tu mockup (Inter o Montserrat) */
p {
  font-family: 'Inter', sans-serif;
  /* Ajuste para que el texto no se vea muy pegado */
  word-spacing: 0.05em;
}

/* Animación sutil de respiración en las burbujas */
img {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

span:hover img {
  transform: scale(1.1) rotate(3deg);
}
</style>