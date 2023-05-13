<template>
    <div class="bg-dark">
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
