<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactFormSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// Form handling *start*
const form = ref({
  access_key: "e7a21026-f446-4679-ae7b-02510259d799",
  subject: "Someone is inquiring about an 'Ersa Folyo' product.",
  fname: "",
  lname: "",
  phone: "",
  email: "",
  message: "",
});

const result = ref("");
const status = ref("");

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
      form.value.fname = "";
      form.value.lname = "";
      form.value.phone = "";
      form.value.email = "";
      form.value.message = "";

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
</script>

<template>
  <main
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="grid gap-10 py-20 lg:grid-cols-2 lg:py-28"
  >
    <PrismicImage
      :field="slice.primary.form_image"
      :width="slice.primary.form_image.dimensions?.width"
      :heights="slice.primary.form_image.dimensions?.height"
      :alt="slice.primary.form_image.alt"
      class="custom-shadow hidden h-auto min-h-full w-full rounded-md object-cover lg:block"
    />
    <div class="form-container space-y-16 py-4">
      <div class="space-y-4">
        <div class="form-title space-y-3">
          <PrismicRichText
            :field="slice.primary.form_title"
            class="text-3xl font-semibold text-zinc-800 lg:text-5xl"
          />
          <PrismicRichText
            :field="slice.primary.form_subtitle"
            class="text-base text-zinc-600 lg:text-xl"
          />
        </div>
        <div class="direct-contact flex flex-col items-start gap-3">
          <NuxtLink
            to="mailto:info@ersafolyo.com"
            class="text-base font-semibold text-primary-700 lg:text-xl"
          >
            info@ersafolyo.com
          </NuxtLink>
          <NuxtLink
            to="tel:+905332815488"
            class="text-base font-semibold text-primary-700 lg:text-xl"
          >
            +90 533 281 5488
          </NuxtLink>
        </div>
      </div>
      <form class="space-y-6" @submit.prevent="submitForm">
        <div class="flex flex-col items-center gap-6 md:flex-row">
          <div class="flex w-full flex-col items-start gap-1.5">
            <label for="fname">{{ slice.primary.first_name }}</label>
            <input type="text" id="fname" v-model="form.fname" required />
          </div>
          <div class="flex w-full flex-col items-start gap-1.5">
            <label for="lname">{{ slice.primary.last_name }}</label>
            <input type="text" id="lname" v-model="form.lname" required />
          </div>
        </div>
        <div class="flex flex-col items-start gap-1.5">
          <label for="email">{{ slice.primary.email }}</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="flex flex-col items-start gap-1.5">
          <label for="phoneNumber">{{ slice.primary.phone_number }}</label>
          <input type="number" id="phoneNumber" v-model="form.phone" />
        </div>
        <div class="flex flex-col items-start gap-1.5">
          <label for="message">{{ slice.primary.message }}</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
label {
  font-size: theme("fontSize.xl");
  color: theme("colors.zinc.800");
}

input,
textarea {
  border: 1px solid theme("colors.zinc.200");
  border-radius: 2px;
  min-width: 100%;
  min-height: theme("spacing.12");
  padding-inline: theme("spacing.4");
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 1.5px solid theme("colors.zinc.600");
}

textarea {
  min-height: 7.5rem;
  padding-top: theme("spacing.4");
}
</style>
