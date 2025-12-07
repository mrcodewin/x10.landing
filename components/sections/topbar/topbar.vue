<template lang="pug">
  header.topbar
    .topbar__container.container
      .topbar__left
        SvgoLogo.topbar__logo

      .topbar__center
        nav.topbar__nav
          ul.topbar__nav-list
            li.topbar__nav-item партнеры
            li.topbar__nav-item калькулятор
            li.topbar__nav-item подключение

      .topbar__right
        UiButton(variant="accent") Присоединиться
     
</template>

<style lang="scss" scoped src="./topbar.scss"></style>
