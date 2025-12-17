<template lang="pug">
  section.calculator-vp
    .calculator-vp__container.container
      .calculator-vp__header
        h3.calculator-vp__title Калькулятор VP

      .calculator-vp__body
        //- .calculator-vp__tabs
        //-   button.calculator-vp__tab(
        //-     v-for="line in lines"
        //-     :key="line.key"
        //-     :class="{ 'calculator-vp__tab--active': line.key === activeLine.key }"
        //-     @click="activeLine = line"
        //-   )
        //-     span {{ line.key }}
        //-     | линия

        .calculator-vp__info
          .calculator-vp__controls
            .calculator-vp__column
              .calculator-vp__field
                .calculator-vp__field-top
                  span.calculator-vp__field-label Количество подписок X10Lite:
                  span.calculator-vp__field-value {{ formatCurrency(subLite) }}
                input(
                  v-model.number="subLite"
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                )

              .calculator-vp__field
                .calculator-vp__field-top
                  span.calculator-vp__field-label Количество приваток X10 Premium:
                  span.calculator-vp__field-value {{ formatCurrency(subPremium) }}
                input(
                  v-model.number="subPremium"
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                )

            .calculator-vp__column              
              .calculator-vp__field
                .calculator-vp__field-top
                  span.calculator-vp__field-label Торговый объем
                  span.calculator-vp__field-value {{ formatCurrency(volume) }} $
                input(
                  v-model.number="volume"
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                )

              .calculator-vp__field
                .calculator-vp__field-top
                  span.calculator-vp__field-label Квалификация:

                .calculator-vp__field-bottom
                  span.calculator-vp__field-bottom__item(
                    v-for="qual in qualificationList"
                    :key="qual.key"
                    @click="qualification = qual.percent"
                    :class="qualification === qual.percent ? 'active' : ''"
                  ) {{ qual.label }}

          .calculator-vp__result
            p.calculator-vp__result-label Итог:
            .calculator-vp__result-value {{ formatCurrency(projectedCapital) }} $
</template>

<script setup>
import { computed, ref } from 'vue'

const qualificationList = [
  {key: 1, label: "V1", percent: 1},
  {key: 2, label: "V2", percent: 2},
  {key: 3, label: "V3", percent: 3},
  {key: 4, label: "V4", percent: 4},
  {key: 5, label: "V5", percent: 5},
  {key: 6, label: "V6", percent: 6}
]

const subLite = ref(1)
const subPremium = ref(1)
const volume = ref(1790000)
const qualification = ref(1)

const calcInvestment = ({ subLite, qualification, subPremium, volume }) => {
  const totalSubscriptions = subLite + subPremium
  const liteIncome = subLite * 7.5
  const premiumIncome = subPremium * 150
  const volumeIncome = (volume / 10000) * 0.125 * totalSubscriptions

  return (liteIncome + premiumIncome + volumeIncome) * qualification
}

const formatCurrency = (value) => new Intl.NumberFormat('ru-RU').format(Math.round(value))

const projectedCapital = computed(() =>
  calcInvestment({
    subLite: subLite.value,
    qualification: qualification.value,
    subPremium: subPremium.value,
    volume: volume.value,
  }),
)
</script>

<style lang="scss" scoped src="./calculator-vp.scss"></style>
