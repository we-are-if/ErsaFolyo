<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProductCatalogSlice>([
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
    :class="{
      'full-width content-grid -mt-[1px] space-y-16 bg-zinc-800 pb-[10rem] pt-20 md:pb-[14rem] md:pt-28':
        slice.variation === 'default',
      'space-y-16 py-20 lg:py-28': slice.variation !== 'default',
    }"
  >
    <PrismicRichText
      :field="slice.primary.section_title"
      class="max-w-[34ch] text-balance text-3xl font-semibold text-zinc-100 md:text-5xl"
    />
    <div class="grid gap-8 md:grid-cols-2" id="product-catalog">
      <NuxtLink
        v-for="item in slice.primary.products"
        :key="item.product.id"
        :to="localePath(`/${item.product.uid}`)"
        class="group block aspect-square"
      >
        <article
          class="custom-shadow relative flex aspect-square items-end overflow-clip rounded-sm p-6 md:p-8"
        >
          <PrismicRichText
            :field="item.product.data.product_type"
            class="z-10 text-3xl font-semibold text-white group-hover:underline"
          />

          <PrismicImage
            :field="item.product.data.background_image"
            :width="item.product.data.background_image.dimensions?.width"
            :heights="item.product.data.background_image.dimensions?.height"
            :alt="item.product.data.background_image.alt"
            class="absolute inset-0 block aspect-square h-auto min-w-full brightness-75"
          />
        </article>
      </NuxtLink>
    </div>
  </section>
</template>
