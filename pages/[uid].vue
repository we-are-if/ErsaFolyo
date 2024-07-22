<script setup>
import { usePrismic } from "@prismicio/vue";
import { components } from "~/slices";
import { useProducts } from "~/composables/useProducts";

import { useI18n } from "vue-i18n";

const prismic = usePrismic();
const route = useRoute();
const { locale } = useI18n();

const { data: page } = useAsyncData(route.params.uid, () =>
  prismic.client.getByUID("products", route.params.uid, {
    lang: locale.value,
    fetchLinks: [
      "product_catalog.background_image",
      "product_catalog.product_type",
      "product_catalog.uid",
    ],
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
