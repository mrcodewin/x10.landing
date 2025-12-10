<template lang="pug">
NuxtPage/
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core';

const referralCookie = useCookie("referralCode");
const route = useRoute();
if (import.meta.client) {
  const { y } = useWindowScroll({ behavior: 'smooth' });

  const handleAnchorClick = (event) => {
    const target = event.target;
    const anchor = target?.closest('a[href^="#"]');

    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const destination = document.querySelector(href);
    if (!destination) return;

    event.preventDefault();

    const top = destination.getBoundingClientRect().top + window.scrollY;
    y.value = top;
  };

  onMounted(() => {
    document.addEventListener('click', handleAnchorClick);

    const refCode = route.query?.r;

    if (refCode) {
      referralCookie.value = refCode;
    }
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleAnchorClick);
  });
}
</script>
