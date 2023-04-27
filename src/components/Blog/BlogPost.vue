<template>
    <div class="bg-primary">
        <h1>Post {{ BlogData.title }}</h1>
        <img :src="BlogData.imageUrl" />
        {{ BlogData.body[0].children[0].text }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

//properties
const props = defineProps({
    BlogData: Object,
})
</script>

<style lang=""></style>
