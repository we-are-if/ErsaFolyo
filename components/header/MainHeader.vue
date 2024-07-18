<template>
  <header
    class="full-width content-grid sticky left-0 right-0 top-0 z-50 border-b border-zinc-200 py-4"
  >
    <div class="flex items-center justify-between">
      <PrismicLink :field="settings.data.navigation[0].link">
        <Logo />
      </PrismicLink>

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
        <PrismicLink
          v-for="item in settings.data.contact_us"
          :key="item.label"
          :field="item.link"
          class="btn btn-primary"
        >
          {{ item.label }}
        </PrismicLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import { useSettings } from "~/composables/useSettings";

const settings = useSettings();

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
header {
  background:
    url("~/assets/noise.png") repeat,
    theme("colors.white");
}
</style>
