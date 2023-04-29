import { ref, computed } from 'vue'
import { useSanityFetcher } from 'vue-sanity'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
    let blogPosts = ref()

    const getblogs = computed(() => blogPosts)

    function getBlogPosts() {
        useSanityFetcher(
            // query
            () => `*[_type == "post"]{
              _id, "imageUrl": mainImage.asset->url, body, title, publishedAt, author
          } | order(_createdAt desc)`,
            // initial value
            'Title - Default',
            // mapper
            (result) => {
                console.log('in action', result)
                blogPosts.value = result
            },
            // options
            {
                listen: true,
                clientOnly: true,
            }
        )
    }

    return { blogPosts, getBlogPosts, getblogs }
})
