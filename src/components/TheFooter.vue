<script setup lang="ts">

</script>

<template>
  <div flex="~ gap-4" mt-5 justify-center text-xl>
    <navigator url="/" open-type="redirect" title="Home">
      <div icon-btn i-carbon-campsite />
    </navigator>

    <div icon-btn title="Toogle dark mode" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </div>

    <a icon-btn rel="noreferrer" href="https://github.com/Ares-Chang/uni-vitesse" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </div>
</template>
