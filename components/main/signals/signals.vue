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
const list = ref([
  {id: 0, text: "Для ручной торговли собрали лучшие практики"},
  {id: 1, text: "Винрейт ручных сделок — 99,8%, и именно этому мы обучаем шаг  за шагом."},
  {id: 2, text: "Мы объединили опыт лучших трейдеров и превратили его в систему, доступную каждому."}
])

const signalsSection = ref(null)
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
  const steps = list.value.length - 1
  if (steps <= 0) return 0

  return Math.round(progress.value * steps)
})

const updateProgress = () => {
  if (!signalsSection.value) return

  progress.value = getScrollProgress(signalsSection.value)
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

<style lang="scss" scoped src="./signals.scss"></style>
