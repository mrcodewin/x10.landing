<template lang="pug">
section.lifestyle-promo
  .container
    h3.lifestyle-promo__title Lifestyle Promo
    .lifestyle-promo__content
      .lifestyle-promo__info
        span.lifestyle-promo__label от V3
        p.lifestyle-promo__text Начинаются путешествия и эксклюзивные промо (Турция, Таиланд, Европа, Дубай, Мальдивы)
      .lifestyle-promo__gallery
        .lifestyle-promo__image(v-for="image in lifestylePlaceholders" :key="image") {{ image }}
</template>

<script setup>
const lifestylePlaceholders = ['Image 1', 'Image 2', 'Image 3']
</script>

<style scoped lang="scss" src="./lifestyle-promo.scss"></style>
