<template>
  <nav class="nav-main hidden min-w-fit items-center gap-1.5 md:flex">
    <NuxtLink
      v-for="navItem in currentNavLinks.slice(0, currentNavLinks.length - 1)"
      :key="navItem.slug"
      :to="localePath(navItem.slug)"
      class="btn nav-item relative transition-colors hover:bg-zinc-100"
    >
      {{ navItem.label }}
    </NuxtLink>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n"; // Adjust according to your i18n setup
import navLinks from "~/data/navLinks.json";
import navLinksTR from "~/data/navLinksTR.json";

const { locale } = useI18n();
const localePath = useLocalePath();

const currentNavLinks = computed(() => {
  return locale.value === "tr" ? navLinksTR : navLinks;
});
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
