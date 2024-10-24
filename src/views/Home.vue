<template>
  <div class="space-y-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">欢迎来到 Wordflow</h1>
      <p class="text-xl text-gray-600">探索知识的海洋，分享学习的乐趣</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="feature in features" :key="feature.title" class="article-card">
        <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: '丰富的教程资源',
    description: '提供全面的学习材料，助您快速掌握新技能'
  },
  {
    title: '专业的技术支持',
    description: '随时解答您的疑问，帮助您克服学习障碍'
  },
  {
    title: '活跃的社区互动',
    description: '与志同道合的学习者交流，分享经验与见解'
  }
]
</script>