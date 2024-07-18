<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactUsSlice>([
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
    class="relative z-50 -mt-20 mb-20 flex aspect-[2.78] min-w-full flex-col items-center justify-center overflow-clip rounded-sm lg:-mt-28 lg:mb-28"
  >
    <PrismicImage
      :field="slice.primary.bg_image"
      :width="slice.primary.bg_image.dimensions?.width"
      :heights="slice.primary.bg_image.dimensions?.height"
      :alt="slice.primary.bg_image.alt"
      class="absolute inset-0 -z-10 block min-h-full min-w-full brightness-75"
    />
    <div class="flex flex-col items-center justify-center gap-8">
      <PrismicRichText
        :field="slice.primary.title"
        class="text-balance text-center text-3xl font-semibold text-white md:text-5xl"
      />
      <PrismicLink
        v-for="item in slice.primary.cta_button"
        :field="item.link"
        :key="item.label"
        class="btn btn-primary max-w-min scale-[1.3]"
      >
        {{ item.label }}
      </PrismicLink>
    </div>
  </section>
</template>

<style scoped>
section {
  box-shadow:
    0px 0.1px 0.9px rgba(0, 0, 0, 0.028),
    0.1px 0.3px 2.1px rgba(0, 0, 0, 0.04),
    0.1px 0.6px 3.9px rgba(0, 0, 0, 0.05),
    0.2px 1.1px 6.9px rgba(0, 0, 0, 0.06),
    0.4px 2.1px 13px rgba(0, 0, 0, 0.072),
    1px 5px 31px rgba(0, 0, 0, 0.1);
}
</style>
