<template>
<div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-blue-700 dark:via-blue-800 dark:to-darker ">
  <div class="relative flex items-center h-full flex-row gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-blue-900 dark:bg-opacity-60">
    <div class="w-2/3">
      <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ name }}</h4>
      <p class="text-sm text-gray-600 dark:text-gray-100">{{ brewer }}</p>
      <p class="text-sm text-gray-600 dark:text-gray-100">{{ location }}</p>
      <p class="text-sm text-gray-600 dark:text-gray-100 mb-4">{{ beerStyle }}</p>
      <UBadge class="mt-4 mr-4" size="sm">ABV: {{ abv }}</UBadge>
      <UBadge class="mt-4" size="sm">IBU: {{ ibu }}</UBadge>
    </div>
    <div class="w-1/3">
      <img class="w-full" :src="`/beers/${image}`" alt="beer image">
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string
  id?: number
  description?: string
  image?: string
  location?: string
  abv?: string
  ibu?: string
  brewer?: string
  beerStyle?: string
  rating?: number
  reviews?: number
}>()

// const image = useAssets(`/assets/images/${props.image}`)

console.log(props.image)

</script>