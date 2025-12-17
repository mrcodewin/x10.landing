<template lang="pug">
section.rebate-bonus
  .container
    h3.rebate-bonus__title Rebate Bonus

    .rebate-bonus__top
      .rebate-bonus__top-side
        p.rebate-bonus__top-value 
          span 500$
        p.rebate-bonus__top-text Биржа выплачивает около $500 за $1 млн торгового объёма.

      .rebate-bonus__top-side.rebate-bonus__top-side--right
        p.rebate-bonus__top-value
          span.mini до 
          span 50%
        p.rebate-bonus__top-text Часть идёт на разработку, поддержку и бэкафис, до 50% распределяется в сеть.

    p.rebate-bonus__subtitle В сеть 250$, делятся по уровням:

    .rebate-bonus__grid
      .rebate-bonus__item(
        v-for="(level, idx) in rebateBonusLevels"
        :key="level.label"
        :style="{ '--t': idx / (rebateBonusLevels.length - 1) }"
      )
        span.rebate-bonus__label {{ level.label }}
        span.rebate-bonus__line
        span.rebate-bonus__value {{ level.value }}
</template>

<script setup>
const rebateBonusLevels = [
  { label: '1-я линия',  value: '15% (75$)' },
  { label: '2-я линия',  value: '5% (25$)' },
  { label: '3-я линия',  value: '5% (25$)' },
  { label: '4-я линия',  value: '5% (25$)' },
  { label: '5-я линия',  value: '3% (15$)' },
  { label: '6-я линия',  value: '3% (15$)' },
  { label: '7-я линия',  value: '3% (15$)' },
  { label: '8-я линия',  value: '2% (10$)' },
  { label: '9-я линия',  value: '2% (10$)' },
  { label: '10-я линия', value: '2% (10$)' },
]
</script>

<style scoped lang="scss" src="./rebate-bonus.scss"></style>
