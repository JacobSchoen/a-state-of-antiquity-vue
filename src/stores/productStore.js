import {ref, computed } from 'vue'
import { client } from '../lib/sanityClient'
import {defineStore } from 'pinia'

export const useProductStore = defineStore('Product', () => {
    let products = ref()

    const getProducts = computed(() => products)

    function fetchProducts() {
        const query = '*[_type == "product"]';

        client.fetch(query).then(
            result => {
              console.log('this.loading = false');
              products.value = result

            },
            error => {
              this.error = error;
            }
          );
    }

    return { products, getProducts, fetchProducts}
})