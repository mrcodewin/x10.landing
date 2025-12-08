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
  CalculatorSection
  ConnectSection
  RewardsSection
  CommunitySection
  BonusesSection
  DashboardSection

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
import CalculatorSection from '@/components/sections/calculator/calculator.vue';
import ConnectSection from '@/components/sections/connect/connect.vue';
import RewardsSection from '@/components/sections/rewards/rewards.vue';
import CommunitySection from '../components/sections/community/community.vue';
import BonusesSection from '../components/sections/bonuses/bonuses.vue';
import DashboardSection from '../components/sections/dashboard/dashboard.vue';

</script>
