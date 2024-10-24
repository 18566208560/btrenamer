import { ref, watch } from 'vue'

type ColorScheme = 'light' | 'dark'
type ThemeColor = 'blue' | 'purple' | 'green' | 'orange'

const colorScheme = ref<ColorScheme>(
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
)
const themeColor = ref<ThemeColor>('blue')

export const themeColors = {
  blue: {
    primary: '#3b82f6',
    hover: '#2563eb',
  },
  purple: {
    primary: '#8b5cf6',
    hover: '#7c3aed',
  },
  green: {
    primary: '#10b981',
    hover: '#059669',
  },
  orange: {
    primary: '#f97316',
    hover: '#ea580c',
  },
}

export function useTheme() {
  const toggleColorScheme = () => {
    colorScheme.value = colorScheme.value === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark')
  }

  const setThemeColor = (color: ThemeColor) => {
    themeColor.value = color
    document.documentElement.style.setProperty('--primary-color', themeColors[color].primary)
    document.documentElement.style.setProperty('--primary-hover', themeColors[color].hover)
  }

  // Initialize theme
  watch(colorScheme, (newValue) => {
    if (newValue === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  return {
    colorScheme,
    themeColor,
    toggleColorScheme,
    setThemeColor,
  }
}