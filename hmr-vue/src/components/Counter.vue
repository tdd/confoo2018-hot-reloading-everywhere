<template>
  <div class="counter">
    <button v-on:click="decrement">⬅️</button>
    {{count}}
    <button v-on:click="increment">➡️</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: () => ({ count: 0 }),

  methods: {
    decrement() {
      this.count--
    },
    increment() {
      this.count++
    },
  },
}
</script>

<style scoped>
button {
  font-size: 100%;
}

button:first-of-type {
  margin-right: 0.5em;
}

button:last-of-type {
  margin-left: 0.5em;
}
</style>
