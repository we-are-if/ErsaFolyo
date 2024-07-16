<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home"),
);

useHead({
  title: page.value?.data.meta_title ?? "",
  description: page.value?.data.meta_description ?? "",
  OGImage: page.value?.data.og_image,
});
</script>

<template>
  <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>
