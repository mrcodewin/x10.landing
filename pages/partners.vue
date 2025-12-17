<template lang="pug">
main.partners-page
  TopbarSection

  HeroSection
  WhatWeGiveSection
  CalculatorVpSection
  ConversionSection
  QualificationsSection
  QualificationIncomeSection
  ExtensionSection
  BonusesSection
  ReferralBonusSection
  ExtraBonusSection
  RatingBonusSection
  ShareholderBonusSection
  RebateBonusSection
  //- ProfitShareBonusSection
  LifestylePromoSection
  ExampleAchievementsSection

  FooterSection
</template>

<script setup>
import TopbarSection from '@/components/common/topbar/topbar.vue';

import HeroSection from '../components/partners/hero/hero.vue';
import WhatWeGiveSection from '../components/partners/what-we-give/what-we-give.vue';
import CalculatorVpSection from '../components/partners/calculator-vp/calculator-vp.vue';
import ConversionSection from '../components/partners/conversion/conversion.vue';
import QualificationsSection from '../components/partners/qualifications/qualifications.vue';
import QualificationIncomeSection from '../components/partners/qualification-income/qualification-income.vue'
import ExtensionSection from '../components/partners/extension/extension.vue';
import BonusesSection from '../components/partners/bonuses/bonuses.vue'
import ReferralBonusSection from '../components/partners/referral-bonus/referral-bonus.vue'
import ExtraBonusSection from '../components/partners/extra-bonus/extra-bonus.vue'
import RatingBonusSection from '../components/partners/rating-bonus/rating-bonus.vue'
import ShareholderBonusSection from '../components/partners/shareholder-bonus/shareholder-bonus.vue';
import RebateBonusSection from '../components/partners/rebate-bonus/rebate-bonus.vue'
import ProfitShareBonusSection from '../components/partners/profit-share-bonus/profit-share-bonus.vue'
import LifestylePromoSection from '../components/partners/lifestyle-promo/lifestyle-promo.vue'
import ExampleAchievementsSection from '../components/partners/example-achievements/example-achievements.vue';

import FooterSection from '@/components/common/footer/footer.vue';
</script>

<style lang="scss">
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.partners-page {
  position: relative;
  min-height: 100vh;
  isolation: isolate;
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    width: clamp(960px, 88vw, 1680px);
    height: clamp(680px, 72vw, 1320px);
    top: clamp(-520px, -28vw, -120px);
    left: 85%;
    transform: translate(-50%, 0) rotate(-16deg);
    background:
      linear-gradient(120deg, rgba($color-white, 0.14) 0%, rgba($color-turquoise, 0.26) 34%, rgba($color-white, 0.1) 58%, rgba($color-turquoise, 0.04) 82%, rgba($color-turquoise, 0) 96%),
      radial-gradient(ellipse at 68% 30%, rgba($color-white, 0.36) 0%, rgba($color-white, 0.16) 26%, rgba($color-white, 0) 54%),
      radial-gradient(ellipse at 75% 44%, rgba($color-turquoise, 0.8) 0%, rgba($color-turquoise, 0.5) 32%, rgba($color-turquoise, 0.18) 60%, rgba($color-turquoise, 0) 82%),
      radial-gradient(ellipse at 36% 56%, rgba($color-white, 0.16) 0%, rgba($color-white, 0) 48%);
    filter: blur(96px);
    opacity: 0.92;
    pointer-events: none;
    z-index: -1;

    @include media-breakpoint-down(md) {
      width: clamp(680px, 118vw, 1020px);
      height: clamp(560px, 110vw, 920px);
      top: clamp(-420px, -36vw, -180px);
      transform: translate(-50%, 0) rotate(-10deg);
    }
  }
}
</style>
