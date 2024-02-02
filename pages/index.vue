<template>
  <div>
    <UContainer class="overflow-hidden">
      <Hero title="A New Way to Review Beers" intro="Odio incidunt nam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!" :img="heroImage">
        <template v-slot:ctas>
          <NuxtLink to="/beers" class="cta text-center bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold flex items-center"><span class="text-white ">View Beers</span></NuxtLink>
          <NuxtLink to="/beers/add" class="border border-white cta text-cente px-3 py-2 rounded text-white font-semibold flex items-center hover:border-blue-600"><UIcon name="i-heroicons-plus-circle mr-2" /><span class="text-white">Add Beers</span></NuxtLink>
        </template>
      </Hero>

      <div class="recent md:mt-24 max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div class="my-20 md:my-32">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-3xl">View Recent Beers</h3>
          <div class="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <template v-for="item in latestBeers">
              <BeerTile
                :name="item.name"
                :id=item.id
                :image="item.image"
                :brewer="item.brewer"
                :location="item.location"
                :beerStyle="item.style"
                :abv="item.abv"
                :ibu="item.ibu"              
                v-bind="$attrs"
              ></BeerTile>
            </template>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import heroImage from '../assets/images/beer-820011_1920.jpg';

const { beers, allBeers } = useBeers();

const latestBeers = allBeers.slice(-4);
</script>
