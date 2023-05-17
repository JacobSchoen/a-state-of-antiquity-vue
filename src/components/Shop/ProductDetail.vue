<template>
    <div class="bg-dark">
        <section v-if="!loading">
            <div class="box p-4">
                <div
                    class="surface-card mb-4 w-full text-center p-5"
                    style="border-radius: '10px'"
                >
                    <Image
                        :src="urlFor(product.image && product.image[0])"
                        alt="Image"
                        class=""
                    />
                </div>
                <div class="flex align-items-center mb-4">
                    <div class="flex flex-column">
                        <span class="block font-semibold mb-1">{{ product.name }}</span
                        ><span class="text-secondary text-sm"
                            >{{ product.details }}</span
                        >
                    </div>
                    <span class="font-medium text-xl ml-auto">${{product.price}}</span>
                </div>
                <button
                    class="p-button p-component p-button-outlined w-full"
                    type="button"
                    aria-label="Add to Cart"
                >
                    <span
                        class="p-button-icon p-button-icon-left pi pi-shopping-cart"
                    ></span
                    ><span class="p-button-label">Add to Cart</span
                    >
                </button>
            </div>
        </section>
        <section class="flex justify-content-center" v-else>
            <ProgressSpinner />
        </section>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { client, urlFor } from '../../lib/sanityClient'

const route = useRoute()
let loading = ref(true)
let slug = route.params.productId
let product = ref()

function fetchProduct() {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`

    client.fetch(query).then(
        (result) => {
            loading.value = false
            product.value = result
        },
        (error) => {
            this.error = error
        }
    )
}

onBeforeMount(() => {
    fetchProduct()
})
</script>
