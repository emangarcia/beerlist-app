<template>
  <template v-for="review in reviews">
    <div class="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-blue-700 dark:via-blue-800 dark:to-darker mb-8">
      <div class="relative flex items-center h-full flex-row gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-blue-900 dark:bg-opacity-60">
        <div class="">
          <div class="flex gap-x-2 mb-4">
            <UAvatar
              src="https://avatars.githubusercontent.com/u/819869?v=4"
              alt="Avatar"
            />
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white ">{{ review.reviewer }}</h4>
          </div>
          <p class="text-md italic font-medium text-gray-600 dark:text-gray-100 mb-4">Rating: {{ review.rating }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-100 mb-2">{{ review.comment }}</p>
          <UBadge class="mt-4 mr-4" size="sm">Look: {{ review.look }}</UBadge>
          <UBadge class="mt-4 mr-4" size="sm">Smell: {{ review.smell }}</UBadge>
          <UBadge class="mt-4 mr-4" size="sm">Taste: {{ review.taste }}</UBadge>
          <UBadge class="mt-4 mr-4" size="sm">Feel: {{ review.feel }}</UBadge>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
export interface Review {
  look: string
  smell: string
  taste: string
  feel: string
  rating: string
  comment: string
  reviewer: string
}
const props = defineProps<{
  reviews: Review[],
}>()

</script>