<script setup>
const props = defineProps({ img: String, title: String, descrtiption: String, date: String });

</script>

<template>
    <div class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden">
        <img :src="img" :alt="title" class="w-full h-64 object-cover" />
        <div class="p-4">
            <p class="font-bold text-lg mb-2">{{ title }}</p>
            <p class="text-justify">{{ descrtiption }}</p>
            <p class="opacity-30 text-end mt-1">{{ date }}</p>
        </div>
    </div>
</template>