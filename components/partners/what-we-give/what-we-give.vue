<template lang="pug">
  section.what-we-give
    .what-we-give__container.container
      .what-we-give__left
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
  { id: 0, number: "01", title: "До 50% всех поступлений", descr: "Направляется в партнерскую сеть"},
  { id: 1, number: "02", title: "До 60% возвращается в сообщество", descr: "С учётом промо"},
  { id: 2, number: "03", title: "Деньги клиентов всегда остаются на их личных счетах", descr: "Все бонусы суммируются"},
  { id: 3, number: "04", title: "VAL POINTS", descr: "Учёт ведется через единую метрику"}
])

const selectedItem = ref(3)

</script>

<style lang="scss" scoped src="./what-we-give.scss"></style>
