<template lang="pug">
  section.what-we-give
    .what-we-give__container.container
      .what-we-give__left
        .what-we-give__image(ref="imageContainer")
          component(
            v-if="selectedItem && selectedItem.component"
            :is="selectedItem.component"
            class="what-we-give__illustration"
          )
          img(v-else-if="selectedItem" :src="selectedItem.image" :alt="selectedItem.title" :loop="1")
          .what-we-give__reticle(
            v-show="overlayVisible && selectedItem.id > 2"
            :style="overlayStyle"
          )
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
import { computed, markRaw, onBeforeUnmount, onMounted, ref } from 'vue'
import CryptoStack from '@/components/common/what-we-give/CryptoStack.vue'
import SecureStack from '@/components/common/what-we-give/SecureStack.vue'

const loadingImages = [
  "/images/partners/cashback.png"
]

const items = ref([
  {
    id: 0,
    number: '01',
    title: 'До 50% всех поступлений',
    descr: 'Направляется в партнерскую сеть',
    image: '/images/partners/web.png',
  },
  {
    id: 1,
    number: '02',
    title: 'До 60% возвращается в сообщество',
    descr: 'С учётом промо',
    image: '/images/partners/cashback.png',
  },
  {
    id: 2,
    number: '03',
    title: 'Деньги клиентов всегда остаются на их личных счетах',
    descr: 'Все бонусы суммируются',
    image: '/images/partners/phone.png',
  },
  {
    id: 3,
    number: '04',
    title: 'VAL POINTS',
    descr: 'Учёт ведется через единую метрику',
    image: '/images/partners/ValPoint.png',
  },
])

const selectedItemId = ref(items.value[0].id)

const selectedItem = computed(() => items.value.find((item) => item.id === selectedItemId.value))

const selectItem = (itemId) => {
  selectedItemId.value = itemId
}

const imageContainer = ref(null)
const overlayPosition = ref({ x: 0, y: 0 })
const overlayVisible = ref(true)

const patternSize = ref({ width: 0, height: 0 })
const squareSize = 80
const baseSpeed = 1

const baseSquares = [
  { id: 0, x: 158, y: 0 },
  { id: 1, x: 158, y: 79 },
  { id: 2, x: 158, y: 158 },
  { id: 3, x: 158, y: 237 },
  { id: 4, x: 158, y: 316 },
  { id: 5, x: 0, y: 158 },
  { id: 6, x: 79, y: 158 },
  { id: 7, x: 237, y: 158 },
  { id: 8, x: 316, y: 158 },
  { id: 9, x: 79, y: 79 },
  { id: 10, x: 237, y: 79 },
  { id: 11, x: 79, y: 237 },
  { id: 12, x: 237, y: 237 },
]

const squaresBoundary = {
  width: Math.max(...baseSquares.map((square) => square.x)) + squareSize,
  height: Math.max(...baseSquares.map((square) => square.y)) + squareSize,
}

const groupOffset = ref({ x: 0, y: 0 })
const groupVelocity = ref({ vx: baseSpeed, vy: baseSpeed })

const squares = computed(() =>
  baseSquares.map((square) => ({
    ...square,
    x: square.x + groupOffset.value.x,
    y: square.y + groupOffset.value.y,
  })),
)

const overlayStyle = computed(() => ({
  width: `${patternSize.value.width}px`,
  height: `${patternSize.value.height}px`,
  transform: `translate3d(${overlayPosition.value.x}px, ${overlayPosition.value.y}px, 0)`,
}))

let animationFrameId = null
let lastTimestamp = 0

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const clampGroupToBounds = (width, height) => {
  const maxX = Math.max(0, width - squaresBoundary.width)
  const maxY = Math.max(0, height - squaresBoundary.height)

  groupOffset.value = {
    x: clamp(groupOffset.value.x, 0, maxX),
    y: clamp(groupOffset.value.y, 0, maxY),
  }
}

const updatePatternSize = () => {
  const rect = imageContainer.value?.getBoundingClientRect()

  if (!rect) return

  patternSize.value = { width: rect.width, height: rect.height }
  clampGroupToBounds(rect.width, rect.height)
}

const updateGroupPosition = (delta) => {
  const { width, height } = patternSize.value

  if (!width || !height) return

  const maxX = Math.max(0, width - squaresBoundary.width)
  const maxY = Math.max(0, height - squaresBoundary.height)

  let { x, y } = groupOffset.value
  let { vx, vy } = groupVelocity.value

  x += vx * delta
  y += vy * delta

  if (x <= 0 || x >= maxX) {
    vx *= -1
    x = clamp(x, 0, maxX)
  }

  if (y <= 0 || y >= maxY) {
    vy *= -1
    y = clamp(y, 0, maxY)
  }

  groupOffset.value = { x, y }
  groupVelocity.value = { vx, vy }
}

const animateSquares = (timestamp) => {
  if (!lastTimestamp) {
    lastTimestamp = timestamp
  }

  const delta = (timestamp - lastTimestamp) / (1000 / 60)
  lastTimestamp = timestamp

  updateGroupPosition(delta)

  animationFrameId = requestAnimationFrame(animateSquares)
}

let resizeObserver = null

onMounted(() => {
  updatePatternSize()

  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(updatePatternSize)

    if (imageContainer.value) {
      resizeObserver.observe(imageContainer.value)
    }
  }

  animationFrameId = requestAnimationFrame(animateSquares)

  loadingImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

</script>

<style lang="scss" scoped src="./what-we-give.scss"></style>
