<template lang="pug">
section.shareholder-bonus
  .container
    h3.shareholder-bonus__title Акционерский бонус:

    .shareholder-bonus__content
      img.shareholder-bonus__img(
        src="/images/shareholder-bonus.png"
        alt="Акционерский бонус"
        loading="lazy"
      )

      .shareholder-bonus__center
        p.shareholder-bonus__percent 1%
        p.shareholder-bonus__caption Чистой прибыли компании
</template>

<style scoped lang="scss" src="./shareholder-bonus.scss"></style>
