<template>
    <main class="flex flex-column h-screen">
        <NavBar />
        <RouterView class="flex-1" />
    </main>
</template>

<script setup>
import { useSanityClient } from 'vue-sanity'
import NavBar from './components/NavBar/NavBar.vue'

useSanityClient({
    projectId: '3gdrpofi',
    dataset: 'production',
    useCdn: process.env.NODE_ENV === 'production',
})
</script>

<style lang="scss">
@import 'css/main';
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
</style>
