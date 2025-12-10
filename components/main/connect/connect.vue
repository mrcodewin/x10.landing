<template lang="pug">
  section.connect(ref="connectSection")
    .connect__container.container
      .connect__header
        .connect__header-title
          | Подключитесь в 3 простых шага
        .connect__header-button
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
const captions = ref([
  {id: 0, text: "Зарегистрируйся по персональной ссылке партнёра X10."},
  {id: 1, text: "Подключи свою биржу в личном кабинете X10. Все средства остаются на твоём счёте."},
  {id: 2, text: "Выбери: алгоритмы или сигналы — и подходящую стратегию прямо в кабинете X10."}
])

const connectSection = ref(null)
const progress = ref(0)

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))

const getScrollProgress = (element) => {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const distance = viewportHeight - rect.top
  const total = rect.height + viewportHeight
  return clamp(distance / total)
}

const progressPercent = computed(() => `${Math.round(progress.value * 100)}%`)
const activeIndex = computed(() => {
  const steps = captions.value.length - 1
  if (steps <= 0) return 0

  return Math.round(progress.value * steps)
})

const updateProgress = () => {
  if (!connectSection.value) return

  progress.value = getScrollProgress(connectSection.value)
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, {passive: true})
  window.addEventListener('resize', updateProgress)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})

</script>

<style lang="scss" scoped src="./connect.scss"></style>
