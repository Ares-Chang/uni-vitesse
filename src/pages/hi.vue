<script setup lang="ts">
const props = defineProps<{ name: string }>()

const date = useDateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p my-1>
      Hi, {{ props.name }}!
    </p>
    <div text-sm italic op75>
      <em>Demo of dynamic route</em>
      <p mt-1>
        <em>{{ date }} log</em>
      </p>
    </div>

    <div m="t-8 b-5">
      <TheCounter />
    </div>

    <div>
      <button m-3 text-sm btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
