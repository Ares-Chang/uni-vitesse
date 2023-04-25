<script setup lang="ts">
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style>
page {
  @apply: font-sans text-center px-1rem py-2rem gray-700 dark:gray-200;
}
</style>
