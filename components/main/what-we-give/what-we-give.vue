<template lang="pug">
  section.what-we-give
    .what-we-give__container.container
      .what-we-give__left
        .what-we-give__header
          h3.what-we-give__title Что мы даем
          .what-we-give__text
            p.what-we-give__text-item Алгоритмы X10 — ядро фонда VAL Capital.
            p.what-we-give__text-item Средства всегда остаются на личном биржевом счёте.

        .what-we-give__image(
          ref="imageContainer"
          @mouseenter="handleMouseEnter"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        )
          img(v-if="selectedItem" :src="selectedItem.image" :alt="selectedItem.title")
          .what-we-give__reticle(v-show="overlayVisible" :style="overlayStyle")
            .what-we-give__reticle-square(
              v-for="square in squares"
              :key="square.id"
              :style="{ left: `${square.x}px`, top: `${square.y}px` }"
            )

      .what-we-give__right
        .what-we-give__list
          .what-we-give__list-item(
            v-for="item in items"
            :key="item.id"
            :class="item.id === selectedItemId ? 'active' : ''"
            @mouseenter="selectItem(item.id)"
            @focusin="selectItem(item.id)"
          )
            .item__number
              | {{ item.number }}
            .item__info
              h4.item__info-title(v-html="item.title")
              p.item__info-text(v-html="item.descr")


</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const items = ref([
  {
    id: 0,
    number: '01',
    title: 'Полный контроль над деньгами',
    descr: 'При копировании сделок средства остаются на личном биржевом счете.',
    image: '/images/main/Control.png',
  },
  {
    id: 1,
    number: '02',
    title: 'Сигналы X10 — это стратегия входов и выходов.',
    descr: 'За 5 лет из 1900 сигналов — всего 3 убыточных.',
    image: '/images/main/Graph.gif',
  },
  {
    id: 2,
    number: '03',
    title: 'Простое подключение',
    descr: 'Подключение к бирже BingX занимает несколько минут.',
    image: '/images/main/BingX.png',
  },
  {
    id: 3,
    number: '04',
    title: 'Комьюнити и партнёрская программа',
    descr: 'Команда Х10 дает возможности для дополнительного заработка.',
    image: '/images/main/ValCap.png',
  },
])

const selectedItemId = ref(items.value[0].id)

const selectedItem = computed(() => items.value.find((item) => item.id === selectedItemId.value))

const selectItem = (itemId) => {
  selectedItemId.value = itemId
}

const imageContainer = ref(null)
const overlayPosition = ref({ x: 0, y: 0 })
const overlayVisible = ref(false)

const patternSize = { width: 500, height: 500 }

const squares = [
  { id: 0, x: 200, y: 0 },
  { id: 1, x: 200, y: 100 },
  { id: 2, x: 200, y: 200 },
  { id: 3, x: 200, y: 300 },
  { id: 4, x: 200, y: 400 },
  { id: 5, x: 0, y: 200 },
  { id: 6, x: 100, y: 200 },
  { id: 7, x: 300, y: 200 },
  { id: 8, x: 400, y: 200 },
  { id: 9, x: 100, y: 100 },
  { id: 10, x: 300, y: 100 },
  { id: 11, x: 100, y: 300 },
  { id: 12, x: 300, y: 300 },
]

const setOverlayPosition = (targetX, targetY) => {
  overlayPosition.value = {
    x: targetX,
    y: targetY,
  }
}

const centerOverlay = (rect) => {
  setOverlayPosition((rect.width - patternSize.width) / 2, (rect.height - patternSize.height) / 2)
}

const handleMouseMove = (event) => {
  const rect = imageContainer.value?.getBoundingClientRect()

  if (!rect) return

  const x = event.clientX - rect.left - patternSize.width / 2
  const y = event.clientY - rect.top - patternSize.height / 2

  setOverlayPosition(x, y)
}

const handleMouseLeave = () => {
  const rect = imageContainer.value?.getBoundingClientRect()

  if (!rect) return

  centerOverlay(rect)

  overlayVisible.value = false
}

const handleMouseEnter = () => {
  overlayVisible.value = true
}

const overlayStyle = computed(() => ({
  width: `${patternSize.width}px`,
  height: `${patternSize.height}px`,
  transform: `translate3d(${overlayPosition.value.x}px, ${overlayPosition.value.y}px, 0)`,
}))

onMounted(() => {
  const rect = imageContainer.value?.getBoundingClientRect()

  if (!rect) return

  centerOverlay(rect)
})

</script>

<style lang="scss" scoped src="./what-we-give.scss"></style>
