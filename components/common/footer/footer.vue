<template lang="pug">
  section.footer
    .footer__container.container
      a(href="https://t.me/valcapital" target="_blank").footer__title телеграм—канал

      .footer__columns
        .footer__column
          ul.footer__column-list.links
            li.footer__column-list__item(v-for="item in firstList" :key="item.id")
              a(:href="item.href") {{ item.label }}

        .footer__column.title
          a(href="https://t.me/valcapital" target="_blank").footer__column-title телеграм—канал

        .footer__column
          ul.footer__column-list
            li.footer__column-list__item(v-for="item in secondList" :key="item.id")
              a(:href="item.href") {{ item.label }}

    .footer__light
</template>

<script setup>

const firstList = ref([
  {id: 0, label: "Главная", href: "#main"},
  {id: 1, label: "Партнерская программа", href: "#partners"},
  {id: 2, label: "Калькулятор", href: "#calculator"},
  {id: 3, label: "Подключение", href: "#connect"}
])

const secondList = ref([
  {id: 4, label: "Политика конфиденциальности", href: "#"},
  {id: 5, label: "Файлы cookie", href: "#"},
])

</script>

<style lang="scss" scoped src="./footer.scss"></style>
