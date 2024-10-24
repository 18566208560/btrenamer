<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">教程列表</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article v-for="article in articles" :key="article.id" class="article-card">
        <h2 class="text-xl font-semibold mb-2">
          <router-link :to="'/article/' + article.id" class="hover:text-blue-600">
            {{ article.title }}
          </router-link>
        </h2>
        <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
        <div class="flex items-center text-sm text-gray-500">
          <span>{{ article.date }}</span>
          <span class="mx-2">·</span>
          <span>{{ article.readTime }} 分钟阅读</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    id: 1,
    title: '入门指南：如何开始使用 Wordflow',
    excerpt: '本教程将带您了解 Wordflow 的基本功能和使用方法...',
    date: '2024-03-20',
    readTime: 5
  },
  {
    id: 2,
    title: '高级技巧：提升您的学习效率',
    excerpt: '掌握这些技巧，让您的学习事半功倍...',
    date: '2024-03-19',
    readTime: 8
  },
  // 更多文章...
]
</script>