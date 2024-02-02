<template>
  <UContainer>
    <UCard class="mx-auto max-w-[65%] shadow-lg bg-blue-900">
      <h1 class="text-primary-500 dark:text-primary-400">Beer Name</h1>
      <!-- <template v-for="beer in beers" :key="beer.id">
        <div>
          <h2 class="text-">{{ beer.name }}</h2>
        </div>
      </template> -->
      <div
        class="flex border border-gray-200 dark:border-gray-700 relative rounded-t-md not-prose bg-white dark:bg-gray-900"
      >
        <!-- <UTable :rows="beers" class="w-full" /> -->
      </div>
    </UCard>
  </UContainer>
</template>
<script setup lang="ts">
const route = useRoute()

const { id } = useRoute().params
console.log(id)

const beersStore = useBeersStore();
beersStore.fetchBeer(id);
const { beer } = storeToRefs(beersStore);
// const beerData = beersStore.getBeer(id);

console.log(beer)

</script>
