<template lang="pug">
  section.rewards
    .rewards__container.container
      .rewards__header
        .rewards__header-title
          | Многоуровневая система вознаграждений: Зарабатывайте в криптовалюте!

        .rewards__header-label
          | Это синергия твоего желания расти и наших передовых технологий

        .rewards__header-button
          UiButton(variant="accent") Начать сейчас

      .rewards__body
        p.rewards__body-info X10 — это возможность зарабатывать не только на финансовых рынках, но и приглашая  в систему клиентов или партнёров.
        img.rewards__body-video(:src="video" alt="Видео")


</template>

<script setup>

const video = ref("/images/rewards.gif")

</script>

<style lang="scss" scoped src="./rewards.scss"></style>
