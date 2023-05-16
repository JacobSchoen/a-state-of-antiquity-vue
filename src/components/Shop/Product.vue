<template>
    <router-link style="text-decoration:none" :to="{ name: 'product', params: { productId: product.slug.current }}">
        <Image :src=" urlFor(product.image && product.image[0])" alt="Image" width="250" />
        <div>
          {{ product.name }}
        </div>
        <div>
          ${{ product.price }}
        </div>
    </router-link>
</template>

<script setup>
import {defineProps} from 'vue'
import { urlFor } from '../../lib/sanityClient'

const props = defineProps({
    product: Object
})
</script>
