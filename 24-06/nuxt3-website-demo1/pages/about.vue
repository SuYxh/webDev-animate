<template>
  <div>About</div>
  <ul>
    <li v-for='item in data.data' :key='item.id'>
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { useServerRequest } from '~/composables/useServerRequest'

const { data } = await useServerRequest<{data: any}>('server/web/type/movie', {})
</script>
