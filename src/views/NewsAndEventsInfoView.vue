<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import { useRoute } from 'vue-router';
const route = useRoute();

import 'swiper/css';

import 'swiper/css/effect-coverflow';

const modules = [EffectCoverflow, Pagination];

const img = [
    'https://placehold.co/500x300/png',
    'https://placehold.co/400x600/png',
    'https://placehold.co/600x400/png',
    'https://placehold.co/300x500/png',
]
</script>

<template>
    <div class="flex p-4 gap-6">
        <div class="w-6/5  sticky top-4 h-fit">
            <Swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100, 
                    modifier: 1,
                    slideShadows: true,
                }" :pagination="true" :modules="modules" class="h-120">
                <SwiperSlide v-for="(image, index) in img" :key="index" class="w-96 h-64 overflow-hidden shadow-lg">
                    <img :src="image" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div>
            <h1 class="font-bold text-center mb-2">title</h1>
            <div class="text-justify space-y-2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ea? Suscipit eum assumenda
                    nulla modi reiciendis quae porro distinctio non saepe doloremque deleniti, explicabo ullam libero
                    corrupti quos sapiente. Illum!</p>
            </div>
            <p class="opacity-50 text-end mt-7">12.02.2024</p>
        </div>
    </div>
</template>