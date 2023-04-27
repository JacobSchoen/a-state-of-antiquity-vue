<template>
    <main class="bg-primary">the home view</main>
</template>

<script setup>
// import sanityclient from '../sanityClient'
import { onMounted, ref } from 'vue'

// const query = `*[_type == "post"]{
//             _id, mainImage, body
//         }`

// const posts = ref({});

// const fetchData = () => {
//   sanityclient
//     .fetch(query)
//     .then((data) => {
//       posts.value = data;
//       console.log(posts.value)
//     })
//     .catch((err) => {console.log(err)});
// };

onMounted(() => {
  // fetchData()
});

</script>

<style lang="scss"></style>
