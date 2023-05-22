<template>
  <div flex="~ gap-4" mt-5 justify-center text-xl>
    <div title="Home" @click="router.replace('/index')">
      <div icon-btn i-carbon-campsite />
    </div>

    <div icon-btn title="Toogle dark mode" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </div>

    <div icon-btn title="GitHub" @click="router.push('https://github.com/Ares-Chang/uni-vitesse')">
      <div i-carbon-logo-github />
    </div>
  </div>
</template>
