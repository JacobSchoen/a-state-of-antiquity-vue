<template>
    <div class="bg-primary">
        Blog page 
        <div>
            sanity stuff
            <section v-for="post in posts" :key="post">
                <BlogPost :BlogData="post" ></BlogPost>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useSanityFetcher } from 'vue-sanity'
import { onMounted, ref } from 'vue'

//state
const posts = ref({})

onMounted(() => {
    useSanityFetcher(
        // query
        () => `*[_type == "post"]{
            _id, "imageUrl": mainImage.asset->url, body
        } | order(_createdAt desc)`,
        // initial value
        'Title - Default',
        // mapper
        (result) => {
            posts.value = result
        },
        // options
        {
            listen: true,
            clientOnly: true,
        }
    )
    console.log('test', posts)
})
</script>

<style lang=""></style>
