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
        width="1904"
        heights="1524"
        :alt="slice.primary.image.alt"
        class="aspect-square h-auto w-full object-contain xl:scale-125"
        style="clip-path: inset(5%)"
        loading="lazy"
      />
      <div class="space-y-4">
        <PrismicRichText
          v-for="(item, index) in slice.primary.body"
          :key="index"
          :field="item.paragraph"
          class="text-base text-zinc-300 md:text-lg"
        />
        <div class="flex flex-row items-center gap-6 pb-10 pt-4">
          <NuxtLink
            to="https://www.instagram.com/ersapvcfolyo/"
            target="_blank"
            class="btn flex items-end gap-3 border border-zinc-700 !text-base !text-zinc-300/90 transition-colors hover:border-zinc-500"
          >
            <Icon name="ph:instagram-logo" size="26px" />
            @ersapvcfolyo
          </NuxtLink>
          <NuxtLink
            to="https://www.facebook.com/profile.php?id=61562041239648"
            target="_blank"
            class="btn flex items-end gap-3 border border-zinc-700 !text-base !text-zinc-300/90 transition-colors hover:border-zinc-500"
          >
            <Icon name="streamline:facebook-1" size="21px" />
            @ersafolyo
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
