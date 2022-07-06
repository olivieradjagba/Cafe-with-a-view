<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
nav {
  display: block;
  margin: 10pt;
}
</style>
