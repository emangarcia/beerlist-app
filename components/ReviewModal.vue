<template>
<div>
  <UButton
    @click="reviewOpen = true"
    class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold flex items-center mb-8"
    ><UIcon name="i-heroicons-plus-circle mr-2" />Add A Review</UButton>

  <UModal v-model="reviewOpen">
    <div class="p-4">
      <h2 class="text-lg text-stone mb-8 font-semibold">Add A Review</h2>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Name" name="name" size="lg">
          <UInput v-model="state.name" color="primary" variant="outline"  />
        </UFormGroup>

        <UFormGroup label="Look" name="look" size="lg">
          <URange v-model="state.look" name="look" :min="0" :max="50" />
          <p class="absolute right-0 mt-1 text-xs text-gray-600 dark:text-gray-300">{{ state.look / 10 }} / 5</p>
        </UFormGroup>

        <UFormGroup label="Smell" name="smell" size="lg">
          <URange v-model="state.smell" name="smell" :min="0" :max="50" />
          <p class="absolute right-0 mt-1 text-xs text-gray-600 dark:text-gray-300">{{ state.smell / 10 }} / 5</p>
        </UFormGroup>

        <UFormGroup label="Taste" name="taste" size="lg">
          <URange v-model="state.taste" name="taste" :min="0" :max="50" />
          <p class="absolute right-0 mt-1 text-xs text-gray-600 dark:text-gray-300">{{ state.taste / 10 }} / 5</p>
        </UFormGroup>

        <UFormGroup label="Feel" name="feel" size="lg">
          <URange v-model="state.feel" name="feel" :min="0" :max="50" />
          <p class="absolute right-0 mt-1 text-xs text-gray-600 dark:text-gray-300">{{ state.feel / 10 }} / 5</p>
        </UFormGroup>

        <UFormGroup label="Review" name="review" size="lg">
          <UTextarea v-model="state.review" type="review" color="primary" variant="outline" />
        </UFormGroup>

        <UButton type="submit" size="xl"> Submit </UButton>
        <p v-if="state.isSuccess" class="text-small py-2 font-semibold text-primary">
          You have added a new review!
        </p>
      </UForm>
    </div>
  </UModal>
</div>
</template>
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const reviewOpen = ref(false)

const state = reactive({
  name: '',
  look: 0,
  smell: 0,
  taste: 0,
  feel: 0,
  rating: 0,
  review: undefined,
  isSuccess: false,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: "name", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // TODO: Add in logic to submit the review to the API
  
  state.isSuccess = true;
  state.name = '';
  state.look = 0;
  state.smell = 0;
  state.taste = 0;
  state.feel = 0;
  state.review = undefined;
  reviewOpen.value = false;
}

</script>