<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <main
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="full-width conten-grid flex flex-col items-center gap-[19px] py-20 text-center lg:py-28"
  >
    <PrismicRichText
      :field="slice.primary.title"
      class="text-balance text-3xl font-semibold text-zinc-800 md:text-5xl lg:text-6xl"
    />
    <PrismicRichText
      :field="slice.primary.body"
      class="max-w-[45ch] text-base text-zinc-600 md:text-lg"
    />
    <div class="btn-container flex items-center justify-center gap-8 pt-[17px]">
      <PrismicLink
        v-for="(item, index) in slice.primary.cta"
        :key="index"
        :field="item.link"
        class="btn"
        :class="item.type === 'primary' ? 'btn-primary' : 'btn-secondary'"
      >
        {{ item.label }}
      </PrismicLink>
    </div>
  </main>
</template>
