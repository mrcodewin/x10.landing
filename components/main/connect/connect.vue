<template lang="pug">
  section.connect#connect(ref="connectSection")
    .connect__container.container
      .connect__header
        .connect__header-title Подключитесь в 3 простых шага
        .connect__header-button
          a(href="/app/login")
            UiButton(variant="accent") Начать сейчас

      .connect__body
        .connect__body-line__wrap
          .connect__body-line(:style="{ '--connect-progress': progressPercent }")
            .connect__body-line-fill

        .connect__body-captions
          p.connect__body-captions__caption(
            v-for="caption in captions"
            :key="caption.id"
            :class="{ 'is-active': activeIndex === caption.id }"
            v-html="caption.text"
          )

</template>

<script setup>
import { useIntersectionObserver, useWindowScroll } from '@vueuse/core';

const captions = ref([
  {id: 0, text: "Зарегистрируйся по персональной ссылке партнёра X10."},
  {id: 1, text: "Подключи свою биржу в личном кабинете X10. Все средства остаются на твоём счёте."},
  {id: 2, text: "Выбери: алгоритмы или сигналы — и подходящую стратегию прямо в кабинете X10."}
])

const connectSection = ref(null)
const progress = ref(0)
const sectionBounds = ref({ top: 0, height: 0 })

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))

const progressPercent = computed(() => `${Math.round(progress.value * 100)}%`)
const activeIndex = computed(() => {
  const steps = captions.value.length - 1
  if (steps <= 0) return 0

  return Math.round(progress.value * steps)
})

const updateProgress = (scrollY) => {
  if (typeof window === 'undefined') return

  const { top, height } = sectionBounds.value
  if (!height) return

  const start = top - window.innerHeight + 300
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
  connectSection,
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

<style lang="scss" scoped src="./connect.scss"></style>
