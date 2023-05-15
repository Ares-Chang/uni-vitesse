<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div flex justify-center items-center gap-8>
    <div btn w-60 h-60 p-0 rd-full center @click="counter.dec()">
      -
    </div>
    <span font-mono>{{ counter.count }}</span>
    <div btn w-60 h-60 p-0 rd-full center @click="counter.inc()">
      +
    </div>
  </div>
</template>
