<template>
  <swiper-container
    class="full-width overflow-hidden"
    id="swiper-1"
    init="false"
  >
    <swiper-slide
      v-for="(item, index) in slideContent"
      :key="index"
      class="w-fit overflow-hidden rounded-sm"
      id="swiper-slide"
    >
      <div
        class="relative flex aspect-video min-w-full items-end object-cover p-6 md:p-8"
      >
        <PrismicImage
          :field="item.bg_image"
          :width="item.bg_image.dimensions?.width"
          :heights="item.bg_image.dimensions?.height"
          :alt="item.bg_image.alt"
          class="absolute inset-0 block min-h-full min-w-full brightness-75"
          loading="lazy"
        />
        <PrismicRichText
          :field="item.title"
          class="z-50 text-balance text-xl font-semibold text-white md:text-4xl"
        />
      </div>
    </swiper-slide>
  </swiper-container>

  <div
    class="swiper-pagination flex items-center justify-center px-4 py-8"
  ></div>
</template>

<script setup>
import { register } from "swiper/element/bundle";

const props = defineProps({
  slideContent: {
    type: Array,
    required: true,
  },
});

register();

const isAutoPlaying = ref(true);
let swiperInstance = null;

const swiperParams = {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 32,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => `<span class="${className}"></span>`,
  },
  keyboard: { enabled: true },
  breakpoints: {
    1536: {
      slidesPerView: 1.5,
    },
  },
  on: {
    slideChange() {
      const swiperEl = document.querySelector("swiper-container");
      if (swiperEl.swiper.isEnd) {
        swiperEl.swiper.autoplay.stop();
      }
    },
  },
};

const toggleAutoPlay = () => {
  if (!swiperInstance) return;

  if (isAutoPlaying.value) {
    swiperInstance.autoplay.stop();
    isAutoPlaying.value = false;
  } else {
    swiperInstance.autoplay.start();
    isAutoPlaying.value = true;
  }
};

onMounted(() => {
  const swiperEl = document.querySelector("swiper-container");
  Object.assign(swiperEl, swiperParams);
  swiperEl.initialize();
  swiperInstance = swiperEl.swiper;

  swiperInstance.on("reachEnd", () => {
    if (swiperInstance.autoplay.running) {
      swiperInstance.autoplay.stop();
      isAutoPlaying.value = false;
    }
  });
});
</script>

<style scoped>
#swiper-1 {
  max-width: calc(100% - 2rem);
  transition: transform 0.6s cubic-bezier(0.73, -0.01, 0.83, 0.67);
  direction: ltr !important;
}

#swiper-slide {
  box-shadow:
    0px 0.1px 0.9px rgba(0, 0, 0, 0.028),
    0.1px 0.3px 2.1px rgba(0, 0, 0, 0.04),
    0.1px 0.6px 3.9px rgba(0, 0, 0, 0.05),
    0.2px 1.1px 6.9px rgba(0, 0, 0, 0.06),
    0.4px 2.1px 13px rgba(0, 0, 0, 0.072),
    1px 5px 31px rgba(0, 0, 0, 0.1);
}

:global(.swiper-pagination-bullet) {
  width: theme("spacing.2");
  height: theme("spacing.2");
  margin-inline: theme("spacing.2");
  border-radius: 100%;
  cursor: pointer;
  background: theme("colors.zinc.300");
}

:global(.swiper-pagination-bullet-active) {
  background: theme("colors.zinc.900");
}

@media screen and (min-width: 768px) {
  #swiper-1 {
    max-width: calc(100% - 4rem);
  }
}

@media screen and (min-width: 1280px) {
  #swiper-1 {
    max-width: 1216px;
  }
}

@media screen and (min-width: 1536px) {
  #swiper-1 {
    max-width: calc(100% - 4rem);
  }
}
</style>
