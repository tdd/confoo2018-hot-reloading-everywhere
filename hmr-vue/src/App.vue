<template>
  <div id="app">
    <h1>HMR Vue Demo</h1>

    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  metaInfo: { title: 'HMR • Vue demo' },
  name: 'app',
  components: {
    Counter,
  },
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2em;
}
</style>
