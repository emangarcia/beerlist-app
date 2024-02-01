<template>
  <div>
    <UContainer>
      <!-- <h1 class="text-primary-500 dark:text-primary-400">Beers:</h1> -->
      <!-- <template v-for="beer in beers" :key="beer.id">
        <div>
          <h2 class="text-">{{ beer.name }}</h2>
        </div>
      </template> -->
      <div
        class="flex border border-gray-200 dark:border-gray-700 relative rounded-t-md not-prose bg-white dark:bg-gray-900"
      >
        <UTable :rows="beers" class="w-full" />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useBeersStore } from "@/stores/beers";
import { storeToRefs } from "pinia";

const beersStore = useBeersStore();
const { fetchBeers } = beersStore; // have all non reactiave stuff here
const { beers } = storeToRefs(beersStore); // have all reactive states here

await fetchBeers();
</script>
