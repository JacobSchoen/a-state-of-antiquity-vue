<template>
  <div>
    {{ Products }}
    </div>
</template>

<script setup>
import {defineProps, computed} from 'vue'
import { useProductStore } from '@/stores/productStore'

//store
const store = useProductStore()
//state 
const Products = computed(() => store.products)

const props = defineProps({
    product: Object
})
</script>