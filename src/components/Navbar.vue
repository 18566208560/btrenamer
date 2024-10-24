<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import ThemeToggle from './ThemeToggle.vue'

const navigation = [
  { name: '首页', href: '/' },
  { name: '教程', href: '/tutorials' },
  { name: '支持', href: '/support' },
  { name: '捐赠', href: '/donate' },
  { name: '联系方式', href: '/contact' },
]
</script>

<template>
  <Disclosure as="nav" class="bg-white dark:bg-gray-800 shadow-lg" v-slot="{ open }">
    <div class="container">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0">
            <span class="text-2xl font-bold text-primary">Wordflow</span>
          </router-link>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <div class="flex space-x-4">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
              :class="$route.path === item.href ? 'text-primary' : 'text-gray-700 dark:text-gray-300'"
            >
              {{ item.name }}
            </router-link>
          </div>
          <ThemeToggle />
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <DisclosureButton class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="$route.path === item.href ? 'text-primary bg-gray-100 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
        >
          {{ item.name }}
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>