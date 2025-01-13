import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = useStorage('count', 0)

  function inc() {
    count.value++
  }

  function dec() {
    count.value--
  }

  return {
    count,
    inc,
    dec,
  }
})
