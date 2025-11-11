<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <Header />

  <main class="bg-gray-300 flex-1 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-3 sm:my-6  md:my-13 lg:my-23 flex flex-col gap-8 shadow-2xl rounded">
    <RouterView />
  </main>

  <Footer />
</template>