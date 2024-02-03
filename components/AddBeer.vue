<template>
  <UContainer>
    <div class="lg:flex lg:gap-x-8">
      <UCard class="mx-auto w-2/3 shadow-lg bg-blue-900" :ui="{ ring: 'ring-1 dark:ring-blue-800', background: 'dark:bg-blue-900 dark:bg-opacity-50' }">
        <h1 class="text-2xl text-stone mb-8 font-semibold">Add A New Beer</h1>
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Name" name="name" size="lg">
            <UInput v-model="state.name" color="primary" variant="outline"  />
          </UFormGroup>

          <UFormGroup label="Brewery" name="brewer" size="lg">
            <UInput v-model="state.brewer" type="brewer" color="primary" variant="outline" />
          </UFormGroup>

          <UFormGroup label="Location" name="location" size="lg">
            <UInput v-model="state.location" type="location" color="primary" variant="outline" />
          </UFormGroup>

          <UFormGroup label="Style" name="style" size="lg">
            <UInput v-model="state.style" type="style" color="primary" variant="outline" />
          </UFormGroup>


          <UFormGroup label="ABV" name="abv" size="lg">
            <UInput v-model="state.abv" type="abv" color="primary" variant="outline">
              <template #trailing>
                <span class="text-gray-500 dark:text-white text-xs">%</span>
              </template>
            </UInput>
          </UFormGroup>

          <UFormGroup label="IBU" name="ibu" size="lg">
            <UInput v-model="state.ibu" type="ibu" color="primary" variant="outline" />
          </UFormGroup>

          <UFormGroup label="Description" name="description" size="lg">
            <UTextarea v-model="state.description" type="description" color="primary" variant="outline" />
          </UFormGroup>

          <UButton type="submit" size="xl"> Submit </UButton>
          <p v-if="state.isSuccess" class="text-small py-10 font-semibold text-primary">
            You have added a new beer!
          </p>
        </UForm>
      </UCard>
      <div class="relative mx-auto max-lg:mt-12 max-lg:w-2/3 lg:w-1/3">
        <BeerPreview
          :name="state.name"
          :brewer="state.brewer"
          :location="state.location"
          :beerStyle="state.style"
          :abv="abvWPercentage"
          :ibu="state.ibu"   
          :image="randomImage"           
          v-bind="$attrs"
        ></BeerPreview>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { useBeersStore } from "@/stores/beers";

const beerStore = useBeersStore();
const { fetchData } = beerStore;

const state = reactive({
  name: '',
  brewer: undefined,
  location: undefined,
  abv: undefined,
  ibu: undefined,
  style: undefined,
  description: undefined,
  isSuccess: false,
});

const abvWPercentage = computed(() => {
  let abv = state.abv;
  if (abv === undefined) return ;
  return `${state.abv}%`;
})

const randomImage = computed(() => {
  return `beer${Math.floor(Math.random() * 4) + 1}.png`;
})

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: "name", message: "Required" });
  if (!state.brewer) errors.push({ path: "brewer", message: "Required" });
  if (!state.location) errors.push({ path: "location", message: "Required" });
  if (!state.style) errors.push({ path: "style", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  const response = await $fetch("/api/beers", {
    method: "POST",
    body: {
      id: beerStore.beerCount + 1,
      name: state.name,
      brewer: state.brewer,
      style: state.style,
      location: state.location,
      description: state.description,
      abv: state.abv + `%`,
      ibu: state.ibu,
      image: randomImage.value,
    },
  });
  
  if (response) {
    beerStore.fetchData();
    state.isSuccess = true;
    state.name = '';
    state.brewer = undefined;
    state.location = undefined;
    state.description = undefined;
    state.style = undefined;
    state.abv = undefined;
    state.ibu = undefined;
  }
}
</script>
