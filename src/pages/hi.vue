<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p>
      Hi, {{ props.name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <TheCounter m="t-8 b-5" />

    <div>
      <button m-3 text-sm btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
