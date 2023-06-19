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
      <div mb-6>
        <h1 mb-2>
          Sub Page
        </h1>
        <p text-sm op75 italic>
          <em>Sub Page Content</em>
        </p>
      </div>

      <TheFooter />
    </main>
  </div>
</template>
