<script setup>
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'
import logoDark from '../../assets/logo-kinsugi-dark.png'

// 👉 Datos que tu jefe debe darte (por ahora son de ejemplo)
const bankInfo = {
  bank: 'BBVA México',
  beneficiary: 'Kinsugi Love House A.C.',
  account: '0123 4567 8901 2345',
  clabe: '012 345 678 901 234 567',
  reference: 'Donación',
}

const copied = ref('')

const copyToClipboard = async (text, fieldName) => {
  try {
    await navigator.clipboard.writeText(text.replace(/\s/g, ''))
    copied.value = fieldName
    setTimeout(() => copied.value = '', 2000)
  } catch (err) {
    console.error('No se pudo copiar:', err)
  }
}
</script>

<template>
  <div class="max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-kintsugi-deep/10 p-8 sm:p-10 border border-kintsugi-deep/5">
    
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <img :src="logoDark" alt="Kinsugi Love House" class="h-24 w-auto object-contain" />
    </div>

    <!-- Título -->
    <div class="text-center mb-6">
      <h2 class="font-display text-2xl text-kintsugi-ink mb-2">
        Información para depósito
      </h2>
      <p class="text-sm text-kintsugi-ink/60">
        Realiza tu donación por transferencia bancaria
      </p>
    </div>

    <!-- Datos bancarios -->
    <div class="space-y-3 mb-6">

      <div class="bg-kintsugi-cream/40 rounded-xl p-4">
        <p class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-1">Banco</p>
        <p class="font-medium text-kintsugi-ink">{{ bankInfo.bank }}</p>
      </div>

      <div class="bg-kintsugi-cream/40 rounded-xl p-4">
        <p class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-1">Beneficiario</p>
        <p class="font-medium text-kintsugi-ink">{{ bankInfo.beneficiary }}</p>
      </div>

      <!-- CLABE con botón copiar -->
      <div class="bg-kintsugi-cream/40 rounded-xl p-4 flex items-center justify-between gap-3">
        <div class="flex-1 min-w-0">
          <p class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-1">CLABE Interbancaria</p>
          <p class="font-mono text-sm text-kintsugi-ink truncate">{{ bankInfo.clabe }}</p>
        </div>
        <button 
          @click="copyToClipboard(bankInfo.clabe, 'clabe')"
          class="shrink-0 bg-kintsugi-deep text-white p-2 rounded-lg hover:bg-kintsugi-ink transition-colors"
          :title="copied === 'clabe' ? '¡Copiado!' : 'Copiar CLABE'"
        >
          <Check v-if="copied === 'clabe'" :size="16" />
          <Copy v-else :size="16" />
        </button>
      </div>

      <!-- Cuenta con botón copiar -->
      <div class="bg-kintsugi-cream/40 rounded-xl p-4 flex items-center justify-between gap-3">
        <div class="flex-1 min-w-0">
          <p class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-1">Número de cuenta</p>
          <p class="font-mono text-sm text-kintsugi-ink truncate">{{ bankInfo.account }}</p>
        </div>
        <button 
          @click="copyToClipboard(bankInfo.account, 'account')"
          class="shrink-0 bg-kintsugi-deep text-white p-2 rounded-lg hover:bg-kintsugi-ink transition-colors"
          :title="copied === 'account' ? '¡Copiado!' : 'Copiar cuenta'"
        >
          <Check v-if="copied === 'account'" :size="16" />
          <Copy v-else :size="16" />
        </button>
      </div>

      <div class="bg-kintsugi-cream/40 rounded-xl p-4">
        <p class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-1">Concepto sugerido</p>
        <p class="font-medium text-kintsugi-ink">{{ bankInfo.reference }}</p>
      </div>

    </div>

    <!-- Instrucciones de seguimiento -->
    <div class="bg-kintsugi-peach/30 border border-kintsugi-peach rounded-xl p-4 text-sm text-kintsugi-ink/80 leading-relaxed">
      <p class="font-medium text-kintsugi-ink mb-2">📨 Después de transferir</p>
      <p>
        Envía tu comprobante a 
        <a href="mailto:donaciones@kinsugi.org" class="text-kintsugi-deep underline font-medium">
          donaciones@kinsugi.org
        </a>
        para confirmarte la recepción.
      </p>
    </div>

  </div>
</template>