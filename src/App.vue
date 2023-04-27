<template>
    <main class="app__main">
        <NavBar />
        <RouterView  class="app__routerView" />
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

.app__main {

}
.app__routerView {
    display: flex;
    align-content: center;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    height: 100vh;

}
</style>
