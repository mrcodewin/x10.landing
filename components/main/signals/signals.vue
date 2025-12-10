<template lang="pug">
  section.signals(ref="signalsSection")
    .signals__container.container
      .signals__title
        | <span> Cигналы X10 </span> — готовые решения, предсказуемый результат

      .signals__progress
        .signals__progress-track
        .signals__progress-fill(:style="{ height: progressPercent }")

      .signals__list
        p.signals__list-item(
          v-for="item in list"
          :key="item.id"
          :class="{ 'is-active': activeIndex === item.id }"
          v-html="item.text"
        )

</template>

<script setup>
import { useIntersectionObserver, useWindowScroll } from '@vueuse/core';

const list = ref([
  {id: 0, text: "Для ручной торговли собрали лучшие практики"},
  {id: 1, text: "Винрейт ручных сделок — 99,8%, и именно этому мы обучаем шаг  за шагом."},
  {id: 2, text: "Мы объединили опыт лучших трейдеров и превратили его в систему, доступную каждому."}
])

const signalsSection = ref(null)
const progress = ref(0)
const sectionBounds = ref({ top: 0, height: 0 })

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))

const progressPercent = computed(() => `${Math.round(progress.value * 100)}%`)
const activeIndex = computed(() => {
  const steps = list.value.length - 1
  if (steps <= 0) return 0

  return Math.round(progress.value * steps)
})

const updateProgress = (scrollY) => {
  if (typeof window === 'undefined') return

  const { top, height } = sectionBounds.value
  if (!height) return

  const start = top - window.innerHeight
  const end = top + height

  progress.value = clamp((scrollY - start) / (end - start))
}

const { y } = useWindowScroll()
const stopWatch = watch(
  y,
  (value) => {
    updateProgress(value)
  },
  { immediate: true },
)

const { stop } = useIntersectionObserver(
  signalsSection,
  ([entry]) => {
    if (!entry || typeof window === 'undefined') return

    sectionBounds.value = {
      top: entry.boundingClientRect.top + window.scrollY,
      height: entry.boundingClientRect.height,
    }

    updateProgress(window.scrollY)
  },
)

onBeforeUnmount(() => {
  stop()
  stopWatch()
})
</script>

<style lang="scss" scoped src="./signals.scss"></style>
