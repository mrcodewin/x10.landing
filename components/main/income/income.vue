<template lang="pug">
  section.income
    .income__container.container
      .income__info
        .income__info-title Иcпользуя стратегии,  инвестор за 5 месяцев заработал 
        .income__info-income $314 000

      .income__graph
        img.income__graph-image(:src="graph" alt="График")
        p.income__graph-caption
          | Кривая доходности VAL FOMO по данным TradeLink.pro

</template>

<script setup>
const graph = ref("/images/graph.png")
</script>

<style lang="scss" scoped src="./income.scss"></style>
