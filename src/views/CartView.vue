<template>
    <main class="bg-dark">
        <div
            class="surface-section border-1 surface-border border-round px-4 py-8 md:px-6 lg:px-8"
        >
            <div class="flex flex-column align-items-center mb-4">
                <div class="text-900 text-4xl mb-4 font-medium">
                    Your cart total is ${{ store.totalPrice.toFixed(2) }}
                </div>
                <button
                    class="p-button p-component"
                    type="button"
                    aria-label="Check Out"
                >
                    <span class="p-button-label">Check Out</span
                    ><span
                        class="p-ink"
                        role="presentation"
                        @onClick="submit()"
                    ></span>
                </button>
            </div>
            <div class="mb-2">Total Items ({{ store.totalQuantities }})</div>
            <ul
                v-for="(item, index) in cartItems"
                :key="index"
                class="list-none p-0 m-0"
            >
                <CartProductDetailVue :item="item" />
            </ul>
            <div class="flex">
                <div class="w-12rem hidden md:block"></div>
                <ul
                    class="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto"
                >
                    <li class="flex justify-content-between mb-4">
                        <span class="text-xl text-900 font-semibold"
                            >Subtotal</span
                        ><span class="text-xl text-900">{{
                            store.totalPrice.toFixed(2)
                        }}</span>
                    </li>
                    <li class="flex justify-content-between mb-4">
                        <span class="text-xl text-900 font-semibold"
                            >Shipping</span
                        ><span class="text-xl text-900">{{
                            calculatedShipping
                        }}</span>
                    </li>
                    <li
                        class="flex justify-content-between border-top-1 surface-border mb-4 pt-4"
                    >
                        <span class="text-xl text-900 font-bold text-3xl"
                            >Total</span
                        ><span class="text-xl text-900 font-bold text-3xl"
                            >${{ totalCalculatedPrice }}</span
                        >
                    </li>
                    <li class="flex justify-content-end">
                        <button
                            class="p-button p-component"
                            type="button"
                            @onClick="submit()"
                        >
                            <span class="p-button-label">Check Out</span
                            ><span
                                class="p-ink"
                                role="presentation"
                                aria-hidden="true"
                            ></span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="(v) => (loading = v)"
        />
    </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import CartProductDetailVue from '../components/Cart/CartProductDetail.vue'
import { useCartStore } from '../stores/CartStore'
import { StripeCheckout } from '@vue-stripe/vue-stripe'

const store = useCartStore()
const calculatedShipping = ref(0)

const cartItems = computed(() => {
    return store.cartItems
})

const totalCalculatedPrice = computed(() => {
    return (store.totalPrice + calculatedShipping.value).toFixed(2)
})

function submit() {
    // You will be redirected to Stripe's secure checkout page
    this.$refs.checkoutRef.redirectToCheckout()
}
</script>

<style lang="scss"></style>
