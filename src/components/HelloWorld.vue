<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello World!')
</script>

<template>
  <view center flex-col>
    <image class="img" src="/static/logo.png" />
    <view flex justify-content>
      <text font-32rpx color-green>
        {{ title }}
      </text>
      <i icon-btn i-carbon-moon />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.img {
  @apply w-200rpx h-200rpx mt-200rpx mb-50rpx;
}
</style>
