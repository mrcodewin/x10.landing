<template lang="pug">
  section.signals
    .signals__container.container
      .signals__title
        | <span> Cигналы X10 </span> — готовые решения, предсказуемый результат

      .signals__list
        p.signals__list-item(
          v-for="item in list"
          :key="item.id"
          v-html="item.text"
        )

</template>

<script setup>

const list = ref([
  {id: 0, text: "Для ручной торговли собрали лучшие практики"},
  {id: 1, text: "Винрейт ручных сделок — 99,8%, и именно этому мы обучаем шаг  за шагом."},
  {id: 2, text: "Мы объединили опыт лучших трейдеров и превратили его в систему, доступную каждому."}
])
</script>

<style lang="scss" scoped src="./signals.scss"></style>