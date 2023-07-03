<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <main
      p="x-4 y-10"
      font-sans text="center"
      color="gray-700 dark:gray-200"
    >
      <slot />
      <TheFooter />
      <div mx-auto mt-4 text-center text-sm opacity-50>
        [Home Layout]
      </div>
    </main>
  </div>
</template>
