<template>
  <header
    class="full-width content-grid sticky left-0 right-0 top-0 z-50 border-b border-zinc-200 py-4"
  >
    <div class="flex items-center justify-between">
      <NuxtLink :to="localePath('/')">
        <Logo />
      </NuxtLink>

      <Navbar />
      <div class="lang-select flex items-center gap-4">
        <NuxtLink
          v-for="{ code, name } in locales"
          :key="code"
          :to="switchLocalePath(code)"
          class="text-sm font-medium text-zinc-600"
        >
          {{ name }}
        </NuxtLink>

        <div class="decorative h-3 w-px bg-zinc-400" aria-hidden="true" />
        <NuxtLink
          v-for="item in currentNavLinks.slice(-1)"
          :key="item.slug"
          :to="localePath(item.slug)"
          class="btn btn-primary"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import Navbar from "./Navbar.vue";

import navLinks from "~/data/navLinks.json";
import navLinksTR from "~/data/navLinksTR.json";

const { locale, locales } = useI18n();
const localePath = useLocalePath();

const currentNavLinks = computed(() => {
  return locale.value === "tr" ? navLinksTR : navLinks;
});
</script>
<style scoped>
header {
  background:
    url("~/assets/noise.png") repeat,
    theme("colors.white");
}
</style>
