<template lang="pug">
  section.connect#connect
    .connect__container.container
      .connect__header
        .connect__header-title Подключитесь в 3 простых шага
        .connect__header-button
          a(href="/app")
            UiButton(variant="accent") Начать сейчас

      .connect__body
        .connect__body-line__wrap
          .connect__body-line

        .connect__body-captions
          p.connect__body-captions__caption(
            v-for="caption in captions"
            :key="caption.id"
            v-html="caption.text"
          )

</template>

<script setup>

const captions = ref([
  {id: 0, text: "Зарегистрируйся по персональной ссылке партнёра X10."},
  {id: 1, text: "Подключи свою биржу в личном кабинете X10. Все средства остаются на твоём счёте."},
  {id: 2, text: "Выбери: алгоритмы или сигналы — и подходящую стратегию прямо в кабинете X10."}
])

</script>

<style lang="scss" scoped src="./connect.scss"></style>
