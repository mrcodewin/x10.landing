<template lang="pug">
section.profit-share-bonus
  .container
    h3.profit-share-bonus__title Profit Share Bonus (с прибыли алгоритмов)

    .profit-share-bonus__content
      .profit-share-bonus__column.profit-share-bonus__column--info
        .profit-share-bonus__row
          span.profit-share-bonus__value 5-10%
          span.profit-share-bonus__text Алгоритмы приносят в среднем 5-10% прибыли в месяц

        .profit-share-bonus__row
          span.profit-share-bonus__value 20%
          span.profit-share-bonus__text Компания получает 20% от этой прибыли

        .profit-share-bonus__row
          span.profit-share-bonus__value 50%
          span.profit-share-bonus__text Часть уйдет на инфраструктуру, до 50% уходит в сеть

      .profit-share-bonus__column.profit-share-bonus__column--bars
        .profit-share-bonus__bars
          .profit-share-bonus__bar-item(
            v-for="bar in profitShareBars"
            :key="bar.label"
          )
            span.profit-share-bonus__bar-label(v-html="bar.label")
            .profit-share-bonus__bar(:style="{ height: bar.height }")
</template>

<script setup>
const profitShareBars = [
  { label: '5-10%', height: '33%' },
  { label: '20%', height: '50%' },
  { label: '<span>до</span> 50%', height: '66%' },
]
</script>

<style scoped lang="scss" src="./profit-share-bonus.scss"></style>
