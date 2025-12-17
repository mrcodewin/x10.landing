<template lang="pug">
  section.conversion
    .conversion__container(ref="conversionSection")
      .conversion__title
        | Конверсия в VP

      .conversion__list
        .conversion__list-item(v-for="(conversion, index) in conversionList" :key="conversion.key")
          p.conversion__list-item__label {{ conversion.label }}
          p.conversion__list-item__text
            span.conversion__number {{ formatNumber(currentValues[index].left) }}{{ conversion.left.suffix }}
            span.conversion__equals =
            span.conversion__number {{ formatNumber(currentValues[index].right) }}{{ conversion.right.suffix }}

      
</template>

<script setup>
import { useIntersectionObserver, useIntervalFn } from '@vueuse/core'

const conversionSection = ref(null)

const conversionList = [
  { key: 0, label: 'X10 Lite', left: { target: 50, suffix: '$' }, right: { target: 50, suffix: ' VP' } },
  { key: 1, label: 'X10 Premium', left: { target: 1000, suffix: '$' }, right: { target: 1000, suffix: ' VP' } },
  { key: 2, label: 'Торговый объём', left: { target: 1_000_000, suffix: '$' }, right: { target: 1000, suffix: ' VP' } },
]

const currentValues = ref(conversionList.map(() => ({ left: 0, right: 0 })))
const hasStarted = ref(false)

const steps = conversionList.map((conversion) => ({
  left: Math.max(1, Math.round(conversion.left.target / 60)),
  right: Math.max(1, Math.round(conversion.right.target / 60)),
}))

const formatNumber = (value) => new Intl.NumberFormat('ru-RU').format(value)

const { pause: pauseCounters, resume: resumeCounters } = useIntervalFn(
  () => {
    let completed = true

    currentValues.value = currentValues.value.map((current, index) => {
      const leftTarget = conversionList[index].left.target
      const rightTarget = conversionList[index].right.target

      const nextLeft = Math.min(current.left + steps[index].left, leftTarget)
      const nextRight = Math.min(current.right + steps[index].right, rightTarget)

      if (nextLeft !== leftTarget || nextRight !== rightTarget) {
        completed = false
      }

      return { left: nextLeft, right: nextRight }
    })

    if (completed) {
      pauseCounters()
    }
  },
  20,
  { immediate: false }
)

useIntersectionObserver(
  conversionSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasStarted.value) {
      hasStarted.value = true
      resumeCounters()
    }
  },
  { threshold: 0.35 }
)
</script>

<style lang="scss" scoped src="./conversion.scss"></style>
