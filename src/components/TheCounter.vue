<script setup lang="ts">
const count = ref(0)

function inc() {
  count.value++
}
function dec() {
  count.value--
}
</script>

<template>
  <div flex justify-center items-center gap-8>
    <div btn w-60 h-60 p-0 rd-full center @click="dec()">
      -
    </div>
    <span font-mono>{{ count }}</span>
    <div btn w-60 h-60 p-0 rd-full center @click="inc()">
      +
    </div>
  </div>
</template>
