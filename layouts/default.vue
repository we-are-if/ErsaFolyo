<template>
  <div class="main-wrapper content-grid min-h-[100dvh]">
    <MainHeader />
    <slot />
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from "~/components/header/MainHeader.vue";
import MainFooter from "~/components/Footer/MainFooter.vue";
// global css file
import "../assets/css/main.css";
</script>

<style>
body {
  background:
    url("~/assets/noise.png") repeat,
    theme("colors.white");
}
</style>
