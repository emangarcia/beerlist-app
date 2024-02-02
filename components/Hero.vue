<template>
<div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0 ">
  <div class="relative ml-auto pt-10">
    <div class="gap-12 md:flex md:items-center">
      <div class="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
        <h1 class="text-5xl text-white md:text-6xl  !leading-[1.15] font-bold">{{ title }}</h1>
        <div>
          <p class="mt-8 text-lg text-white">{{ intro }}</p>
          <div class="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
            <slot name="ctas"></slot>
          </div>
        </div>
      </div>
      <div class="relative mt-20 md:mt-0 md:w-2/5 lg:w-1/2">
        <div class="-ml-6 md:-mr-20 lg:mr-0">
          <img class="max-md:max-w-[75%] max-md:mx-auto max-md:aspect-[1/1] h-full object-cover object-left block saturate-[0.05]" :src="img" alt="beers" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">

// Simple example w/ Options API
export default {
  props: {
    title: String,
    intro: String,
    img: String
  },
  mounted() {
    console.log('hero mounted')
  }
}
</script>
