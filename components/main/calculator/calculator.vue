<template lang="pug">
  section.calculator#calculator
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
                  min="100"
                  max="1000000"
                  step="500"
                )

              .calculator__field
                .calculator__field-top
                  span.calculator__field-label Ежемесячное пополнение
                  span.calculator__field-value {{ formatCurrency(monthlyDeposit) }} $
                input(
                  v-model.number="monthlyDeposit"
                  type="range"
                  min="100"
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
                  min="1"
                  max="36"
                  step="1"
                )

          .calculator__result
            p.calculator__result-label Ваш капитал через {{ monthsLabel }}:
            .calculator__result-value {{ formatCurrency(calcInvestment) }} $
</template>

<script setup>
import {computed, ref} from "vue";


const strategies = [
  {key: "conservative", label: "Сигналы", percent: 400},
  {key: "balanced", label: "X10 Base", percent: 300},
  {key: "dynamic", label: "X10 Max", percent: 580}];

const activeStrategy = ref(strategies[0]);
const initialCapital = ref(2000);
const months = ref(6);
const monthlyDeposit = ref(1000);

const calcInvestment = computed(() => {
  const initial = initialCapital.value;
  const rate = activeStrategy.value.percent / 100;
  const m = months.value;
  const monthly = monthlyDeposit.value;
  const monthlyRate = rate / 12;

  const finalFromInitial = initial * Math.pow(1 + monthlyRate, m);

  const finalFromPayments = monthlyRate === 0 ? monthly * months : monthly *
      ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate);

  return (finalFromInitial + finalFromPayments) || 0;
});

const formatCurrency = (value) => new Intl.NumberFormat("ru-RU").format(Math.round(value));

const monthsLabel = computed(() => {
  const value = months.value;

  if(value % 10 === 1 && value % 100 !== 11) {
    return `${value} месяц`;
  }

  if([2, 3, 4].includes(value % 10) && ![12, 13, 14].includes(value % 100)) {
    return `${value} месяца`;
  }

  return `${value} месяцев`;
});
</script>

<style lang="scss" scoped src="./calculator.scss"></style>
