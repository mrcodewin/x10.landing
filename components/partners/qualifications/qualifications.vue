<template lang="pug">
section.qualifications(ref="qualificationsSection")
  .container
    h3.qualifications__title Квалификации и глубина <br> (V1–V6)

    .qualifications__subtitle
      span.qualifications__info-icon !
      span Максимум 60% от оборота можно учитывать из одной ветки

    .qualifications__content
      // desktop
      .qualifications__timeline
        .qualifications__timeline-line
        .qualifications__ticks
          span.qualifications__tick(v-for="q in quals" :key="q.v")
        .qualifications__badge.qualifications__badge--mid Lifestyle Promo
        .qualifications__badge.qualifications__badge--right Lifestyle Promo: премиальные путешествия и элитные встречи

      .qualifications__grid
        .qualifications__item(
          v-for="(q, index) in quals"
          :key="q.v"
          :class="{ 'qualifications__item--visible': hasReached }"
          :style="itemDelayStyle(index)"
        )
          p.qualifications__v {{ q.v }}
          p.qualifications__req
            span {{ q.team }}
            br
            span {{ q.first }}
          p.qualifications__depth {{ q.depth }}

      // tablet (lg and down)
      ul.qualifications__list
        li.qualifications__list-item(
          v-for="(q, index) in quals"
          :key="q.v"
          :class="{ 'qualifications__list-item--visible': hasReached }"
          :style="itemDelayStyle(index)"
        )
          p.qualifications__list-v {{ q.v }}

          .qualifications__list-mid
            .qualifications__list-depth
              span {{ q.depth }}
            span.qualifications__list-badge(v-if="q.promoTag") {{ q.promoTag }}
            span.qualifications__list-badge.qualifications__list-badge--wide(v-if="q.promoWide") {{ q.promoWide }}

          p.qualifications__list-req
            span {{ q.team }}
            br
            span {{ q.first }}


</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'

const qualificationsSection = ref(null)
const hasReached = ref(false)

const itemDelayStyle = (index) => ({
  transitionDelay: `${index * 120}ms`,
})

const quals = [
  { v: 'V1', team: '1 000 VP (команда),',  first: '200 VP (первая линия)',   depth: 'Глубина бонусов: до 4 уровней' },
  { v: 'V2', team: '5 000 VP (команда),',  first: '500 VP (первая линия)',   depth: 'Глубина бонусов: до 5 уровней' },
  { v: 'V3', team: '20 000 VP (команда),', first: '2 000 VP (первая линия)', depth: 'Глубина бонусов: до 5 уровней', promoTag: 'Lifestyle Promo' },
  { v: 'V4', team: '50 000 VP (команда),', first: '5 000 VP (первая линия)', depth: 'Глубина: до 7 уровней' },
  { v: 'V5', team: '100 000 VP (команда),',first: '10 000 VP (первая линия)',depth: 'Глубина: до 9 уровней' },
  { v: 'V6', team: '250 000 VP (команда),',first: '15 000 VP (первая линия)',depth: 'Глубина: до 10 уровней', promoWide: 'Lifestyle Promo: премиальные путешествия и элитные встречи' },
]

useIntersectionObserver(
  qualificationsSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      hasReached.value = true
    }
  },
  { threshold: 0.25 }
)
</script>

<style scoped lang="scss" src="./qualifications.scss"></style>
