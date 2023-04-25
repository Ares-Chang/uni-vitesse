<script setup lang="ts">
const name = $ref('')

function go(url?: string) {
  if (url) {
    // #ifdef H5
    window.open(url)
    // #endif

    // #ifndef H5
    uni.navigateTo({
      url: `/pages/webview/index?url=${url}`,
    })
    // #endif
    return
  }
  uni.navigateTo({
    url: `/pages/hi/index?name=${name}`,
  })
}
</script>

<template>
  <div>
    <div i-carbon-campsite inline-block text-4xl />
    <p>
      <span @click="go('https://github.com/Ares-Chang/uni-vitesse')">Vitesse Lite</span>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <TheInput
      v-model:value="name"
      placeholder="What's your name?"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go()"
      >
        Go
      </button>
    </div>
  </div>
</template>
