<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <main
      px-4 py-10
      font-sans text="center"
      color-gray-700 dark:color-gray-200
    >
      <slot />
      <TheFooter />
      <div mx-auto mt-4 text-center text-sm opacity-50>
        [Home Layout]
      </div>
    </main>
  </div>
</template>
