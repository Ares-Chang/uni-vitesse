<script setup lang="ts">
// defineOptions({
//   name: 'IndexPage',
// })

const name = $ref('')

// const router = useRouter()
function go() {
  // if (name)
  // router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <div i-carbon-campsite inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      type="text"
      placeholder="What's your name?"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
