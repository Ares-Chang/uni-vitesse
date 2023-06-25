<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div flex gap-8 justify-center items-center>
    <div p-0 rd-full center h-60 w-60 btn @click="counter.dec()">
      -
    </div>
    <span font-mono>{{ counter.count }}</span>
    <div p-0 rd-full center h-60 w-60 btn @click="counter.inc()">
      +
    </div>
  </div>
</template>
