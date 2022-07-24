<script setup lang="ts">
let title = ref('Hello')
const onClick = () => {
  title.value += ' World'
}

onLoad(() => console.log(G_Test))
</script>

<template>
  <view class="flex flex-col items-center justify-center" @click="onClick">
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
