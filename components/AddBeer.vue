import type LogoVue from './svgs/Logo.vue';
<template>
  <UContainer>
    <UCard class="mx-auto max-w-[50%]">
      <h1 class="text-2xl text-stone uppercase mb-4">Add A New Beer</h1>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Brewer" name="brewer">
          <UInput v-model="state.brewer" type="brewer" />
        </UFormGroup>

        <UFormGroup label="Location" name="location">
          <UInput v-model="state.location" type="location" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
        <p v-if="state.isSuccess" class="text-small py-10">
          You have added a new beer
        </p>
      </UForm>
    </UCard>
  </UContainer>
</template>
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { useBeersStore } from "@/stores/beers";
const beerStore = useBeersStore();
const { fetchData } = beerStore; // have all non reactiave stuff here

const totalBeers = beerStore.beerCount;

const state = reactive({
  name: undefined,
  brewer: undefined,
  location: undefined,
  isSuccess: false,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: "name", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  const response = await $fetch("/api/beers", {
    method: "POST",
    body: {
      id: beerStore.beerCount + 1,
      name: state.name,
      brewer: state.brewer,
      location: state.location,
    },
  });

  if (response) {
    state.isSuccess = true;
    state.name = "";
    state.brewer = "";
    state.location = "";
  }
}
</script>
