<template lang="pug">
main
  TopbarSection
  //- HeroSection
  WhatWeGiveSection
  StatsSection
  StrategySection
  IncomeSection
  SignalsSection
  ProfitabilitySection

</template>

<script setup>
import TopbarSection from'@/components/sections/topbar/topbar.vue';
import HeroSection from '@/components/sections/hero/hero.vue';
import WhatWeGiveSection from '@/components/sections/what-we-give/what-we-give.vue';
import StatsSection from '@/components/sections/stats/stats.vue';
import StrategySection from '@/components/sections/strategy/strategy.vue';
import IncomeSection from '@/components/sections/income/income.vue';
import SignalsSection from '@/components/sections/signals/signals.vue';
import ProfitabilitySection from '@/components/sections/profitability/profitability.vue';

</script>
