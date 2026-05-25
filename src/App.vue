<script setup lang="ts">
import { useThemeStore } from './stores/themeStore'
import Footer from './components/Footer.vue';

const theme = useThemeStore()
</script>

<template>
  <nav class="navbar">
    <RouterLink :to="{ name: 'home' }">Music Explorer</RouterLink>
    <button @click="theme.toggle()" class="btn">
      {{ theme.isDark ? '☀️ Light' : '🌙 Dark' }}
    </button>
  </nav>
  <RouterView />
  <Footer />
</template>

<style scoped>
  .navbar {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 1rem;
    background-color: var(--nav-bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar a {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--text-primary);
  }
</style>