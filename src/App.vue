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
  color: #2c3e50;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.alert-green {
  background-color: lightgreen;
}

.alert-orange {
  background-color: orange;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.w-50 {
  width: 50%;
}

.pointer {
  cursor: pointer;
}

@media (min-width: 950px) {
  .alert {
    width: 900px;
    margin: 0 auto;
  }
}
</style>
