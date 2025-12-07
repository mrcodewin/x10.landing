<template lang="pug">
  section.stats
    .stats__container.container
      h3.stats__title
        | Статистика автоматической торговли подтверждена публично

      .stats__highlights
        .stats__highlights-item(v-for="highlight in highlights" :key="highlight.id")
          span.stats__highlights-item__dot
          p.stats__highlights-item__text(v-html="highlight.text")

      .stats__graph
        img.stats__graph-image(:src="graph" alt="График")
        p.stats__graph-caption
          | Кривая доходности VAL FOMO по данным TradeLink.pro

</template>

<script setup>

const highlights = ref([
  {id: 0, text: "Вся статистика X10 открыта и проверяема"},
  {id: 1, text: "Публичные ссылки напрямую из фонда <span>VAL Capital</span>"},
  {id: 2, text: "Данные отображаются по публичной ссылке; мы не редактируем их"},
])

const graph = ref("/images/graph.png")

</script>

<style lang="scss" scoped src="./stats.scss"></style>
