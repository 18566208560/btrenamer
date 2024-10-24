<script setup lang="ts">
import { useTheme, themeColors } from '../composables/useTheme'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const { colorScheme, themeColor, toggleColorScheme, setThemeColor } = useTheme()
</script>

<template>
  <div class="flex items-center space-x-4">
    <!-- Color theme selector -->
    <div class="flex space-x-2">
      <button
        v-for="(color, name) in themeColors"
        :key="name"
        @click="setThemeColor(name as any)"
        :class="[
          'w-6 h-6 rounded-full transition-transform',
          themeColor === name ? 'scale-110 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900' : ''
        ]"
        :style="{ backgroundColor: color.primary }"
      >
        <span class="sr-only">{{ name }} theme</span>
      </button>
    </div>

    <!-- Dark mode toggle -->
    <button
      @click="toggleColorScheme"
      class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <SunIcon v-if="colorScheme === 'dark'" class="w-5 h-5" />
      <MoonIcon v-else class="w-5 h-5" />
    </button>
  </div>
</template>