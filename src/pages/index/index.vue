<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<template>
  <view class="flex flex-col items-center justify-center">
    <image class="w-[200rpx] h-[200rpx] m-t-[200rpx]" src="/static/logo.png" />
    <view class="m-t-xs">
      <text class="title color-pink">{{ title }}</text>
    </view>
  </view>
</template>
