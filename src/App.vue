<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="container py-8">
      <router-view></router-view>
    </main>
  </div>
</template>