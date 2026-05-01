<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAlbum } from '../services/api'

const route = useRoute()
const album = ref<any>(null)
const loading = ref(true)

onMounted(async () => {
  const id = Number(route.params.id)
  album.value = await getAlbum(id)
  loading.value = false
})
</script>

<template>
  <div class="album-view">
    <button @click="$router.back()" class="btn">← Back</button>

    <div v-if="loading">Loading...</div>

    <div v-else-if="album">
      <div class="album-header">
        <img :src="album.cover" :alt="album.title" />
        <div>
          <h1>{{ album.title }}</h1>
          <p>{{ album.artist.name }}</p>
        </div>
      </div>

      <h2>Tracks</h2>
      <div class="track-list">
        <div v-for="track in album.tracks" :key="track.id" class="track-row">
          <span class="track-title">{{ track.title }}</span>
          <span class="track-duration">{{ Math.floor(track.duration / 60) }}:{{ String(track.duration % 60).padStart(2, '0') }}</span>
          <audio controls :src="track.preview" preload="none"></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .album-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .album-header {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin: 1.5rem 0;
  }

  .album-header img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
  }

  .album-header h1 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .album-header p {
    color: var(--text-secondary);
  }

  h2 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .track-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .track-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
  }

  .track-title {
    flex: 1;
    color: var(--text-primary);
  }

  .track-duration {
    font-size: 0.9rem;
    color: var(--text-secondary);
    min-width: 40px;
  }
</style>