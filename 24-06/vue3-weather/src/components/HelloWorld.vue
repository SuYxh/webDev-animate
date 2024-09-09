<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings p-20px">
    <h1 class="c-green">{{ msg }}</h1>
  </div>
</template>

<style scoped lang="scss"></style>
