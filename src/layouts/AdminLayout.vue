<script setup>
// import Header from '@/components/Header/Header.vue'
// import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <div class="fixed left-0 top-0 bottom-0 w-40 bg-gray-300">
    <nav>
      <li><RouterLink to="#">AdminPanel</RouterLink></li>
      <ul>
        <li><RouterLink to="#">Додати новину/подію</RouterLink></li>
        <li><RouterLink to="#">Список новину/подію</RouterLink></li>
        <li><RouterLink to="#">Settings</RouterLink></li>
      </ul>
    </nav>
  </div>
  <RouterView class="ml-40"/>
</template>
