<script setup lang="ts">
import { type Content } from "@prismicio/client";

const localePath = useLocalePath();

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
      <NuxtLink
        v-for="(item, index) in slice.primary.cta.slice(0, 1)"
        :key="index"
        :to="localePath('/contact-us')"
        class="btn btn-primary"
      >
        {{ item.label }}
      </NuxtLink>
      <NuxtLink
        v-for="(item, index) in slice.primary.cta.slice(-1)"
        :key="index"
        :to="localePath('/contact-us')"
        class="btn btn-secondary"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </main>
</template>
