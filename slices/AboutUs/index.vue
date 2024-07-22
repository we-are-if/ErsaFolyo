<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AboutUsSlice>([
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
    class="full-width content-grid space-y-16 rounded-t-[32px] bg-zinc-800 pt-20 lg:pt-28"
    id="about-us"
  >
    <PrismicRichText
      :field="slice.primary.title"
      class="mx-auto max-w-[25ch] text-balance text-center text-3xl font-semibold text-zinc-50 lg:text-5xl"
    />
    <div class="grid items-center md:grid-cols-2">
      <PrismicImage
        :field="slice.primary.image"
        :width="slice.primary.image.dimensions?.width"
        :heights="slice.primary.image.dimensions?.height"
        :alt="slice.primary.image.alt"
      />
      <div class="space-y-4">
        <PrismicRichText
          v-for="(item, index) in slice.primary.body"
          :key="index"
          :field="item.paragraph"
          class="text-base text-zinc-300 md:text-lg"
        />
      </div>
    </div>
  </section>
</template>
