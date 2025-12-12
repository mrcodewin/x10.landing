<template lang="pug">
  section.conversion
    .conversion__container(ref="conversionSection")
      .conversion__title
        | Конверсия в VP

      .conversion__list
        .conversion__list-item(v-for="conversion in conversionList" :key="conversion.key")
          p.conversion__list-item__label {{ conversion.label }}
          p.conversion__list-item__text {{ conversion.text }}

      
</template>

<script setup>
  const conversionList = [
    {key: 0, label: "X10 Lite", text: "50$ = 50 VP"},
    {key: 1, label: "X10 Premium", text: "1 000$ = 1 000 VP"},
    {key: 2, label: "Торговый объём", text: "1 000 000$ = 1 000 VP"}
  ]
</script>

<style lang="scss" scoped src="./conversion.scss"></style>
