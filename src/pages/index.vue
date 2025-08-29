<script setup lang="ts">
const name = ref('')
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
        m-3 btn text-sm
        :disabled="!name"
        @click="router.push(`/pages/hi?name=${name}`)"
      >
        Go
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
layout: home
</route>
