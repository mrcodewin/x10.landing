<template lang="pug">
  section.what-we-give
    .what-we-give__container.container
      .what-we-give__left
        .what-we-give__header
          h3.what-we-give__title Что мы даем
          .what-we-give__text
            p.what-we-give__text-item Алгоритмы X10 — ядро фонда VAL Capital.
            p.what-we-give__text-item Средства всегда остаются на личном биржевом счёте.

        .what-we-give__image
          img(:src="selectedImages.control")

      .what-we-give__right
        .what-we-give__list
          .what-we-give__list-item(
            v-for="item in list"
            :key="item.id"
            :class="item.id === selectedItem ? 'active' : ''"
          )
            .item__number
              | {{ item.number }}
            .item__info
              h4.item__info-title(v-html="item.title")
              p.item__info-text(v-html="item.descr")


</template>

<script setup>

const selectedImages = ref({
  control: '/images/ValCap.png',
})

const list = ref([
  { id: 0, number: "01", title: "Полный контроль над деньгами", descr: "При копировании сделок средства остаются на личном биржевом счете."},
  { id: 1, number: "02", title: "Сигналы X10 — это стратегия входов и выходов.", descr: "За 5 лет из 1900 сигналов — всего 3 убыточных."},
  { id: 2, number: "03", title: "Простое подключение", descr: "Подключение к бирже BingX занимает несколько минут."},
  { id: 3, number: "04", title: "Комьюнити и партнёрская программа", descr: "Команда Х10 дает возможности для дополнительного заработка."}
])

const selectedItem = ref(3)

</script>

<style lang="scss" scoped src="./what-we-give.scss"></style>
