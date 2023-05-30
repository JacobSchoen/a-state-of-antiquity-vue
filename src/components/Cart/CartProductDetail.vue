<template>
    <li
        class="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center"
    >
        <img
            :src="urlFor(item.image && item.image[0])"
            class="w-12rem flex-shrink-0 mx-auto md:mx-0"
            alt="shopping-cart-2-1"
        />
        <div class="flex-auto py-5 md:pl-5">
            <div
                class="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6"
            >
                <div class="w-full sm:w-6 flex flex-column">
                    <span class="text-900 text-xl font-medium mb-3"
                        >{{ item.name }}
                    </span>
                </div>
                <div
                    class="w-full sm:w -6 flex align-items-start justify-content-between mt-3 sm:mt-0"
                >
                    <div>
                        <span
                            class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round"
                            ><input
                                class="p-inputtext p-component p-inputnumber-input w-2rem text-center py-2 px-1 border-transparent outline-none shadow-none"
                                :value="item.quantity" />
                            <button
                                class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text text-600 hover:text-primary py-1 px-1"
                                type="button"
                                tabindex="-1"
                                @click="
                                    store.toggleCartItemQuanitity(
                                        item._id,
                                        'inc'
                                    )
                                "
                            >
                                <span class="pi pi-plus p-button-icon"> </span>
                            </button>
                            <button
                                class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text text-600 hover:text-primary py-1 px-1"
                                type="button"
                                tabindex="-1"
                                @click="
                                    store.toggleCartItemQuanitity(
                                        item._id,
                                        'dec'
                                    )
                                "
                            >
                                <span class="pi pi-minus p-button-icon">
                                </span></button
                        ></span>
                    </div>
                    <div class="flex flex-column sm:align-items-end">
                        <span
                            class="text-900 text-xl font-medium mb-2 sm:mb-3"
                            >{{ item.price }}</span
                        ><a
                            class="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300"
                            @click="store.onRemove(item)"
                        >
                            Remove
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup>
import { urlFor } from '../../lib/sanityClient'
import { useCartStore } from '../../stores/CartStore'
import { defineProps } from 'vue'

const store = useCartStore()

const props = defineProps({
    item: Object,
})
</script>

<style></style>
