<template>
    <div class="flex p-5 vertical-align-middle bg-light">
        <section class="navBar__logoSection">
            <img class="" :src="logo" />
        </section>
        <section class="flex">
            <section class="m-3 cursor-pointer">
                <router-link class="rl-primary" to="/">Home</router-link>
            </section>
            <section class="m-3 cursor-pointer">
                <router-link class="rl-primary" to="/blog">Blog</router-link>
            </section>
            <section class="m-3 cursor-pointer">
                <router-link class="rl-primary" to="/shop">Shop</router-link>
            </section>
            <section class="m-3 cursor-pointer">
                <router-link class="rl-primary" to="/contactUs"
                    >About</router-link
                >
            </section>
            <section class="m-3 cursor-pointer">
                <router-link class="rl-primary" to="/cart">
                    <i class="pi pi-shopping-bag"></i>
                </router-link>
            </section>
        </section>
    </div>
</template>

<script setup>
import logo from '@/assets/logo-placeholder.svg'
</script>

<style lang="scss"></style>
