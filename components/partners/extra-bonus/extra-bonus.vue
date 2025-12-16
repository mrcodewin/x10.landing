<template lang="pug">
section.extra-bonus
  .container
    h3.extra-bonus__title Экстра-бонус
    .extra-bonus__content
      .extra-bonus__details
        .extra-bonus__item
          span.extra-bonus__value +200$
          span.extra-bonus__description За каждые 2 X10 Premium в первые 30 дней
        .extra-bonus__item
          span.extra-bonus__value +10$
          span.extra-bonus__description За каждые 2 X10 Lite в первые 30 дней
      .extra-bonus__example
        p.extra-bonus__example-title Пример:
        .extra-bonus__example-block
          .extra-bonus__example-row.premium
            p.extra-bonus__example-amount 4 X10 Premium = $400
            p.extra-bonus__example-note
              span.extra-bonus__example-note__text За месяц
              span.extra-bonus__example-note__text Экстра-бонус
          .extra-bonus__example-row.lite
            p.extra-bonus__example-amount 10 X10 Lite = 50$
            p.extra-bonus__example-note
              span.extra-bonus__example-note__text За месяц
              span.extra-bonus__example-note__text Экстра-бонус
</template>

<style scoped lang="scss" src="./extra-bonus.scss"></style>
