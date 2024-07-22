<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SubProductSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const localePath = useLocalePath();
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="grid gap-8 py-20 md:grid-cols-2 lg:py-28"
  >
    <NuxtLink
      v-for="item in slice.primary.sub_product"
      :key="item.title"
      class="group block aspect-square"
    >
      <article
        class="custom-shadow relative flex aspect-square items-end overflow-clip rounded-sm p-6 md:p-8"
      >
        <PrismicRichText
          :field="item.title"
          class="z-10 text-balance text-3xl font-semibold text-white group-hover:underline md:text-4xl"
        />

        <PrismicImage
          :field="item.background_image"
          :width="item.background_image.dimensions?.width"
          :heights="item.background_image.dimensions?.height"
          :alt="item.background_image.alt"
          class="absolute inset-0 block aspect-square h-auto min-w-full brightness-75"
        />
      </article>
    </NuxtLink>
  </section>
</template>
