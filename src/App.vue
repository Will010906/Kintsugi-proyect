<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>