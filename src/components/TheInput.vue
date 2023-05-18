<script setup lang="ts">
const { value, placeholder } = defineProps<{
  value: string
  placeholder: string
}>()

const emit = defineEmits(['update:value'])

const modelValue = ref(value)
watchEffect(() => {
  emit('update:value', modelValue.value)
})
</script>

<template>
  <input
    v-model="modelValue"
    type="text"
    :placeholder="placeholder"
    autocomplete="false"
    inline-block
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ solid rd gray-200"
    outline="none active:none"
  >
</template>

<style lang="scss" scoped>
uni-input {
  @media (prefers-color-scheme: dark) {
    @apply: border-color-gray-700;
  }
}
</style>
