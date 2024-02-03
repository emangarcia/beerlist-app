<template>
  
<div class="relative overflow-visible rounded-2xl bg-gradient-to-b from-gray-200 to-white dark:from-blue-700 dark:via-blue-800 dark:to-darker ">
  
  <div class="relative flex items-top h-full flex-row gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-blue-900 dark:bg-opacity-60">
    <div class="w-1/2 pt-4">
      <p class="text-md text-gray-600 dark:text-gray-100 mb-10">{{ description }}</p>
      <ul>
        <li class=" border-b border-b-primary py-2 text-md text-gray-600 dark:text-gray-100 mb-2" v-if="reviewCount">Reviews: {{ reviewCount }}</li>
        <li class=" border-b border-b-primary py-2 text-md text-gray-600 dark:text-gray-100 mb-2" v-if="ratingOverall">Rating: {{ ratingOverall }}</li>
        <li class=" border-b border-b-primary py-2  text-gray-600 dark:text-gray-100">Brewery: {{ brewer }}</li>
        <li class=" border-b border-b-primary py-2  text-gray-600 dark:text-gray-100">Location: {{ location }}</li>
        <li class=" border-b border-b-primary py-2  text-gray-600 dark:text-gray-100 mb-4">Style: {{ beerStyle }}</li>
      </ul>
      <UBadge class="mt-4 mr-4" size="sm">ABV: {{ abv }}</UBadge>
      <UBadge class="mt-4" size="sm">IBU: {{ ibu }}</UBadge>
    </div>
    <div class="w-1/2 ">
      <img class="w-full " :src="`/beers/${image}`" alt="beer image">
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string
  id?: Number
  description?: string
  image?: string
  location?: string
  abv?: string
  ibu?: string
  brewer?: string
  beerStyle?: string
  reviews?: object
}>()

const reviewCount = computed(() => {
  if (props.reviews) {
    return Object.keys(props.reviews).length
  }
})

const ratingOverall = computed(() => {
  if (props.reviews) {
    return Object.keys(props.reviews).reduce((acc, key) => {
      return acc + props.reviews[key].rating
    }, 0) / Object.keys(props.reviews).length
  }
})

function getImageUrl(imagename) {
  const imageUrl = new URL(`/assets/images/${imagename}`, import.meta.url).href
  return imageUrl;

}

</script>