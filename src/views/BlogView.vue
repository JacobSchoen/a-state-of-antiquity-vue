<template>
    <div class="bg-dark">
        Blog page
        <div>
            <DataView :value="Posts">
                <template #list="slotProps">
                    <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div  class="p-3">
                            <div
                                
                                class="surface-100 cursor-pointer border-round"
                            >
                                <div  class="relative">
                                    <img
                                        :src="slotProps.data.imageUrl"
                                        class="w-full"
                                    />
                                </div>
                                <div  class="p-3">
                                    <div
                                        class="text-900 font-semibold text-xl mb-3"
                                    >
                                        {{slotProps.data.title}}
                                    </div>
                                    <p
                                        
                                        class="text-700 text-lg mt-0 mb-5"
                                    >
                                        {{slotProps.data.body[0].children[0].text}}
                                    </p>
                                    <div
                                        
                                        class="flex flex-wrap gap-2 align-items-center justify-content-between"
                                    >
                                        <span
                                            
                                            class="flex align-items-center text-900"
                                        >
                                            <i
                                                
                                                class="pi pi-comment mr-2"
                                            ></i>
                                            <span
                                                
                                                class="font-semibold"
                                                >2</span
                                            >
                                        </span>
                                        <span
                                            
                                            class="flex align-items-center text-900"
                                        >
                                            <i
                                                
                                                class="pi pi-share-alt mr-2"
                                            ></i>
                                            <span
                                                
                                                class="font-semibold"
                                                >7</span
                                            >
                                        </span>
                                        <span
                                            
                                            class="flex align-items-center text-900"
                                        >
                                            <i
                                                v-if="slotProps.data.publishedAt"
                                                class="pi pi-clock mr-2"
                                            ></i>
                                            <span
                                                class="font-semibold"
                                                >{{ convertPublishDate(slotProps.data.publishedAt) }}</span
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>
        </div>
    </div>
</template>

<script setup>
import { useBlogStore } from '@/stores/blogStore'
import { onMounted, ref, computed } from 'vue'
import BlogPost from '../components/Blog/BlogPost.vue'

//store
const store = useBlogStore()
//state
const Posts = computed(() => store.blogPosts)

//funcs
function convertPublishDate(date) {
    if (date) {

    
    date = new Date(date).toDateString();
    } else {
        date = ""
    }
    return date;
}


onMounted(() => {
    if (!store.blogPosts) {
        store.getBlogPosts()
        console.log('here')
    }
})
</script>

<style lang="scss">
.center {
    text-align: center;
}
</style>
