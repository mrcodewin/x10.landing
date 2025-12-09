<template lang="pug">
  header.topbar
    .topbar__container.container
      .topbar__left
        SvgoLogo.topbar__logo

      nav.topbar__nav
        ul.topbar__nav-list
          li.topbar__nav-item(v-for="item in navItems" :key="item") {{ item }}
        

      .topbar__right
        UiButton.topbar__button(variant="accent") Присоединиться

      button.topbar__burger(type="button" @click="toggleMenu" aria-label="Открыть меню")
        span.topbar__burger-lines
          span.topbar__burger-line
          span.topbar__burger-line
          span.topbar__burger-line

    transition(name="topbar-fade")
      .topbar__overlay(v-if="isMenuOpen" @click.self="closeMenu")
        .topbar__drawer
          button.topbar__close(type="button" @click="closeMenu" aria-label="Закрыть меню")
            span.topbar__close-lines
              span.topbar__close-line
              span.topbar__close-line

          nav.topbar__drawer-nav
            ul.topbar__drawer-list
              li.topbar__drawer-item(v-for="item in navItems" :key="item") {{ item }}

</template>

<script setup>
import { ref } from 'vue'

const navItems = ['партнеры', 'калькулятор', 'подключение']

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style lang="scss" scoped src="./topbar.scss"></style>
