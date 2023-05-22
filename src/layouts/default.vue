<template>
  <main
    px-4 py-10
    font-sans text-center
  >
    <slot />
    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Default Layout]
    </div>
  </main>
</template>

<style lang="scss" scoped>
page {
  @apply: color-gray-700;
}

@media (prefers-color-scheme: dark) {
  page {
    @apply: color-gray-200;
  }
}
</style>
