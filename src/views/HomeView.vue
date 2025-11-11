<script setup>
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import NewsAndEventsCard from '@/components/NewsAndEventsCard.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]

const slides = [
  {
    id: 1, img: 'https://placehold.co/500x600/png',
    title: 'Шкільний концерт',
    descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
    date: '12.09.2023',
  },
  {
    id: 2, img: 'https://placehold.co/500x600/png',
    title: 'Шкільний концерт',
    descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
    date: '12.09.2023',
  },
  {
    id: 3, img: 'https://placehold.co/500x600/png',
    title: 'Шкільний концерт',
    descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
    date: '12.09.2023',
  },
  {
    id: 4, img: 'https://placehold.co/500x600/png',
    title: 'Шкільний концерт',
    descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
    date: '12.09.2023',
  },
  {
    id: 5, img: 'https://placehold.co/500x600/png',
    title: 'Шкільний концерт',
    descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
    date: '12.09.2023',
  },
  {
    id: 6, img: 'https://placehold.co/500x600/png',
    title: 'Шкільний концерт',
    descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
    date: '12.09.2023',
  },
]
</script>

<template>
  <!-- Слайдер зображень -->
  <div>
    <Swiper :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }" navigation class="h-160">
      <SwiperSlide v-for="slide in slides" :key="slide.id"
        class="relative flex flex-col items-center justify-center bg-white overflow-hidden rounded-tr rounded-tl">
        <RouterLink :to="`/info-news-or-evets/${slide.id}`" class="absolute inset-0 z-10">
          <img :src="slide.img" :alt="slide.title" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 right-0 left-0 h-1/4 bg-linear-to-t from-black/60 to-transparent text-white
        px-4 flex flex-col justify-center gap-5">
            <p class="font-bold text-xl">{{ slide.title }}</p>
            <p class="opacity-50">Пн, 12.11.2025</p>
          </div>
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </div>
  <!-- Інформація про школу -->
  <div class="flex flex-col lg:flex-row items-center gap-10 px-5">
    <img src="https://placehold.co/1200x800/png" class="sm:3/4 md:w-2/3 lg:w-1/2 rounded-lg" alt="">
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
        <RouterLink to="/about" class="bg-blue-400 text-white px-4 py-2 rounded">Дізнатися більше</RouterLink>
      </div>
    </div>
  </div>
  <!-- Останні новини -->
  <div class="px-5 pb-5">
    <h2 class="font-bold text-xl text-center mb-2">Останні новини</h2>
    <div>
      <Swiper :modules="modules" :slides-per-view="3" :space-between="30" navigation :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="{
          0: {
            slidesPerView: 1, // мобільні телефони
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2, // планшети
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // комп’ютери
            spaceBetween: 30,
          }
        }">
        <SwiperSlide v-for="slide in slides" :key="slide.id"
          class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <NewsAndEventsCard :id="slide.id" :img="slide.img" :title="slide.title" :descrtiption="slide.descrtiption"
            :date="slide.date" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped></style>
