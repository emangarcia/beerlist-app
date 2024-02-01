<template>
  <div>
    <UContainer>
      <h1 class="text-6xl dark:text-primary-400 uppercase font-semibold mb-8">
        List of Beers
      </h1>
      <div
        class="flex border border-gray-200 dark:border-gray-700 relative rounded-t-md not-prose bg-blue-50 dark:bg-gray-900"
      >
        <UTable :rows="beers" class="w-full" />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { beers } = useBeers();
</script>
