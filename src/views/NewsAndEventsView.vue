<script setup>
import NewsAndEventsCard from '@/components/NewsAndEventsCard.vue';

const items = [
    {
        id: 1,
        img: 'https://placehold.co/500x600/png',
        title: 'Шкільний концерт',
        descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
        date: '12.09.2023',
    },
    {
        id: 2,
        img: 'https://placehold.co/500x600/png',
        title: 'Шкільний концерт',
        descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
        date: '12.09.2023',
    },
    {
        id: 3,
        img: 'https://placehold.co/500x600/png',
        title: 'Шкільний концерт',
        descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
        date: '12.09.2023',
    },
    {
        id: 4,
        img: 'https://placehold.co/500x600/png',
        title: 'Шкільний концерт',
        descrtiption: 'Запрошуємо всіх на щорічний шкільний концерт, де виступатимуть наші талановиті учні.',
        date: '12.09.2023',
    },

];
</script>

<template>
    <div>
        <div class="flex justify-around mb-6">
            <button class="bg-blue-500 w-full py-4 text-white rounded-tl">Новини</button>
            <button class="bg-blue-400 w-full py-4 text-white rounded-tr">Події</button>
        </div>
        <div class="mt-6 grid grid-cols-3 gap-8 px-5 pb-5">
            <NewsAndEventsCard v-for="item in items" :key="item.id" :img="item.img" :title="item.title"
                :descrtiption="item.descrtiption" :date="item.date" />
        </div>
    </div>
</template>