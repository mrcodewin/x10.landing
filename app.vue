<template lang="pug">
NuxtPage/
</template>

<script setup>
const referralCookie = useCookie("referralCode");
const route = useRoute();
if (import.meta.client) {
  onMounted(() => {
    const refCode = route.query?.r;

    if (refCode) {
      referralCookie.value = refCode;
    }
  });
}
</script>
