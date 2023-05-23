<script setup lang="ts">
const name = $ref('')
</script>

<template>
  <div>
    <div i-carbon-campsite inline-block text-4xl />
    <p my-1>
      <span @click="router.push('https://github.com/Ares-Chang/uni-vitesse')">Vitesse Lite</span>
    </p>
    <p>
      <em text-sm op75 italic>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <TheInput
      v-model:value="name"
      placeholder="What's your name?"
    />

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="router.push(`/hi?name=${name}`)"
      >
        Go
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
layout: home
</route>
