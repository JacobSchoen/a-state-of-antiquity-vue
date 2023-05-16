<template>
    <div class="bg-dark">
        Shop page! 
        <section v-for="(product, index) in Products" :key="index">
            <Product :product="product"/>
        </section>
    </div>
</template>

<script setup>
import Product from '../components/Shop/product.vue'
import { useProductStore } from '@/stores/productStore'
import { onMounted, computed } from 'vue';


//store
const store = useProductStore()
//state 
const Products = computed(() => store.products)

onMounted(() => {
    if (!store.products){
        store.fetchProducts()
    }
    
})
</script>
<!--to consider when implementing stripe
 @davidhendriksen7747
3 months ago
I think it is not considered good practice to send sensitive information, such as cart items, directly from the client side to Stripe. This is because a malicious user could modify the prices in the line_items array before the request is sent. To mitigate this risk, it would be more secure to use the Product ID's in the line items instead of the price itself. This way, on the server-side, you can fetch the correct price for each line item. Also, making the Stripe Secret key publicly available can be very dangerous. I just wanted to give some feedback, I hope you don't take it the wrong way. Thanks for the great tutorial! -->

<style lang=""></style>
