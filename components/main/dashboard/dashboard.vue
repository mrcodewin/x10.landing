<template lang="pug">
  section.dashboard
    .dashboard__container.container
      .dashboard__header
        .dashboard__header-title
          | Дашборд

        .dashboard__header-label
          | Торгуй по сигналам и зарабатывай как успешный трейдер. Автоматизированная система входа в сделки без необходимости длительного анализа рынка

        a(href="/app")
          UiButton.dashboard__header-button(variant="accent") Начать

      .dashboard__body
        .dashboard__body-light
        .dashboard__body-mockup
          img.dashboard__body-mockup-image(:src="mockup" alt="Дашборд")


</template>

<script setup>

const mockup = ref("/images/mockup.png")

</script>

<style lang="scss" scoped src="./dashboard.scss"></style>
