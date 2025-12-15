<template lang="pug">
section.qualification-income
  .container
    h3.qualification-income__title Примерные доходы по квалификациям
    .qualification-income__grid
      .qualification-income__card(v-for="item in qualificationIncomeItems" :key="item.level")

        .qualification-income__card-level {{ item.level }}

        .qualification-income__card-volume {{ item.volume }}

        .qualification-income__card-right
          p.qualification-income__card-network В сеть ~{{ item.network }} 
          .qualification-income__card-partners
            p.qualification-income__card-partners__text Доход партнёра:
            p.qualification-income__card-partners__monthly {{ item.monthly }}
</template>

<script setup>
const qualificationIncomeItems = [
  { level: 'V1', volume: '1 000 VP / $1 млн оборота', network: '$300', monthly: '$100-150/мес' },
  { level: 'V2', volume: '2 000 VP / $5 млн оборота', network: '$1 500', monthly: '$500-700/мес' },
  { level: 'V3', volume: '20 000 VP / $20 млн оборота', network: '$6 000', monthly: '$2 000-3 000/мес' },
  { level: 'V4', volume: '50 000 VP / $50 млн оборота', network: '$15 000', monthly: '$5 000-10 000/мес' },
  { level: 'V5', volume: '100 000 VP / $100 млн оборота', network: '$30 000', monthly: '$10 000-15 000/мес' },
  { level: 'V6', volume: '250 000 VP / $250 млн оборота', network: '$75 000', monthly: '$25 000-40 000/мес' },
]
</script>

<style scoped lang="scss" src="./qualification-income.scss"></style>
