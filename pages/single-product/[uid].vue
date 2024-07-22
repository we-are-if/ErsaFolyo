<script setup>
import { usePrismic } from "@prismicio/vue";
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { locale } = useI18n();

const { data: page } = useAsyncData(route.params.uid, () =>
  prismic.client.getByUID("singleproduct", route.params.uid, {
    lang: locale.value,
  }),
);
</script>

<template>
  <div>
    <SliceZone
      :slices="page?.data.slices ?? []"
      :components="components"
      wrapper="main"
    />
  </div>
</template>
