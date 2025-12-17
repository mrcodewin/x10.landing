<template lang="pug">
main
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
  ProfitShareBonusSection
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
