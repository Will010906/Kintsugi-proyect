<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoKintsugi from '../../assets/logo_kintsugi.png'
import FrequencySelector from './FrequencySelector.vue'
import logoDark from '../../assets/logo-kinsugi-dark.png'

const router = useRouter()
const frequency = ref('una-vez')
const amount = ref(0)

const goToCardForm = () => {
  router.push({ 
    path: '/donaciones/tarjeta', 
    query: { freq: frequency.value, amount: amount.value }
  })
}

const goToDeposit = () => {
  router.push('/donaciones/deposito')
}
</script>

<template>
<div class="max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-kintsugi-deep/10 p-8 sm:p-10 border border-kintsugi-deep/5">
    
   <!-- Logo: ícono + texto en oscuro -->
<!-- Logo: imagen real -->
<div class="flex justify-center mb-6">
  <img 
    :src="logoDark" 
    alt="Kinsugi Love House"
    class="h-32 w-auto object-contain"
  />
</div>

    <!-- Monto -->
    <div class="text-center mb-6">
      <div class="flex items-center justify-center gap-1">
        <span class="font-display text-4xl text-kintsugi-ink">$</span>
        <input 
          v-model.number="amount"
          type="number"
          min="0"
          placeholder="0"
          class="font-display text-5xl text-kintsugi-ink bg-transparent text-center w-32 outline-none focus:border-b-2 focus:border-kintsugi-deep"
        />
      </div>
    </div>

    <!-- Selector de frecuencia -->
    <div class="flex justify-center mb-8">
      <FrequencySelector v-model="frequency" />
    </div>

    <!-- Botones -->
    <div class="space-y-3">
      <button 
        @click="goToCardForm"
        class="w-full bg-kintsugi-deep text-white py-3.5 rounded-full font-medium hover:bg-kintsugi-ink transition-all hover:scale-[1.02]"
      >
        Donar con tarjeta de débito o crédito
      </button>
      <button 
        @click="goToDeposit"
        class="w-full bg-white border-2 border-kintsugi-deep/20 text-kintsugi-ink py-3.5 rounded-full font-medium hover:border-kintsugi-deep transition-all hover:scale-[1.02]"
      >
        Información para depósito
      </button>
    </div>

  </div>
</template>