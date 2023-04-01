<script setup lang="ts">
const count = $ref(0)
watchEffect(() => {
  console.log(count)
})
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

    <view mt-10 flex items-center gap-6>
      <button @click="count--">
        -
      </button>
      <text>
        {{ count }}
      </text>
      <button @click="count++">
        +
      </button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.img {
  @apply w-200rpx h-200rpx mt-200rpx mb-50rpx;
}
</style>
