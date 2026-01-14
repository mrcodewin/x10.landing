<template lang="pug">
  section.profitability
    .profitability__container
      h3.profitability__title Доходность сигналов

      .profitability__slider
        Swiper.profitability__swiper(
          :modules="modules"
          :loop="true"
          :space-between="30"
          :slides-per-view="3"
          :centered-slides="true"
          :breakpoints="swiperBreakpoints"
          :pagination="{ clickable: true }"
        )
          SwiperSlide.profitability__slide(
            v-for="slide in slides"
            :key="slide.id"
          )
            .profitability__card
              img.profitability__image(
                :src="slide.src"
                :alt="slide.alt"
              )
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

const baseSlides = [
  { id: 0, src: '/images/profitability/pro1.jpg', alt: 'Доходность сигнала 1' },
  { id: 1, src: '/images/profitability/pro2.jpg', alt: 'Доходность сигнала 2' },
  { id: 2, src: '/images/profitability/pro3.jpg', alt: 'Доходность сигнала 3' },
  { id: 3, src: '/images/profitability/pro4.jpg', alt: 'Доходность сигнала 4' },
  { id: 4, src: '/images/profitability/pro5.jpg', alt: 'Доходность сигнала 5' },
  { id: 5, src: '/images/profitability/pro6.jpg', alt: 'Доходность сигнала 6' },
  { id: 6, src: '/images/profitability/pro7.jpg', alt: 'Доходность сигнала 7' },
  { id: 7, src: '/images/profitability/pro8.jpg', alt: 'Доходность сигнала 8' },
]

const slides = [
  ...baseSlides,
  ...baseSlides.map((slide, index) => ({ ...slide, id: baseSlides.length + index })),
]

const swiperBreakpoints = {
  1800: {
    slidesPerView: 3,
    spaceBetween: 32,
    centeredSlides: true,
  },
  1400: {
    slidesPerView: 2.6,
    spaceBetween: 28,
    centeredSlides: true,
  },
  1100: {
    slidesPerView: 2.2,
    spaceBetween: 24,
    centeredSlides: true,
  },
  900: {
    slidesPerView: 1.8,
    spaceBetween: 20,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 1.4,
    spaceBetween: 16,
    centeredSlides: true,
  },
  480: {
    slidesPerView: 1.2,
    spaceBetween: 14,
    centeredSlides: true,
  },
  360: {
    slidesPerView: 1.1,
    spaceBetween: 12,
    centeredSlides: true,
  },
  0: {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
  },
}
</script>

<style lang="scss" scoped src="./profitability.scss"></style>
