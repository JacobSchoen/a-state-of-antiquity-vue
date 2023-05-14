import {ref, computed } from 'vue'
import { useSanityFetcher } from 'vue-sanity'
import {defineStore } from 'pinia'

export const useProductStore = defineStore('Product', () => {
    let products = ref()

    const getProducts = computed(() => products)

    function fetchProducts() {
        useSanityFetcher(
            // query
            () => `*[_type == "product"]`,
            // initial value
            'Title - Default',
            // mapper
            (result) => {
                console.log('in action', result)
                products.value = result
            },
            // options
            {
                listen: true,
                clientOnly: true,
            }
        )
    }

    return { products, getProducts, fetchProducts}
})