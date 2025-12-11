<template lang="pug">
  button.ui-button(:class="`ui-button--${variant}`")
    slot
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<style lang="scss" src="./button.scss"></style>
