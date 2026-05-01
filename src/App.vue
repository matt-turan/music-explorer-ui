<script setup lang="ts">
</script>

<template>
  <nav class="navbar">
    <RouterLink :to="{ name: 'home' }">Music Explorer</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.navbar {
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
}

.navbar a {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}
</style>