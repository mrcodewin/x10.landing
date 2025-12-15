<template lang="pug">
section.profit-share-bonus
  .container
    h3.profit-share-bonus__title Profit Share Bonus (с прибыли алгоритмов)
    .profit-share-bonus__content
      .profit-share-bonus__column
        span.profit-share-bonus__value 5-10%
        span.profit-share-bonus__text Алгоритмы приносят в среднем 5-10% прибыли в месяц
        span.profit-share-bonus__value 20%
        span.profit-share-bonus__text Компания получает 20% от этой прибыли
        span.profit-share-bonus__value 50%
        span.profit-share-bonus__text Часть уйдет на инфраструктуру, до 50% уходит в сеть
      .profit-share-bonus__column.profit-share-bonus__column--bars
        .profit-share-bonus__bar(v-for="bar in profitShareBars" :key="bar.label" :style="{ height: bar.height }")
          span.profit-share-bonus__bar-text {{ bar.label }}
</template>

<script setup>
const profitShareBars = [
  { label: '5-10%', height: '120px' },
  { label: '20%', height: '180px' },
  { label: 'до 50%', height: '260px' },
]
</script>

<style scoped lang="scss" src="./profit-share-bonus.scss"></style>
