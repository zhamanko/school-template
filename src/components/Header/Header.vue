<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import NavMenu from './NavMenu.vue'

const open = ref(false)
const route = useRoute()

watch(route, () => {
  open.value = false
})

watch(open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="bg-gray-400 shadow-lg flex justify-between items-center px-6 lg:px-20 py-5 relative">
    <!-- LOGO -->
    <div>
      <RouterLink to="/" class="font-bold text-xl">LOGO</RouterLink>
    </div>

    <!-- Навігація для великих екранів -->
    <nav class="hidden lg:block">
      <ul class="flex gap-6">
        <NavMenu />
      </ul>
    </nav>

    <!-- Бургер для мобільних -->
    <button
      class="relative z-20 flex flex-col justify-center items-center space-y-1.5 lg:hidden"
      @click="open = !open"
    >
      <span
        class="block w-7 h-[2px] bg-black transition-all duration-300"
        :class="{ 'rotate-45 translate-y-2': open }"
      ></span>
      <span
        class="block w-7 h-[2px] bg-black transition-all duration-300"
        :class="{ 'scale-0': open }"
      ></span>
      <span
        class="block w-7 h-[2px] bg-black transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-2': open }"
      ></span>
    </button>

    <!-- Overlay -->
    <div
      v-if="open"
      class="fixed inset-0 bg-black/40 z-10"
      @click="open = false"
    ></div>

    <!-- Мобільне меню -->
    <div
      class="fixed top-0 right-0 h-screen w-[250px] bg-white p-10 pt-20 z-10 shadow-lg transition-transform duration-300"
      :class="{ 'translate-x-full': !open, 'translate-x-0': open }"
    >
      <nav class="flex flex-col justify-center h-full">
        <ul class="text-lg space-y-7 text-end">
          <NavMenu />
        </ul>
      </nav>
    </div>
  </header>
</template>
