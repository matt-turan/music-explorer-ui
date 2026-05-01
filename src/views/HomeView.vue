<script setup lang="ts">
  import { ref } from 'vue'
  import { useMusicStore } from '../stores/musicStore'

  const store = useMusicStore()
  const query = ref('')

  const handleSearch = () => {
    if (query.value.trim()) {
      store.search(query.value)
    }
  }
</script>

<template>
  <div class="home">
    <h1>Music Explorer</h1>

    <div class="search-bar">
      <input
        v-model="query"
        type="text"
        placeholder="Search artists or tracks..."
        @keyup.enter="handleSearch"
      />
      <button @click="handleSearch">Search</button>
    </div>

    <div v-if="store.loading">Loading...</div>
    <div v-if="store.error">{{ store.error }}</div>

    <div v-if="!store.loading && !store.error && store.tracks.length === 0 && query.trim()">
      No results found for "{{ query }}"
    </div>

    <div v-if="store.tracks.length" class="results">

      <div v-for="track in store.tracks" :key="track.id" class="track-card">
        <img :src="track.album.cover" :alt="track.album.title" />
        <div class="track-info">
          <p class="track-title">{{ track.title }}</p>
          <RouterLink :to="{ name: 'artist', params: { id: track.artist.id } }" class="track-artist">
            {{ track.artist.name }}
          </RouterLink>
          <p class="track-album">{{ track.album.title }}</p>
          <audio controls :src="track.preview" preload="none"></audio>
        </div>
      </div>


      <!-- <div v-for="track in store.tracks" :key="track.id" class="track-card">
        <img :src="track.album.cover" :alt="track.album.title" />
        <div class="track-info">
          <p class="track-title">{{ track.title }}</p>
          <p class="track-artist">{{ track.artist.name }}</p>
          <p class="track-album">{{ track.album.title }}</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.search-bar input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

.search-bar button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.track-card {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #ddd;
}

.track-card img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.track-title {
  font-weight: bold;
  margin: 0;
}

.track-artist, .track-album {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
</style>