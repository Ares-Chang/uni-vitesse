<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<template>
  <view class="flex flex-col items-center justify-center">
    <image class="w-[200rpx] h-[200rpx] m-t-[200rpx]" src="/static/logo.png" />
    <view class="m-t-xs flex gap-2">
      <view class="i-mdi-mine color-pink"></view>
      <view class="title" font-bold>{{ title }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.title {
  @apply: color-yellow;
}
</style>
