import { ref, computed } from 'vue'
import { client } from '../lib/sanityClient'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
    let blogPosts = ref()

    const getblogs = computed(() => blogPosts)

    function getBlogPosts() {
        const query = `*[_type == "post"]{
            _id, "imageUrl": mainImage.asset->url, body, title, publishedAt, author
        } | order(_createdAt desc)`

        client.fetch(query).then(
            result => {
                console.log(result);
                blogPosts.value = result
            },
            error => {
                this.error = error;
              }
        )
    }

    return { blogPosts, getBlogPosts, getblogs }
})
