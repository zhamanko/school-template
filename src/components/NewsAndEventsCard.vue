<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({ id: Number, img: String, title: String, descrtiption: String, date: String });

</script>

<template>
    <RouterLink :to="`/info-news-or-evets/${id}`" 
    class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden hover:scale-102 transition">
        <img :src="img" :alt="title" class="w-full h-64 object-cover" />
        <div class="p-4">
            <p class="font-bold text-lg mb-2">{{ title }}</p>
            <p class="text-justify">{{ descrtiption }}</p>
            <p class="opacity-30 text-end mt-1">{{ date }}</p>
        </div>
    </RouterLink>
</template>