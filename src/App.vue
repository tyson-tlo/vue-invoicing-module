<template>
  <navbar-view></navbar-view>
  <router-view></router-view>
</template>

<script>
import NavbarView from './views/layouts/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavbarView
  }
}
</script>

<style>
html, body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>
