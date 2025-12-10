<template lang="pug">
  section.hero
    .hero__container
      .hero__left
        .hero__logo-wrap
          UiAnimateLogo.hero__logo

      .hero__right
        p.hero__title умножай капитал вместе с рынком
        p.hero__mobile-label Экосистема для роста капитала
        a(href="/app/login")
          UiButton(variant="accent").hero__button Начать сейчас
    .hero__label Экосистема для роста капитала

</template>

<style lang="scss" scoped src="./hero.scss"></style>
