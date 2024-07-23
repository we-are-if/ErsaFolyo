<script setup lang="ts">
import { type Content } from "@prismicio/client";

// Define props
const props = defineProps(
  getSliceComponentProps<Content.SingleProductSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// Destructure slice from props
const { slice } = props;

// Access title
const title = slice.primary.title;

// Form handling *start*
const form = ref({
  access_key: "e7a21026-f446-4679-ae7b-02510259d799",
  subject: `Someone is inquiring about ${title[0].text} product on the 'Ersa Folyo' website.`,
  email: "",
});

const result = ref("");
const status = ref("");
const imageIndex = ref(0);

const submitForm = async () => {
  try {
    status.value = "loading";
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form.value,
    });

    console.log(response); // Log the entire response object for debugging

    result.value = response.message;
    if (response.status === 200 || response.success) {
      status.value = "success";
      alert("Form submitted successfully");

      // Reset form fields after successful submission
      form.value.email = "";

      // Clear result and status for UI feedback
      result.value = "";
      status.value = "";
    } else {
      console.error(response); // Log the response in case of non-200 status
      status.value = "error";
    }
  } catch (error) {
    console.error(error); // Log any unexpected errors
    status.value = "error";
    result.value = "Something went wrong!";
  }
};

// Form handling *end*

// Change image
const handleClick = (index) => {
  imageIndex.value = index;
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="grid gap-8 py-20 md:py-28 lg:grid-cols-2"
  >
    <div class="sticky-container">
      <PrismicImage
        v-for="image in slice.primary.image_list.slice(
          imageIndex,
          imageIndex + 1,
        )"
        :key="image.image"
        :field="image.image"
        :width="image.image.dimensions?.width"
        :heights="image.image.dimensions?.height"
        :alt="image.image.alt"
        class="custom-shadow relative aspect-square h-auto min-w-full overflow-clip rounded-sm object-cover"
      />
      <p
        class="absolute left-8 top-8 text-3xl font-bold text-zinc-50 lg:text-5xl"
        v-for="image in slice.primary.image_list.slice(
          imageIndex,
          imageIndex + 1,
        )"
        :key="image.image.id"
      >
        {{ image.image.alt }}
      </p>
    </div>
    <div class="space-y-16 py-1">
      <div class="space-y-3">
        <PrismicRichText
          :field="slice.primary.title"
          class="max-w-[35ch] text-balance text-3xl font-semibold text-zinc-800 md:text-5xl"
        />
      </div>

      <div class="flex flex-wrap gap-4">
        <div
          v-for="(item, index) in slice.primary.image_list"
          :key="index"
          class="size-20 overflow-clip rounded-full border border-zinc-200 p-2"
        >
          <PrismicImage
            :field="item.image"
            :width="item.image.dimensions?.width"
            :heights="item.image.dimensions?.height"
            :alt="item.image.alt"
            class="custom-shadow aspect-square h-auto min-w-full cursor-pointer rounded-full object-cover"
            @click="handleClick(index)"
          />
        </div>
      </div>
      <div v-for="item in slice.primary.product_description" :key="item.title">
        <PrismicRichText
          :field="item.title"
          class="text-3xl font-semibold text-zinc-800"
          ref="label"
        />
        <PrismicRichText
          :field="item.description"
          class="text-pretty pt-4 text-lg text-zinc-600"
        />
      </div>
      <form
        class="flex flex-col items-start gap-8"
        @submit.prevent="submitForm"
      >
        <h3 class="text-2xl font-semibold text-zinc-800">
          {{ slice.primary.want_to_know_more_title }}
        </h3>
        <div class="flex min-w-full flex-col gap-2">
          <label for="email" class="text-base font-medium text-zinc-600">{{
            slice.primary.email
          }}</label>
          <input
            type="email"
            id="email"
            class="min-h-12 w-full rounded-sm border border-zinc-200 px-4 outline-none focus:outline-1 focus:outline-zinc-500"
            v-model="form.email"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-full">
          {{ slice.primary.submit_button_text }}
        </button>
      </form>
    </div>
  </section>
</template>
<style scoped>
@media (min-width: 1024px) {
  .sticky-container {
    position: -webkit-sticky;
    position: sticky;
    top: 200px; /* Adjust this value as needed */
    align-self: start; /* Make sure it sticks to the top */
  }
}
</style>
