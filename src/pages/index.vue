<script setup lang="ts">
const name = $ref('')
</script>

<template>
  <div>
    <TheLogo />

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

      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="router.push({ name: 'Hi', query: { name } })"
      >
        Go By Name
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
name: Home
layout: home
# tabBar:
#   iconPath: static/logo.png
#   selectedIconPath: static/logo.png
</route>
