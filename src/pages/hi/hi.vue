<script setup lang="ts">
const props = defineProps<{ name: string }>()

function goBack() {
  uni.navigateBack()
}
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

    <div>
      <button m-3 mt-8 text-sm btn @click="goBack">
        Back
      </button>
    </div>
  </div>
</template>
