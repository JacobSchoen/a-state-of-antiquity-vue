<template>
    <div class="bg-dark">
        <div class="grid pt-6">
            <div
                class="col-12 md:col-6 md:pr-3 md:pl-6 p-6 md:p-0 justify-content-center flex"
            >
                <router-link
                    style="text-decoration: none"
                    :to="{
                        name: 'studioShop',
                    }"
                >
                    <img
                        class="w-full h-full shadow-2 border-round"
                        v-bind:src="forTheStudioImg"
                        alt="Image"
                    />
                </router-link>
            </div>
            <div
                class="col-12 md:col-6 md:pl-3 p-6 md:p-0 md:pr-6 justify-content-center flex"
            >
                <router-link
                    style="text-decoration: none"
                    :to="{
                        name: 'paintingShop',
                        props: { shopCategory: 'painting' },
                    }"
                >
                    <img
                        class="w-full h-full shadow-2 border-round"
                        v-bind:src="paintingsImg"
                        alt="Image"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import forTheStudioImg from '../assets/shop/artDesk.png'
import paintingsImg from '../assets/shop/artCanvas.jpg'
</script>

<style lang=""></style>
