<template>
  <footer
    class="flex items-center justify-between border-t border-zinc-200 py-5"
  >
    <Logo class="!min-w-min" />

    <p>All Rights Reserved &#169; {{ new Date().getFullYear() }}</p>

    <Logo class="hidden !min-w-min opacity-0 md:block" />
  </footer>
</template>

<script setup>
import Logo from "~/components/Logo.vue";
</script>

<style scoped></style>
