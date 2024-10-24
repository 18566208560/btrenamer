<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Main article content -->
    <article class="md:col-span-2 prose lg:prose-xl dark:prose-invert">
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      <div class="flex items-center text-sm text-gray-500 mb-8">
        <span>{{ article.date }}</span>
        <span class="mx-2">·</span>
        <span>{{ article.readTime }} 分钟阅读</span>
      </div>
      <div class="article-content" v-html="article.content"></div>
    </article>

    <!-- Sidebar -->
    <aside class="space-y-6">
      <!-- Popular Articles -->
      <div class="article-card">
        <h2 class="text-xl font-semibold mb-4">热门文章</h2>
        <ul class="space-y-4">
          <li v-for="article in popularArticles" :key="article.id">
            <router-link 
              :to="`/article/${article.id}`"
              class="block hover:text-primary transition-colors"
            >
              <h3 class="font-medium">{{ article.title }}</h3>
              <div class="text-sm text-gray-500 mt-1">
                {{ article.views }} 次阅读
              </div>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Recent Updates -->
      <div class="article-card">
        <h2 class="text-xl font-semibold mb-4">最近更新</h2>
        <ul class="space-y-4">
          <li v-for="article in recentArticles" :key="article.id">
            <router-link 
              :to="`/article/${article.id}`"
              class="block hover:text-primary transition-colors"
            >
              <h3 class="font-medium">{{ article.title }}</h3>
              <div class="text-sm text-gray-500 mt-1">
                {{ article.date }}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref({
  title: '入门指南：如何开始使用 Wordflow',
  date: '2024-03-20',
  readTime: 5,
  content: `
    <p>欢迎来到 Wordflow！本文将详细介绍如何开始使用我们的平台。</p>
    <h2>第一步：注册账号</h2>
    <p>首先，您需要创建一个账号来开始使用我们的服务...</p>
    <h2>第二步：浏览课程</h2>
    <p>登录后，您可以浏览我们丰富的课程资源...</p>
    <!-- 更多内容 -->
  `
})

// 热门文章数据
const popularArticles = ref([
  {
    id: 1,
    title: 'Wordflow 进阶技巧大全',
    views: 1234
  },
  {
    id: 2,
    title: '如何提高学习效率？',
    views: 986
  },
  {
    id: 3,
    title: '新手常见问题解答',
    views: 756
  },
  {
    id: 4,
    title: '学习方法论：从入门到精通',
    views: 654
  }
])

// 最近更新文章数据
const recentArticles = ref([
  {
    id: 5,
    title: '2024年学习路线图',
    date: '2024-03-21'
  },
  {
    id: 6,
    title: '新功能发布：智能学习助手',
    date: '2024-03-20'
  },
  {
    id: 7,
    title: '如何制定个性化学习计划',
    date: '2024-03-19'
  },
  {
    id: 8,
    title: '效率工具推荐',
    date: '2024-03-18'
  }
])
</script>