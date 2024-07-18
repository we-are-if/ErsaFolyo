<template>
  <footer
    class="flex items-center justify-between border-t border-zinc-200 py-5"
  >
    <NuxtLink :to="localePath('/')">
      <Logo class="!min-w-min" />
    </NuxtLink>

    <p>
      {{ locale === "en-us" ? "All Rights Reserved" : "Tüm Hakları Saklıdır" }}
      &#169;
      {{ new Date().getFullYear() }}
    </p>

    <Logo class="hidden !min-w-min opacity-0 md:block" />
  </footer>
</template>

<script setup>
import Logo from "~/components/Logo.vue";

const localePath = useLocalePath();

const { locale } = useI18n();
</script>

<style scoped></style>
