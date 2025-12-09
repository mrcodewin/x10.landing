<template lang="pug">
  section.calculator
    .calculator__container.container
      .calculator__header
        h3.calculator__title Калькулятор доходности

        .calculator__note
          span.calculator__note-icon *
          p.calculator__note-text Данные в расчетах являются примером и не гарантируют точности результата
          

      .calculator__body
        .calculator__tabs
          button.calculator__tab(
            v-for="strategy in strategies"
            :key="strategy.key"
            :class="{ 'calculator__tab--active': strategy.key === activeStrategy.key }"
            @click="activeStrategy = strategy"
          )
            | {{ strategy.label }}

        .calculator__info
          .calculator__controls
            .calculator__column
              .calculator__field
                .calculator__field-top
                  span.calculator__field-label Начальный капитал
                  span.calculator__field-value {{ formatCurrency(initialCapital) }} $
                input(
                  v-model.number="initialCapital"
                  type="range"
                  min="0"
                  max="10000000"
                  step="10000"
                )

              .calculator__field
                .calculator__field-top
                  span.calculator__field-label Ежемесячное пополнение
                  span.calculator__field-value {{ formatCurrency(monthlyDeposit) }} $
                input(
                  v-model.number="monthlyDeposit"
                  type="range"
                  min="0"
                  max="50000"
                  step="500"
                )

            .calculator__column
              .calculator__field
                .calculator__field-top
                  span.calculator__field-label Срок
                  span.calculator__field-value {{ monthsLabel }}
                input(
                  v-model.number="months"
                  type="range"
                  min="0"
                  max="12"
                  step="1"
                )
              
              .calculator__field
                .calculator__field-top
                  span.calculator__field-label Торговый объем
                  span.calculator__field-value {{ formatCurrency(volume) }} $
                input(
                  v-model.number="volume"
                  type="range"
                  min="0"
                  max="3000000"
                  step="10000"
                )

          .calculator__result
            p.calculator__result-label Ваш капитал через {{ monthsLabel }}:
            .calculator__result-value {{ formatCurrency(projectedCapital) }} $
</template>

<script setup>
import { computed, ref } from 'vue'

const strategies = [
  { key: 'conservative', label: 'Conservative', percent: 6 },
  { key: 'balanced', label: 'Balanced', percent: 9 },
  { key: 'dynamic', label: 'Dynamic', percent: 12 },
]

const activeStrategy = ref(strategies[0])
const initialCapital = ref(1000000)
const months = ref(1)
const monthlyDeposit = ref(1000)
const volume = ref(1789000)

const calcInvestment = ({ initialCapital, months, monthlyDeposit, volume, percent }) => {
  const r = percent / 100
  const b = 0.05 * volume

  const growthFactor = Math.pow(1 + r, months)

  const result = initialCapital * growthFactor + (monthlyDeposit + b) * ((growthFactor - 1) / r)

  return result
}

const formatCurrency = (value) => new Intl.NumberFormat('ru-RU').format(Math.round(value))

const monthsLabel = computed(() => {
  const value = months.value

  if (value % 10 === 1 && value % 100 !== 11) {
    return `${value} месяц`
  }

  if ([2, 3, 4].includes(value % 10) && ![12, 13, 14].includes(value % 100)) {
    return `${value} месяца`
  }

  return `${value} месяцев`
})

const projectedCapital = computed(() =>
  calcInvestment({
    initialCapital: initialCapital.value,
    months: months.value,
    monthlyDeposit: monthlyDeposit.value,
    volume: volume.value,
    percent: activeStrategy.value.percent,
  }),
)
</script>

<style lang="scss" scoped src="./calculator.scss"></style>
