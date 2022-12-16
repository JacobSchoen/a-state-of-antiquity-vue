<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You've successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <div>
    sanity stuff
    <h1>
      {{ title }}
    </h1>
</div>
  </div>
</template>

<script setup>
import { useSanityFetcher } from 'vue-sanity';

//state
const title = useSanityFetcher(// query
      () => `*[_type == "post"][0].title`,
      // initial value
      'Title - Default',
      // mapper
      result => `Title - ${result}`,
      // options
      {
        listen: true,
        clientOnly: true,
      })
;
console.log(title)

// OR use a factory function
// const { data: title } = useSanityFetcher(
//   () => `*[slug.current == ${slug.value}][0].title`
// )

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
