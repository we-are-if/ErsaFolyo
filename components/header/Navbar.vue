<template>
  <nav class="nav-main hidden min-w-fit items-center gap-1.5 md:flex">
    <PrismicLink
      v-for="navItem in settings.data.navigation"
      :key="navItem.link.url"
      :field="navItem.link"
      class="btn nav-item relative transition-colors hover:bg-zinc-100"
    >
      {{ navItem.label }}
    </PrismicLink>
  </nav>
</template>

<script setup>
import { useSettings } from "~/composables/useSettings";

const settings = useSettings();
</script>

<style scoped>
.nav-item:not(:last-child)::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 12px;
  background-color: theme("colors.zinc.400");
  right: -4px;
}
</style>
