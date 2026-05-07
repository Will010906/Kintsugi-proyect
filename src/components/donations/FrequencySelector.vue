<script setup>
const selected = defineModel({ default: 'una-vez' })

const options = [
  { value: 'una-vez',  label: 'Una vez' },
  { value: 'mensual',  label: 'Mensual' },
  { value: 'anual',    label: 'Anual' },
]
</script>

<template>
  <div class="inline-flex bg-white/60 rounded-full p-1 gap-1 shadow-inner">
    <button
      v-for="option in options"
      :key="option.value"
      @click="selected = option.value"
      :class="[
        'px-6 py-2 rounded-full text-sm font-medium transition-all',
        selected === option.value
          ? 'bg-kintsugi-deep text-white shadow-md'
          : 'text-kintsugi-ink/70 hover:text-kintsugi-ink'
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>