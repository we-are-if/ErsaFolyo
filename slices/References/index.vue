<script setup lang="ts">
import { type Content } from "@prismicio/client";

import LogoMarquee from "~/components/LogoMarquee.vue";
import LogoContainer from "~/components/LogoContainer.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ReferencesSlice>([
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
    class="full-width content-grid space-y-16 py-20 lg:py-28"
    id="references"
  >
    <PrismicRichText
      :field="slice.primary.title"
      class="text-center text-3xl font-semibold text-zinc-800 md:text-5xl"
    />
    <LogoMarquee>
      <LogoContainer
        v-for="item in slice.primary.images"
        :key="item.singleimage"
      >
        <PrismicImage :field="item.singleimage" />
      </LogoContainer>
    </LogoMarquee>
  </section>
</template>
