<template lang="pug">
section.referral-bonus
  .container
    h3.referral-bonus__title Реферальный бонус
    .referral-bonus__content
      .referral-bonus__lines
        .referral-bonus__line-item(v-for="line in referralLines" :key="line.label")
          span.referral-bonus__line-item__label {{ line.label }}
          .referral-bonus__line-item__marker
            span.referral-bonus__line-item__line
            span.referral-bonus__line-item__dot
          span.referral-bonus__line-item__percent {{ line.percent }}

      .referral-bonus__example
        p.referral-bonus__example-label Пример:
        .referral-bonus__example-card

          .referral-bonus__example-card__top
            p.referral-bonus__example-amount 1 000$ = 100$
            .referral-bonus__example-text
              span Продажа X10 Premium
              span В 1 линии

          .referral-bonus__example-card__bottom
            .referral-bonus__example-column
              span.referral-bonus__example-value 30$
              span.referral-bonus__example-action Продажа во 2 линии

            .referral-bonus__example-column.line
            
            .referral-bonus__example-column
              span.referral-bonus__example-value 20$
              span.referral-bonus__example-action Продажа 3 Premium
</template>

<script setup>
const referralLines = [
  { label: '1 линия', percent: '10%' },
  { label: '2 линия', percent: '3%' },
  { label: '3 линия', percent: '2%' },
]
</script>

<style scoped lang="scss" src="./referral-bonus.scss"></style>
