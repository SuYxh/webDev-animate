<script setup lang="ts">
import IconTooling from '@/components/icons/IconTooling.vue'
import { useCounterStore } from '@/stores/counter'

defineProps<{
  msg: string
}>()

const store = useCounterStore()
const { count, doubleCount } = toRefs(store)
</script>

<template>
  <h1 class="c-green">
    <icon-tooling />
    {{ msg }}
  </h1>
  {{ count }}: {{ doubleCount }}
  <button @click="store.increment">Increment</button>
  <i class="i-formkit-search"></i>
</template>
