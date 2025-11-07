<script setup>
import { ref } from 'vue'

const photos = [
  { id: 1, title: 'Шкільний концерт', img: 'https://placehold.co/400x300/png' },
  { id: 2, title: 'Урок музики', img: 'https://placehold.co/500x600/png' },
  { id: 3, title: 'Наш клас', img: 'https://placehold.co/500x300/png' },
  { id: 4, title: 'Випуск 2024', img: 'https://placehold.co/200x400/png' },
  { id: 5, title: 'Шкільний концерт', img: 'https://placehold.co/500x600/png' },
  { id: 6, title: 'Урок музики', img: 'https://placehold.co/500x600/png' },
  { id: 7, title: 'Наш клас', img: 'https://placehold.co/200x400/png' },
  { id: 8, title: 'Випуск 2024', img: 'https://placehold.co/500x600/png' },
]

const selected = ref(null)

function openPhoto(photo) {
  selected.value = photo
}

function closePhoto() {
  selected.value = null
}
</script>

<template>
  <div class="columns-2 md:columns-3 lg:columns-4 gap-5 p-4">
    <div
      v-for="photo in photos"
      :key="photo.id"
      class="hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img
        @click="openPhoto(photo)"
        class="w-full rounded-xl mb-4 object-cover"
        :src="photo.img"
        :alt="photo.title"
      />
    </div>
  </div>

  <transition name="fade">
    <div
      v-if="selected"
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex items-center justify-center z-50"
      @click="closePhoto"
    >
      <img
        :src="selected.img"
        :alt="selected.title"
        class="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl transform scale-95 transition duration-300 "
      />
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
