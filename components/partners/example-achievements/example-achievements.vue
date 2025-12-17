<template lang="pug">
section.example-achievements
  .container
    h3.example-achievements__title Примеры достижений

    .example-achievements__content
      img.example-achievements__img(
        src="/images/example-achievements.png"
        alt="Примеры достижений"
        loading="lazy"
      )
        

      ul.example-achievements__labels
        li.example-achievements__label(
          v-for="p in points"
          :key="p.v"
          :style="posStyle(p)"
        )
          p.example-achievements__head
            span.example-achievements__v {{ p.v }}
            span.example-achievements__vp {{ p.vp }}
          p.example-achievements__text(v-for="(t,i) in p.lines" :key="i") {{ t }}

    ul.example-achievements__list
      li.example-achievements__list-item(v-for="p in points" :key="p.v")
        .example-achievements__list-top
          span.example-achievements__list-vp {{ p.vp }}
          span.example-achievements__list-v {{ p.v }}
        p.example-achievements__list-text {{ p.lines.join(' / ') }}
</template>

<script setup>

const posStyle = (p) => ({
  '--x': p.x,
  '--y': p.y,
  '--xm': p.xm ? p.xm : p.x,
  '--ym': p.ym ? p.ym : p.y,
})
const points = [
  {
    v: 'V1', vp: '1 000 VP',
    lines: ['20 X10 Lite', '1 X10 Premium', '$1 млн оборота'],
    x: '12%', y: '50%',
    xm: '12%', ym: '63%',
  },
  {
    v: 'V2', vp: '5 000 VP',
    lines: ['100 X10 Lite', '5 X10 Premium', '$5 млн оборота'],
    x: '33%', y: '40%',
    xm: '32%', ym: '50%',
  },
  {
    v: 'V3', vp: '20 000 VP',
    lines: ['20 X10 Premium', '$20 млн оборота'],
    x: '53%', y: '34%',
    xm: '52%', ym: '46%',
  },
  {
    v: 'V4', vp: '100 000 VP',
    lines: ['100 X10 Premium', '$100 млн оборота'],
    x: '71%', y: '16%',
    xm: '72%', ym: '30%',
  },
  {
    v: 'V5', vp: '250 000 VP',
    lines: ['250 X10 Premium', '$250 млн оборота'],
    x: '91%', y: '2%',
    xm: '88%', ym: '12%',
  },
]
</script>

<style scoped lang="scss" src="./example-achievements.scss"></style>
