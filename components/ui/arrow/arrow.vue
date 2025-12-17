<template lang="pug">
  span.arrow(:style="{ '--c': color, '--h': height, '--l': width, '--head': head }")
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#FF5343',
  },
  height: {
    type: String,
    default: '10px',
  },
  width: {
    type: String,
    default: '10px',
  },
  head: {
    type: String,
    default: '10px',
  },
})
</script>

<style lang="scss" src="./arrow.scss"></style>
