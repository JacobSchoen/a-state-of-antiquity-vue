import {ref, computed } from 'vue'
import { client } from '../lib/sanityClient'
import {defineStore } from 'pinia'

export const useProductStore = defineStore('Product', () => {
    let paintingProducts = ref()
    let studioProducts = ref()

    const getProducts = computed(() => products)

    function fetchStudioProducts() {
        const query = `*[_type == "product" && ProductType == "studio"]`;

        client.fetch(query).then(
            result => {
                studioProducts.value = result
            },
            error => {
              this.error = error;
            }
          );
    }

    function fetchPaintingProducts() {
      const query = `*[_type == "product" && ProductType == "painting"]`;

      client.fetch(query).then(
          result => {
            paintingProducts.value = result
          },
          error => {
            this.error = error;
          }
        );
  }

    return { paintingProducts, studioProducts, getProducts, fetchStudioProducts, fetchPaintingProducts}
})