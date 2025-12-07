<template lang="pug">
  section.profitability
    .profitability__container.container
      h3.profitability__title Доходность сигналов

      .profitability__slider
        Swiper.profitability__swiper(
          :modules="modules"
          :loop="true"
          :space-between="40"
          :slides-per-view="1"
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

const slides = [
  { id: 0, src: '/images/profitability/pro1.jpg', alt: 'Доходность сигнала 1' },
  { id: 1, src: '/images/profitability/pro2.jpg', alt: 'Доходность сигнала 2' },
  { id: 2, src: '/images/profitability/pro1.jpg', alt: 'Доходность сигнала 3' },
  { id: 3, src: '/images/profitability/pro3.jpg', alt: 'Доходность сигнала 3' },
]

const swiperBreakpoints = {
  1920: {
    slidesPerView: 3,
    centeredSlides: true,
  },
  1400: {
    slidesPerView: 1.6,
    centeredSlides: true,
  },
  0: {
    slidesPerView: 1,
    centeredSlides: true,
  },
}
</script>

<style lang="scss" scoped src="./profitability.scss"></style>
