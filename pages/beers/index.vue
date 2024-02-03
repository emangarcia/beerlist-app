<template>
  <div>
    <UContainer>
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5">
          <h2 class="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">View All The Beers</h2>
          <p class="mt-4 text-center text-gray-600 dark:text-gray-300">Repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.</p>
        </div>

        <div class="block mt-16 mb-6">
          <UInput color="primary" variant="outline" v-model="search" placeholder="Filter beers..." />
        </div>
        
        <div
          class="flex rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-blue-700 dark:via-blue-800 dark:to-blue-900"
        >
          <UTable :rows="filteredRows" :columns="columns" @select="select" class="w-full" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const { beers, allBeers } = useBeers();

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name'
}, {
  key: 'brewer',
  label: 'Brewery'
}, {
  key: 'location',
  label: 'Location'
}, {
  key: 'abv',
  label: 'ABV'
}, {
  key: 'ibu',
  label: 'IBU'
}]

const search = ref('')

const filteredRows = computed(() => {
  if (!search.value) {
    return allBeers
  }

  return allBeers.filter((beer) => {
    return Object.values(beer).some((value) => {
      return String(value).toLowerCase().includes(search.value.toLowerCase())
    })
  })
})

function select(row) {
  selected.value = row

  router.push(`/beers/${row.id}`)
}

const selected = ref([])


</script>
