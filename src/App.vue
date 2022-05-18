<template>
  <Nav />
  <router-view />
</template>

<script setup>
import Nav from './components/layout/Nav.vue';
</script>

<style lang="scss">
body,
html {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  @include desktop {
    overflow-x: hidden;
  }
}
</style>
