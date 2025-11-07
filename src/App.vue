<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header/Header.vue'
</script>

<template>
  <Header />

  <main class="bg-gray-300 mx-20 mt-23 py-8 px-12 flex flex-col gap-8 shadow-2xl rounded">
    <RouterView />
  </main>
</template>