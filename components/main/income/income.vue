<template lang="pug">
  section.income(ref="incomeSection")
    .income__container.container
      .income__info
        .income__info-title Иcпользуя стратегии,  инвестор за 5 месяцев заработал
        .income__info-income ${{ formattedIncome }}

      .income__graph
        img.income__graph-image(:src="graph" alt="График")
        p.income__graph-caption
          | Кривая доходности VAL FOMO по данным TradeLink.pro

</template>

<script setup>
import { useIntersectionObserver, useIntervalFn } from '@vueuse/core'

const graph = ref("/images/graph.png")

const incomeSection = ref(null)
const startValue = 200_000
const targetValue = 314_000
const currentValue = ref(startValue)

const formattedIncome = computed(() =>
  new Intl.NumberFormat('ru-RU').format(currentValue.value)
)

const { pause: pauseCounter, resume: resumeCounter } = useIntervalFn(
  () => {
    const nextValue = currentValue.value + 1000
    if (nextValue >= targetValue) {
      currentValue.value = targetValue
      pauseCounter()
      return
    }
    currentValue.value = nextValue
  },
  20,
  { immediate: false }
)

const hasStarted = ref(false)

useIntersectionObserver(
  incomeSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasStarted.value) {
      hasStarted.value = true
      resumeCounter()
    }
  },
  { threshold: 0.3 }
)
</script>

<style lang="scss" scoped src="./income.scss"></style>
