<template>
    <div class="navBar bg-light">
        <section class="navBar__logoSection">
            <img class="navBar__logo" :src="logo" />
        </section>
        <section class="navBar__linkSection">
            <section class="navBar__link">
                <router-link class="rl-primary" to="/">Home</router-link>
            </section>
            <section class="navBar__link">
                <router-link class="rl-primary" to="/blog">Blog</router-link>
            </section>
            <section class="navBar__link">
                <router-link class="rl-primary" to="/shop">Shop</router-link>
            </section>
            <section class="navBar__link">
                <router-link class="rl-primary" to="/contactUs"
                    >Contact Us</router-link
                >
            </section>
        </section>
    </div>
</template>

<script setup>
import logo from '@/assets/logo-placeholder.png'
</script>

<style lang="scss">
.navBar {
    display: flex;
}

.navBar__linkSection{
    display: flex;
    align-items: center;
}
.navBar__link {
    padding: 0.5em;
}
.navBar__logoSection{
    display: flex;
}
.navBar__logo{
    width:50%;
}
</style>
