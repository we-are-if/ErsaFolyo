<template>
  <div class="scroller mx-auto max-w-full overflow-hidden">
    <ul class="logo-list scroller__inner flex w-max gap-8" ref="scrollerInner">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from "vue";

const scrollerInner = ref(null);

onMounted(() => {
  const scrollerInnerContent = Array.from(scrollerInner.value.children);
  const fragment = document.createDocumentFragment();
  scrollerInnerContent.forEach((item) => {
    const duplicateItem = item.cloneNode(true);
    duplicateItem.setAttribute("aria-hidden", "true");
    fragment.appendChild(duplicateItem);
  });
  scrollerInner.value.appendChild(fragment);
});
</script>

<style scoped>
.scroller {
  --mask-color: theme("colors.zinc.100");
  mask: linear-gradient(
    90deg,
    transparent,
    var(--mask-color, #333) 20%,
    var(--mask-color, #333) 80%,
    transparent
  );
  direction: ltr !important;
}

.scroller__inner {
  animation: scroll 40s linear infinite forwards;
  display: flex;
  will-change: transform;
}

@keyframes scroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(calc(-50% - 0.5rem), 0, 0);
  }
}
</style>
