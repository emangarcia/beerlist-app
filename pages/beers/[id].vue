<template>
  <div>
    <UContainer>
      <div class="detail-header text-center mb-10 w-full">
        <h1 class="text-5xl text-white md:text-6xl  !leading-[1.15] font-bold">{{ beerData?.name }}</h1>
    </div>
      <div class="flex flex-wrap lg:max-w-[75%] mx-auto">
        <BeerDetail :name="beerData?.name" :description="beerData?.description" :image="beerData?.image" :location="beerData?.location" :abv="beerData?.abv" :ibu="beerData?.ibu" :brewer="beerData?.brewer" :beerStyle="beerData?.style" :reviews="beerData?.reviews"/>  
      </div>
      <div class="flex flex-wrap lg:max-w-[75%] mx-auto mt-8">
        <ReviewModal />
        <BeerReviews :reviews="beerData?.reviews"/>  
      </div>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { id } = useRoute().params

const beersStore = useBeersStore();
beersStore.fetchData();
const beerData = beersStore.getBeerById(Number(id));

</script>
