<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { getArtist, getArtistAlbums } from '../services/api'

const router = useRouter()
const route = useRoute()
const artist = ref<any>(null)
const albums = ref<any[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const handleBack = () => {
  router.back();
}

// Fetch artist details and albums on component mount
// Similar to React useEffect with empty dependency array

onMounted(async () => {
  try {
    const id = Number(route.params.id)
    const [artistData, albumsData] = await Promise.all([
      getArtist(id),
      getArtistAlbums(id)
    ])
    artist.value = artistData
    albums.value = albumsData.albums
  } catch (e) {
    console.error('Error fetching artist data:', e)
    error.value = 'Failed to load artist. Please try again.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="artist-view">

    <!-- <button @click="$router.back()">← Back</button> -->
    <button @click=handleBack()>← Back</button>
    <div v-if="loading">Loading...</div>

    <div v-if="error">{{ error }}</div>

    <div v-else-if="artist">
      <div class="artist-header">
        <img :src="artist.picture" :alt="artist.name" />
        <div>
          <h1>{{ artist.name }}</h1>
          <p>{{ artist.fans.toLocaleString() }} fans</p>
        </div>
      </div>

      <h2>Albums</h2>
      <div class="albums-grid">
        <RouterLink
          v-for="album in albums"
          :key="album.id"
          :to="{ name: 'album', params: { id: album.id } }"
          class="album-card"
        >
          <img :src="album.cover" :alt="album.title" />
          <p class="album-title">{{ album.title }}</p>
          <p class="album-date">{{ album.releaseDate }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.artist-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.artist-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
}

.artist-header img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.albums-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
}

.album-card {
  text-decoration: none;
  color: inherit;
}

.album-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.album-title {
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0.5rem 0 0.25rem;
}

.album-date {
  font-size: 0.8rem;
  color: #666;
  margin: 0;
}
</style>