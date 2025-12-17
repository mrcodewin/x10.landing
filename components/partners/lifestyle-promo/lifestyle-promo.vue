<template lang="pug">
section.lifestyle-promo
  .container
    h3.lifestyle-promo__title Lifestyle Promo

    .lifestyle-promo__content
      .lifestyle-promo__info
        span.lifestyle-promo__label от V3
        p.lifestyle-promo__text
          | Начинаются путешествия и эксклюзивные промо
          | (Турция, Таиланд, Европа, Дубай, Мальдивы)

      .lifestyle-promo__gallery
        .lifestyle-promo__image(
          v-for="(image, idx) in lifestylePlaceholders"
          :key="image.id"
          :class="`lifestyle-promo__image--${idx + 1}`"
        )
          img(:src="image.src" :alt="`Lifestyle promo ${idx + 1}`")
</template>

<script setup>
const lifestylePlaceholders = [
  {id: 0, src:"images/lifestyle-promo/image1.png"},
  {id: 1, src:"images/lifestyle-promo/image2.png"},
  {id: 2, src:"images/lifestyle-promo/image3.png"}
]
</script>

<style scoped lang="scss" src="./lifestyle-promo.scss"></style>
