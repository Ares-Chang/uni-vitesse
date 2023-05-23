<script setup lang="ts">
import logo from '~/static/logo.png'
</script>

<template>
  <div>
    <div flex justify-center my-6>
      <image w-110 h-110 :src="logo" />
      <div
        text="4xl gray4"
        m="x-4 y-auto"

        i-carbon-add transform transition-all-500 hover:rotate-135
      />
      <div i-carbon-campsite inline-block text-5xl />
    </div>
    <p my-2>
      <span cursor-pointer @click="router.push('https://github.com/Ares-Chang/uni-vitesse')">Uni Vitesse</span>
    </p>
    <p>
      <em text-sm op75 italic>Opinionated Vite Starter Template</em>
    </p>
  </div>
</template>
