<template>
    <div class="bg-dark">
        <DataView :value="Products" :layout="layout" paginator :rows="15">
            <template #header>
                <div class="flex justify-content-between">
                    <InputText type="text" v-model="value" />
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <router-link
                        style="text-decoration: none"
                        :to="{
                            name: 'product',
                            params: { productId: slotProps.data.slug.current },
                        }"
                    >
                        <div
                            class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
                        >
                            <img
                                class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                                :src="
                                    urlFor(
                                        slotProps.data.image &&
                                            slotProps.data.image[0]
                                    )
                                "
                                alt="Image"
                                width="250"
                            />
                            <div
                                class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
                            >
                                <div
                                    class="flex flex-column align-items-center sm:align-items-start gap-3"
                                >
                                    <div class="text-2xl font-bold text-900">
                                        {{ slotProps.data.name }}
                                    </div>
                                    <div class="flex align-items-center gap-3">
                                        <!-- <Tag
                                        :value="slotProps.data.inventoryStatus"
                                        :severity="getSeverity(slotProps.data)"
                                    ></Tag> -->
                                    </div>
                                </div>
                                <div
                                    class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
                                >
                                    <span class="text-2xl font-semibold"
                                        >${{ slotProps.data.price }}</span
                                    >
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        rounded
                                        :disabled="
                                            slotProps.data.inventoryStatus ===
                                            'OUTOFSTOCK'
                                        "
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <router-link
                        style="text-decoration: none"
                        :to="{
                            name: 'product',
                            params: { productId: slotProps.data.slug.current },
                        }"
                    >
                        <div
                            class="p-4 border-1 surface-border surface-card border-round"
                        >
                            <div
                                class="flex flex-wrap align-items-center justify-content-between gap-2"
                            >
                                <!-- <Tag
                                :value="slotProps.data.inventoryStatus"
                                :severity="getSeverity(slotProps.data)"
                            ></Tag> -->
                            </div>
                            <div
                                class="flex flex-column align-items-center gap-3 py-5"
                            >
                                <img
                                    class="w-9 shadow-2 border-round"
                                    :src="
                                        urlFor(
                                            slotProps.data.image &&
                                                slotProps.data.image[0]
                                        )
                                    "
                                    alt="Image"
                                    width="250"
                                />
                                <div class="text-2xl font-bold">
                                    {{ slotProps.data.name }}
                                </div>
                                <!-- <Rating
                                value="{product.rating}"
                                readonly
                                :cancel="false"
                            ></Rating> -->
                            </div>
                            <div
                                class="flex align-items-center justify-content-between"
                            >
                                <span class="text-2xl font-semibold"
                                    >${{ slotProps.data.price }}</span
                                >
                                <Button
                                    icon="pi pi-shopping-cart"
                                    rounded
                                    :disabled="
                                        slotProps.data.inventoryStatus ===
                                        'OUTOFSTOCK'
                                    "
                                ></Button>
                            </div>
                        </div>
                    </router-link>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { urlFor } from '../lib/sanityClient'
import { useProductStore } from '@/stores/productStore'
import { onMounted, computed, ref } from 'vue'

//store
const store = useProductStore()
//state
const Products = computed(() => store.products)
const layout = ref('grid')

onMounted(() => {
    if (!store.products) {
        store.fetchProducts()
    }
})
</script>
<!--to consider when implementing stripe
 @davidhendriksen7747
3 months ago
I think it is not considered good practice to send sensitive information, such as cart items, directly from the client side to Stripe. This is because a malicious user could modify the prices in the line_items array before the request is sent. To mitigate this risk, it would be more secure to use the Product ID's in the line items instead of the price itself. This way, on the server-side, you can fetch the correct price for each line item. Also, making the Stripe Secret key publicly available can be very dangerous. I just wanted to give some feedback, I hope you don't take it the wrong way. Thanks for the great tutorial! -->

<style lang=""></style>
