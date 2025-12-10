<template lang="pug">
  section.strategy
    .strategy__container(ref="strategySection")
      .strategy__title
        | Стратегии X10 — это алгоритмы, по которым  VAL Capital управляет капиталом

      .strategy__chart
        .strategy__bars
          .strategy__bar(
            v-for="(barHeight, index) in bars"
            :key="index"
            :style="barStyle(barHeight, index)"
          )
      
</template>

<script setup>
import { useIntersectionObserver, useIntervalFn } from '@vueuse/core'

const strategySection = ref(null)
const barsCount = 15
const bars = ref(Array.from({ length: barsCount }, () => 0))

const randomActiveValue = () => +(Math.random() * 0.5 + 0.5).toFixed(2)

const raiseBars = () => {
  bars.value = bars.value.map(() => randomActiveValue())
}

const { pause: pauseBars, resume: resumeBars } = useIntervalFn(() => {
  bars.value = bars.value.map(() => randomActiveValue())
}, 2200, {
  immediate: false,
})

const barStyle = (heightValue, index) => ({
  height: `${heightValue * 100}%`,
  transitionDelay: `${index * 40}ms`,
})

useIntersectionObserver(
  strategySection,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      raiseBars()
      resumeBars()
      return
    }

    pauseBars()
    bars.value = Array.from({ length: barsCount }, () => 0)
  },
  { threshold: 0.35 }
)
</script>

<style lang="scss" scoped src="./strategy.scss"></style>
