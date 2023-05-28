<template>
    <div class="bg-dark">
        <section v-if="!loading">
            <div class="grid">
                <div
                    class="col-12 lg:col-7 flex justify-content-center align-self-center justify-items-center"
                >
                    <div class="m-2 lg:w-8 lg:h-8 card">
                        <img
                            :src="urlFor(product.image && product.image[0])"
                            alt="Image"
                            class="flex justify-content-center border-round-lg"
                        />
                        <div
                            class="flex flex-row w-2 my-2 justify-content-between"
                            style="row-gap: 1rem"
                        >
                            <img
                                alt="0"
                                :src="urlFor(product.image && product.image[0])"
                                class="w-full mr-1 cursor-pointer transition-colors transition-duration-150 border-round' border-primary"
                            />
                            <img
                                alt="1"
                                :src="urlFor(product.image && product.image[0])"
                                class="w-full mr-1 cursor-pointer transition-colors transition-duration-150 border-round'"
                            />
                            <img
                                alt="2"
                                :src="urlFor(product.image && product.image[0])"
                                class="w-full mr-1 cursor-pointer transition-colors transition-duration-150 border-round'"
                            />
                            <img
                                alt="3"
                                :src="urlFor(product.image && product.image[0])"
                                class="w-full mr-1 cursor-pointer transition-colors transition-duration-150 border-round'"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-4">
                    <div class="m-2">
                        <div class="text-xl font-bold mb-4">
                            {{ product.name }}
                        </div>
                        <div class="text-xl font-bold mb-2 mt-2">
                            Product Details
                        </div>
                        <div class="text-800 p-0 mx-0 mt-0 mb-4">
                            {{ product.details }}
                        </div>
                        <div class="text-3xl font-bold mb-4">
                            ${{ product.price }}
                        </div>

                        <div
                            class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between"
                        >
                            <span
                                class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round"
                                ><input
                                    class="p-inputtext p-component p-inputnumber-input w-2rem text-center py-2 px-1 border-transparent outline-none shadow-none"
                                    aria-valuemin="0"
                                    aria-valuenow="1" />
                                <button
                                    class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text text-600 hover:text-primary py-1 px-1"
                                    type="button"
                                    tabindex="-1"
                                    aria-hidden="true"
                                >
                                    <span class="pi pi-plus p-button-icon">
                                    </span>
                                    <span class="p-button-label">&nbsp;</span>
                                    <span
                                        class="p-ink"
                                        role="presentation"
                                        aria-hidden="true"
                                    >
                                    </span>
                                </button>
                                <button
                                    class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text text-600 hover:text-primary py-1 px-1"
                                    type="button"
                                    tabindex="-1"
                                    aria-hidden="true"
                                >
                                    <span class="pi pi-minus p-button-icon">
                                    </span>
                                    <span class="p-button-label">&nbsp;</span>
                                    <span
                                        class="p-ink"
                                        role="presentation"
                                        aria-hidden="true"
                                    >
                                    </span></button
                            ></span>
                            <div
                                class="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5"
                            >
                                <button
                                    class="p-button p-component flex-1 mr-5"
                                    type="button"
                                    aria-label="Add to Cart"
                                >
                                    <span class="p-button-label"
                                        >Add to Cart</span
                                    >
                                    <span
                                        class="p-ink"
                                        role="presentation"
                                        aria-hidden="true"
                                    >
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
