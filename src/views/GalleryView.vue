<script setup>

const photos = [
    { id: 1, title: 'Шкільний концерт', img: 'https://placehold.co/400x300/png' },
    { id: 2, title: 'Урок музики', img: 'https://placehold.co/500x600/png' },
    { id: 3, title: 'Наш клас', img: 'https://placehold.co/500x300/png' },
    { id: 4, title: 'Випуск 2024', img: 'https://placehold.co/200x400/png' },
    { id: 5, title: 'Шкільний концерт', img: 'https://placehold.co/500x600/png' },
    { id: 6, title: 'Урок музики', img: 'https://placehold.co/500x600/png' },
    { id: 7, title: 'Наш клас', img: 'https://placehold.co/200x400/png' },
    { id: 8, title: 'Випуск 2024', img: 'https://placehold.co/500x600/png' },
        { id: 1, title: 'Шкільний концерт', img: 'https://placehold.co/400x300/png' },
    { id: 2, title: 'Урок музики', img: 'https://placehold.co/500x600/png' },
    { id: 3, title: 'Наш клас', img: 'https://placehold.co/500x300/png' },
    { id: 4, title: 'Випуск 2024', img: 'https://placehold.co/200x400/png' },
    { id: 5, title: 'Шкільний концерт', img: 'https://placehold.co/500x600/png' },
    { id: 6, title: 'Урок музики', img: 'https://placehold.co/500x600/png' },
    { id: 7, title: 'Наш клас', img: 'https://placehold.co/200x400/png' },
    { id: 8, title: 'Випуск 2024', img: 'https://placehold.co/500x600/png' },
]
</script>

<template>
    <div class=" columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        <div v-for="photo in photos" :key="photo.id">
            <img class="w-full rounded-xl mb-4 object-cover" :src="photo.img" :alt="photo.title" />
        </div>
    </div>
</template>