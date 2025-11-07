<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]

const slides = [
  { id: 1, title: 'Шкільний концерт', img: 'https://placehold.co/500x600/png' },
  { id: 2, title: 'Урок музики', img: 'https://placehold.co/500x600/png' },
  { id: 3, title: 'Наш клас', img: 'https://placehold.co/500x600/png' },
  { id: 4, title: 'Випуск 2024', img: 'https://placehold.co/500x600/png' },
]
</script>

<template>
  <!-- Слайдер зображень -->
  <div>
    <Swiper :modules="modules" :slides-per-view="3" :space-between="30" navigation :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }" class="rounded-2xl">
      <SwiperSlide v-for="slide in slides" :key="slide.id"
        class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden">
        <img :src="slide.img" :alt="slide.title" class="w-full h-64 object-cover" />
        <p class="p-4 text-lg font-semibold text-gray-800">{{ slide.title }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
  <!-- Інформація про школу -->
  <div class="flex items-center gap-10">
    <img src="https://placehold.co/1200x800/png" class="w-1/2 rounded-lg" alt="">
    <div class="flex flex-col gap-4">
      <div class="text-justify">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fuga nobis laboriosam. Expedita ducimus quos
          voluptatibus libero labore quod autem sapiente, impedit deleniti nam exercitationem consequatur blanditiis
          suscipit id perspiciatis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fuga nobis laboriosam. Expedita ducimus quos
          voluptatibus libero labore quod autem sapiente, impedit deleniti nam exercitationem consequatur blanditiis
          suscipit id perspiciatis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fuga nobis laboriosam. Expedita ducimus quos
          voluptatibus libero labore quod autem sapiente, impedit deleniti nam exercitationem consequatur blanditiis
          suscipit id perspiciatis.</p>
      </div>
      <div class="text-end">
        <button class="bg-blue-400 px-4 py-2 rounded">Дізнатися більше</button>
      </div>
    </div>
  </div>
  <!-- Останні новини -->
  <div>
    <h2 class="font-bold text-xl text-center mb-2">Останні новини</h2>
    <div>
      <Swiper :modules="modules" :slides-per-view="3" :space-between="30" navigation :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }" class="rounded-2xl">
        <SwiperSlide v-for="slide in slides" :key="slide.id"
          class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden">
          <img :src="slide.img" :alt="slide.title" class="w-full h-64 object-cover" />
          <p class="p-4 text-lg font-semibold text-gray-800">{{ slide.title }}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped></style>
