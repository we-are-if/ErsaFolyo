<template>
  <footer
    class="flex items-center justify-between border-t border-zinc-200 py-5"
  >
    <PrismicLink :field="settings.data.navigation[0].link">
      <Logo class="!min-w-min" />
    </PrismicLink>

    <p>All Rights Reserved &#169; {{ new Date().getFullYear() }}</p>

    <Logo class="hidden !min-w-min opacity-0 md:block" />
  </footer>
</template>

<script setup>
import Logo from "~/components/Logo.vue";

import { useSettings } from "~/composables/useSettings";

const settings = useSettings();
</script>

<style scoped></style>
