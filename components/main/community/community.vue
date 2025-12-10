<template lang="pug">
  section.community#community
    .community__container.container
      .community__title X10 — это коммьюнити

      .community__body
        .community__body-info
          p.community__body-info__text Здесь ты учишься, обмениваешься опытом и растёшь вместе с другими инвесторами и партнёрами.
          p.community__body-info__text Доступ к закрытой среде, где всегда есть ответы, поддержка и новые возможности для заработка.
          a(href="/app/login")
            UiButton.community__body-info__button(variant="accent") Стать частью команды

        .community__body-cards
          img.community__body-cards__card(
            v-for="card in cards"
            :key="card.id"
            :src="card.src"
            :alt="card.alt"
          )

</template>

<script setup>

const cards = ref([
  {id: 0, src: "/images/community/card1.png", alt: "Карточка 1"},
  {id: 1, src: "/images/community/card2.png", alt: "Карточка 2"}
])

</script>

<style lang="scss" scoped src="./community.scss"></style>
