<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="https://img.freepik.com/premium-vector/colorful-outlined-book-store-logo-design-template-usable-for-online-store_9692-773.jpg?w=996"
      width="250"
    />
    <Bookmag msg="Книжный магазин" />
  </div>
</template>

<script>
import Bookmag from './components/Bookmag.vue';
export default {
  name: 'App',
  components: {
    Bookmag,
  },
};
</script>

<style>
#app {
  font-family: monospace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f2f2;
  margin-top: 30px;
}
</style>
