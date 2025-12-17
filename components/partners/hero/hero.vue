<template lang="pug">
  section.hero
    .hero__container
      .hero__line.logo
        SvgoLogo.hero__logo

      .hero__line.label
        p Партнерская программа

    .hero__running-line
      .hero__running-track
        span.hero__running-text(v-for="n in 8" :key="n") VAL CAPITAL

</template>

<style lang="scss" scoped src="./hero.scss"></style>
