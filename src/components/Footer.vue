<script setup lang="ts">
    import { ref } from 'vue'
    const currentYear = ref(new Date().getFullYear())
    // onMounted(() => {
    //     currentYear = new Date().getFullYear();
    // });
</script>

<template>
  <footer class="footer">
    <div>
      <p>© {{ currentYear }} Mehmet Turan — Built with Vue and Vite.</p>
    </div>
  </footer>
</template>