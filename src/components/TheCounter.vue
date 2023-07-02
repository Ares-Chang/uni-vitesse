<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div flex items-center justify-center gap-8>
    <div h-8 w-8 center rd-full p-0 btn @click="counter.dec()">
      -
    </div>
    <span font-mono>{{ counter.count }}</span>
    <div h-8 w-8 center rd-full p-0 btn @click="counter.inc()">
      +
    </div>
  </div>
</template>
