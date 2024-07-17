<script setup lang="ts">
import { type Content } from "@prismicio/client";

// components import
import ImageSlider from "~/components/ImageSlider.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ApplicationsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="full-width content-grid"
    id="applications"
  >
    <ImageSlider :slideContent="slice.primary.application" />
  </section>
</template>
