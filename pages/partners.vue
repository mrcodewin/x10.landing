<template lang="pug">
main
  TopbarSection

  WhatWeGiveSection
  
  FooterSection
</template>

<script setup>
import TopbarSection from '@/components/common/topbar/topbar.vue';

import WhatWeGiveSection from '../components/partners/what-we-give/what-we-give.vue';

import FooterSection from '@/components/common/footer/footer.vue';
</script>
