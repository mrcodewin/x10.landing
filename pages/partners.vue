<template lang="pug">
main
  TopbarSection

  WhatWeGiveSection
  CalculatorVpSection
  ConversionSection
  
  FooterSection
</template>

<script setup>
import TopbarSection from '@/components/common/topbar/topbar.vue';

import WhatWeGiveSection from '../components/partners/what-we-give/what-we-give.vue';
import CalculatorVpSection from '../components/partners/calculator-vp/calculator-vp.vue';
import ConversionSection from '../components/partners/conversion/conversion.vue';

import FooterSection from '@/components/common/footer/footer.vue';
</script>
