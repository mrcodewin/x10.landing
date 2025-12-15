<template lang="pug">
section.rebate-bonus
  .container
    h3.rebate-bonus__title Rebate Bonus
    p.rebate-bonus__subtitle В сеть 250$, делятся по уровням:
    .rebate-bonus__grid
      .rebate-bonus__item(v-for="level in rebateBonusLevels" :key="level.label")
        span.rebate-bonus__label {{ level.label }}
        span.rebate-bonus__line
        span.rebate-bonus__value {{ level.value }}
</template>

<script setup>
const rebateBonusLevels = [
  { label: '1-я линия', value: '15% (37.5$)' },
  { label: '2-я линия', value: '5% (12.5$)' },
  { label: '3-я линия', value: '5% (12.5$)' },
  { label: '4-я линия', value: '5% (12.5$)' },
  { label: '5-я линия', value: '3% (7.5$)' },
  { label: '6-я линия', value: '3% (7.5$)' },
  { label: '7-я линия', value: '3% (7.5$)' },
  { label: '8-я линия', value: '2% (10$)' },
  { label: '9-я линия', value: '2% (10$)' },
  { label: '10-я линия', value: '2% (10$)' },
]
</script>

<style scoped lang="scss" src="./rebate-bonus.scss"></style>
